import { blogPosts } from "@/lib/data/blogData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TiltCard } from "@/components/ui/TiltCard";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import { ThreatMapBackground } from "@/components/ui/ThreatMapBackground";

export const metadata = {
  title: "Engineering Blog | Security & Systems",
  description: "Deep technical dives into cryptography, distributed systems, and machine learning security.",
};

export default function BlogIndex() {
  return (
    <main className="relative min-h-screen bg-black pt-24 pb-20 overflow-hidden">
      <ThreatMapBackground />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Back Navigation */}
        <Link 
          href="/"
          className="group mb-12 inline-flex items-center gap-2 font-mono text-sm text-neutral-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>

        <SectionHeader
          label="Engineering Blog"
          title="Technical Deep Dives"
          description="Exploring the mathematics, architecture, and code behind modern cybersecurity and distributed systems."
          align="center"
        />

        <div className="mt-16 grid gap-8">
          {blogPosts.map((post) => (
            <TiltCard key={post.id}>
              <Link href={`/blog/${post.slug}`} className="block h-full group">
                <div className="glass-card rounded-[2rem] p-8 md:p-10 transition-all duration-300 hover:bg-white/[0.04]">
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm font-mono text-foreground/50">
                    <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-foreground/70 leading-relaxed mb-8">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-foreground/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="flex items-center gap-2 text-sm font-semibold text-foreground group-hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </TiltCard>
          ))}
        </div>
      </div>
    </main>
  );
}
