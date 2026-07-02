"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Rocket, Shield } from "lucide-react";
import { achievements } from "@/lib/data/resume";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const badges = [
  { icon: Rocket, label: "ISRO LEOS Internship Selection" },
  { icon: Award, label: "Reliance Foundation Scholar" },
  { icon: BookOpen, label: "International Conference Publications" },
  { icon: Shield, label: "Author in Cybersecurity & AI Research" },
];

export function Achievements() {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          label="Achievements"
          title="Milestones & Impact"
          description="Recognition for academic excellence, research contributions, and selection to India's premier space research organization."
        />

        <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {achievements.map((a) => (
            <AnimatedCounter
              key={a.label}
              value={a.value}
              suffix={a.suffix}
              label={a.label}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              className="glass-card flex items-center gap-4 rounded-2xl p-5 transition-colors duration-300 hover:bg-white/[0.04]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <badge.icon className="h-5 w-5 text-foreground/80" />
              </div>
              <p className="font-heading text-sm font-semibold leading-snug text-foreground">{badge.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
