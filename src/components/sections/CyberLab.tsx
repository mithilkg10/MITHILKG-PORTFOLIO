"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TiltCard } from "@/components/ui/TiltCard";
import { cyberLab } from "@/lib/data/resume";

export function CyberLab() {
  return (
    <section id="lab" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          label="Cyber Lab"
          title="Security Arsenal"
          description="A living laboratory of offensive and defensive security skills, tools, and research capabilities."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {cyberLab.categories.map((cat, catIndex) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.05 }}
            >
              <TiltCard className="h-full">
                <div className="glass-card group h-full rounded-[2rem] p-6 transition-colors duration-300 hover:bg-white/[0.04]">
                  <h3 className="mb-5 font-mono text-xs font-semibold uppercase tracking-widest text-foreground/80">
                    {cat.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-xs text-foreground/70 transition-colors duration-300 group-hover:bg-white/10 group-hover:text-foreground/90"
                        transition={{ delay: i * 0.02 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
