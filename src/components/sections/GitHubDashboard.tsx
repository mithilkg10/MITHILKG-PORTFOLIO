"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import { personal } from "@/lib/data/resume";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface GitHubData {
  user: {
    login: string;
    name: string;
    public_repos: number;
    followers: number;
    avatar_url: string;
    html_url: string;
  };
  repos: Array<{
    name: string;
    description: string;
    html_url: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    topics: string[];
  }>;
  languages: Record<string, number>;
}

export function GitHubDashboard() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const topLanguages = data
    ? Object.entries(data.languages)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 6)
    : [];

  const totalLang = topLanguages.reduce((sum, [, v]) => sum + v, 0);

  return (
    <section id="github" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="GitHub"
          title="Open Source Activity"
          description="Live dashboard showcasing repositories, languages, and contributions."
        />

        {loading ? (
          <div className="glass-card flex min-h-[400px] flex-col items-center justify-center rounded-[2.5rem] p-12 text-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white" />
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-foreground/40">Loading GitHub data...</p>
          </div>
        ) : data ? (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Profile Card */}
            <motion.div
              className="glass-card rounded-[2.5rem] p-8 lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-5">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/10">
                  <Image
                    src={data.user.avatar_url}
                    alt={data.user.login}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">{data.user.name || data.user.login}</h3>
                  <p className="font-mono text-sm text-foreground/60">@{data.user.login}</p>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/5 bg-white/5 p-5 text-center transition-colors hover:bg-white/10">
                  <p className="font-mono text-2xl font-bold text-foreground">
                    {data.user.public_repos}
                  </p>
                  <p className="mt-1 text-xs font-medium text-foreground/50">Repositories</p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-white/5 p-5 text-center transition-colors hover:bg-white/10">
                  <p className="font-mono text-2xl font-bold text-foreground">
                    {data.user.followers}
                  </p>
                  <p className="mt-1 text-xs font-medium text-foreground/50">Followers</p>
                </div>
              </div>

              {/* Contribution-style grid */}
              <div className="mt-8">
                <p className="mb-4 font-mono text-xs uppercase tracking-wider text-foreground/50">
                  Activity
                </p>
                <div className="grid grid-cols-[repeat(26,minmax(0,1fr))] gap-1">
                  {Array.from({ length: 182 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-[2px]"
                      style={{
                        backgroundColor: `rgba(255, 255, 255, ${Math.random() > 0.6 ? Math.random() * 0.5 + 0.1 : 0.03})`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <MagneticButton
                href={data.user.html_url}
                variant="secondary"
                external
                className="mt-8 w-full !py-4"
              >
                <GitHubIcon className="h-4 w-4" /> View Profile
              </MagneticButton>
            </motion.div>

            {/* Languages & Repos */}
            <div className="space-y-6 lg:col-span-2">
              <motion.div
                className="glass-card rounded-[2rem] p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="mb-6 font-mono text-xs uppercase tracking-wider text-foreground/50">
                  Top Languages
                </p>
                <div className="space-y-4">
                  {topLanguages.map(([lang, count]) => (
                    <div key={lang}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="font-medium text-foreground/80">{lang}</span>
                        <span className="font-mono text-foreground/40">
                          {Math.round((count / totalLang) * 100)}%
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          className="h-full rounded-full bg-foreground/80"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(count / totalLang) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {data.repos.slice(0, 4).map((repo, i) => (
                  <motion.a
                    key={repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card group rounded-[2rem] p-6 transition-colors duration-300 hover:bg-white/[0.04]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex items-start justify-between">
                      <h4 className="font-mono text-sm font-semibold text-foreground/90 transition-colors group-hover:text-foreground">
                        {repo.name}
                      </h4>
                      <ExternalLink className="h-4 w-4 text-foreground/30 transition-colors group-hover:text-foreground/70" />
                    </div>
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-foreground/60">
                      {repo.description || "No description"}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs font-medium text-foreground/50">
                      {repo.language && (
                        <span className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-foreground/50" />
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1.5">
                        <Star className="h-3.5 w-3.5" /> {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <GitFork className="h-3.5 w-3.5" /> {repo.forks_count}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="glass-card flex min-h-[400px] flex-col items-center justify-center rounded-[2.5rem] p-12 text-center">
            <p className="text-foreground/50">Unable to load GitHub data.</p>
            <MagneticButton href={personal.github} variant="secondary" external className="mt-6">
              Visit GitHub Profile
            </MagneticButton>
          </div>
        )}
      </div>
    </section>
  );
}
