"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, Zap, BookOpen, Cpu } from "lucide-react";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import { researchItems } from "@/lib/data/resume";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TiltCard } from "@/components/ui/TiltCard";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Research() {
  const [active, setActive] = useState(0);
  const item = researchItems[active];

  return (
    <section id="research" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          label="Research"
          title="Advancing Cyber Defense Science"
          description="International conference publications and multi-agent security frameworks advancing AI-driven threat mitigation and digital trust."
          align="center"
        />

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {researchItems.map((r, i) => (
            <button
              suppressHydrationWarning
              key={r.id}
              onClick={() => setActive(i)}
              className={`rounded-full px-6 py-2.5 font-mono text-sm transition-all duration-300 ${
                active === i
                  ? "bg-foreground text-background shadow-sm"
                  : "bg-white/5 text-foreground/60 hover:bg-white/10 hover:text-foreground"
              }`}
            >
              {r.title.split(" ").slice(0, 3).join(" ")}...
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <TiltCard>
              <div className="glass-card overflow-hidden rounded-[2rem]">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative overflow-hidden bg-white/[0.02] p-10 lg:p-16">
                    <div className="absolute inset-0 cyber-grid opacity-30" />
                    <div className="relative">
                      <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-widest text-foreground/80">
                        Research Panel
                      </span>
                      <h3 className="mt-6 font-heading text-3xl font-semibold leading-tight md:text-4xl">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-lg text-foreground/70">{item.tagline}</p>

                      <div className="mt-12 flex flex-wrap gap-3">
                        {item.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg bg-white/5 border border-white/10 px-4 py-1.5 font-mono text-sm text-foreground/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-10 p-10 lg:p-16">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      {[
                        { icon: BookOpen, label: "Overview", value: item.overview },
                        { icon: Layers, label: "Architecture", value: item.architecture },
                        { icon: Zap, label: "Innovation", value: item.innovation },
                        { icon: Cpu, label: "Impact", value: item.impact },
                      ].map(({ icon: Icon, label, value }) => (
                        <div key={label} className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Icon className="h-5 w-5 text-foreground/80" />
                            <span className="font-mono text-xs uppercase tracking-wider text-foreground/60">
                              {label}
                            </span>
                          </div>
                          <p className="text-sm leading-relaxed text-foreground/70">{value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                      <div className="space-y-2">
                        <div className="text-sm">
                          <span className="text-foreground/50">Publication: </span>
                          <span className="font-medium text-foreground">{item.publication}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-foreground/50">Conference: </span>
                          <span className="font-medium text-foreground">{item.conference}</span>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <MagneticButton href={item.github} variant="secondary" external>
                          <GitHubIcon className="h-4 w-4" />
                          Code
                        </MagneticButton>
                        <MagneticButton href="#research" variant="primary">
                          <ExternalLink className="h-4 w-4" />
                          Paper
                        </MagneticButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
