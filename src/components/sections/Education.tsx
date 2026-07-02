"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { education } from "@/lib/data/resume";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TiltCard } from "@/components/ui/TiltCard";

export function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="Education"
          title="Academic Foundation"
          description="Building deep expertise in information science, security engineering, and AI-driven research."
        />

        <TiltCard>
          <motion.div
            className="glass-card rounded-[2.5rem] p-8 transition-colors duration-300 hover:bg-white/[0.04] md:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.25rem] border border-white/10 bg-white/5">
                  <GraduationCap className="h-7 w-7 text-foreground/80" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold md:text-2xl">{education.institution}</h3>
                  <p className="mt-1.5 font-medium text-foreground/70">{education.degree}</p>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium text-foreground/50">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {education.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {education.location}
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-5 text-center">
                <p className="font-mono text-xs font-semibold uppercase tracking-widest text-foreground/50">
                  {education.cgpaLabel}
                </p>
                <p className="mt-2 font-mono text-4xl font-bold tracking-tighter text-foreground">{education.cgpa}</p>
              </div>
            </div>
          </motion.div>
        </TiltCard>
      </div>
    </section>
  );
}
