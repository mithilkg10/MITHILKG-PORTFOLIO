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
        <SectionHeader label="Education" title="Cyber Security Engineering" description="Current postgraduate study and undergraduate foundation." />
        <div className="space-y-6">
          <TiltCard>
            <motion.div className="glass-card rounded-[2.5rem] p-8 md:p-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.25rem] border border-white/10 bg-white/5"><GraduationCap className="h-7 w-7 text-foreground/80" /></div>
                <div>
                  <h3 className="font-heading text-xl font-bold md:text-2xl">University of Warwick</h3>
                  <p className="mt-1.5 font-medium text-foreground/70">MSc Cyber Security Engineering</p>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-foreground/50">
                    <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> 2026–2027</span>
                    <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> Coventry, United Kingdom</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </TiltCard>
          <div className="glass-card rounded-[2rem] p-8">
            <h3 className="font-heading text-lg font-bold">{education.institution}</h3>
            <p className="mt-1 text-sm text-foreground/70">{education.degree}</p>
            <p className="mt-3 text-xs text-foreground/50">{education.period} · {education.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
