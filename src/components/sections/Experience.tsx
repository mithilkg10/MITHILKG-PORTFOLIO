"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Calendar, GitCommit } from "lucide-react";
import { experience } from "@/lib/data/resume";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const items = sectionRef.current?.querySelectorAll(".timeline-item");
    if (items) {
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
            },
          }
        );
      });
    }
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section-padding relative">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="Experience"
          title="Building Security at Scale"
          description="Real-world experience securing data and building analytics platforms for India's space research organization."
        />

        <div className="relative">
          {/* Clean Git-style commit line */}
          <div className="absolute left-[2.25rem] top-4 h-[calc(100%-2rem)] w-px bg-white/10 md:left-1/2 md:-translate-x-px" />

          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="timeline-item relative mb-12 md:mb-16"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} gap-8`}>
                <div className="hidden md:block md:w-1/2" />

                {/* Commit node */}
                <div className="absolute left-[2.25rem] z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-white/20 shadow-[0_0_0_1px_rgba(255,255,255,0.1)] md:left-1/2">
                  <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
                </div>

                <div className="ml-16 md:ml-0 md:w-1/2">
                  <div className="glass-card group rounded-[2rem] p-8 transition-colors duration-300 hover:bg-white/[0.04] md:mx-6">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      <span className="font-mono text-xs font-semibold text-foreground/80">{exp.logo}</span>
                    </div>
                    
                    <h3 className="font-heading text-xl font-bold text-foreground">{exp.company}</h3>
                    <p className="mt-2 text-sm font-medium text-foreground/80">{exp.role}</p>
                    
                    <div className="mt-4 flex flex-wrap gap-4 font-mono text-xs text-foreground/50">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>
                    
                    <ul className="mt-6 space-y-3">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/60">
                          <GitCommit className="mt-0.5 h-4 w-4 shrink-0 text-foreground/30" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
