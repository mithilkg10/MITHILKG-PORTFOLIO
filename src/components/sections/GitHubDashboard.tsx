"use client";

import { motion } from "framer-motion";
import { Shield, Target, Activity } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MagneticButton } from "@/components/ui/MagneticButton";

const topLanguages = [
  ["Python", 90],
  ["TypeScript", 85],
  ["Bash / Shell", 80],
  ["SQL", 75],
  ["C++", 70],
] as const;

const competencies = [
  {
    name: "HoneyBee Defense Framework",
    description: "Adaptive threat intelligence and deep reinforcement learning for autonomous response.",
    skills: ["Threat Intel", "ML", "DQN"],
  },
  {
    name: "STAVP Cryptographic Pipeline",
    description: "Secure transaction validation using Zero-Knowledge Proofs and AES-256.",
    skills: ["AES-256", "ZKP", "Cryptography"],
  },
  {
    name: "Enterprise Security Audit",
    description: "Role-based access control, compliance, and interactive analytics dashboards.",
    skills: ["RBAC", "Compliance", "Flask"],
  },
  {
    name: "AI-Governed Carbon Passport",
    description: "Fraud detection and intelligent pricing models for digital carbon exchanges.",
    skills: ["Fraud Detection", "Encryption", "AI"],
  },
];

export function GitHubDashboard() {
  return (
    <section id="github" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Impact"
          title="Security & Impact Metrics"
          description="Quantifiable achievements, core competencies, and technical proficiency across cyber defense domains."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Profile Card */}
          <motion.div
            className="glass-card rounded-[2.5rem] p-8 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground">
                <Shield className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">Cybersecurity Impact</h3>
                <p className="font-mono text-sm text-foreground/60">Self-Reported Metrics</p>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4 text-center transition-colors hover:bg-white/10">
                <p className="font-mono text-2xl font-bold text-foreground">10k+</p>
                <p className="mt-1 text-xs font-medium text-foreground/50">Attacks Neutralized</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4 text-center transition-colors hover:bg-white/10">
                <p className="font-mono text-2xl font-bold text-foreground">98.2%</p>
                <p className="mt-1 text-xs font-medium text-foreground/50">Detection Accuracy</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4 text-center transition-colors hover:bg-white/10">
                <p className="font-mono text-2xl font-bold text-foreground">25+</p>
                <p className="mt-1 text-xs font-medium text-foreground/50">Threat Models</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4 text-center transition-colors hover:bg-white/10">
                <p className="font-mono text-2xl font-bold text-foreground">15+</p>
                <p className="mt-1 text-xs font-medium text-foreground/50">ML Models Trained</p>
              </div>
            </div>

            {/* Contribution-style grid */}
            <div className="mt-8">
              <p className="mb-4 font-mono text-xs uppercase tracking-wider text-foreground/50">
                Research Activity
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
              href="#research"
              variant="secondary"
              className="mt-8 w-full !py-4"
            >
              <Activity className="h-4 w-4" /> View Research
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
                Top Languages & Environments
              </p>
              <div className="space-y-4">
                {topLanguages.map(([lang, percentage]) => (
                  <div key={lang}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-medium text-foreground/80">{lang}</span>
                      <span className="font-mono text-foreground/40">{percentage}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        className="h-full rounded-full bg-foreground/80"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {competencies.map((comp, i) => (
                <motion.div
                  key={comp.name}
                  className="glass-card group rounded-[2rem] p-6 transition-colors duration-300 hover:bg-white/[0.04]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-start justify-between">
                    <h4 className="font-mono text-sm font-semibold text-foreground/90 transition-colors group-hover:text-foreground">
                      {comp.name}
                    </h4>
                    <Target className="h-4 w-4 text-foreground/30 transition-colors group-hover:text-foreground/70" />
                  </div>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-foreground/60">
                    {comp.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-foreground/50">
                    {comp.skills.map(skill => (
                      <span key={skill} className="flex items-center gap-1.5 rounded bg-white/5 px-2 py-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-foreground/50" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
