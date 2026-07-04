"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Target, Flag, FileText, CheckCircle, ChevronRight, Lock } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MagneticButton } from "@/components/ui/MagneticButton";

type TabId = "audits" | "ctf" | "htb";

const tabs = [
  { id: "audits", label: "Security Audits", icon: Shield },
  { id: "ctf", label: "CTF Challenges", icon: Flag },
  { id: "htb", label: "Hack The Box", icon: Target },
] as const;

export function SecurityAssessments() {
  const [activeTab, setActiveTab] = useState<TabId>("audits");

  return (
    <section id="assessments" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Practical Skills"
          title="Security Assessments & CTFs"
          description="Interactive debriefs of hands-on vulnerability assessments, certifications, and active threat simulations."
        />

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar Tabs */}
          <div className="flex w-full flex-row gap-2 overflow-x-auto pb-4 lg:w-64 lg:flex-col lg:overflow-visible lg:pb-0">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabId)}
                  className={`group relative flex w-full min-w-max items-center gap-3 rounded-xl px-4 py-4 text-left transition-all duration-300 ${
                    isActive ? "bg-white/10 text-foreground" : "text-foreground/50 hover:bg-white/5 hover:text-foreground/80"
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? "text-foreground" : "text-foreground/40 group-hover:text-foreground/70"}`} />
                  <span className="font-mono text-sm uppercase tracking-wider">{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 -z-10 rounded-xl border border-white/10 bg-white/5"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {activeTab === "audits" && (
                <motion.div
                  key="audits"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card rounded-[2rem] p-8"
                >
                  <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-6">
                    <div>
                      <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground">Botium Toys Risk Assessment</h3>
                      <p className="mt-2 font-mono text-sm text-foreground/50">Enterprise IT Assets & Compliance Audit</p>
                    </div>
                    <div className="hidden items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-400 sm:flex">
                      <CheckCircle className="h-3 w-3" />
                      COMPLETED
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-foreground/70">
                          <Target className="h-4 w-4" /> Methodology
                        </h4>
                        <ul className="space-y-3 text-sm text-foreground/60">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40" />
                            Analyzed the entire security program, including IT assets and internal processes.
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40" />
                            Evaluated compliance against NIST CSF frameworks and international standards.
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40" />
                            Identified critical missing controls (encryption, IDS, separation of duties).
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-foreground/70">
                          <Shield className="h-4 w-4" /> Analytics
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="rounded-xl border border-white/5 bg-black/40 p-4">
                            <div className="font-mono text-xl font-bold text-red-400">8 / 10</div>
                            <div className="text-xs text-foreground/40">High Risk Score</div>
                          </div>
                          <div className="rounded-xl border border-white/5 bg-black/40 p-4">
                            <div className="font-mono text-xl font-bold text-orange-400">Critical</div>
                            <div className="text-xs text-foreground/40">Mitigation Priority</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center">
                      <FileText className="mb-4 h-12 w-12 text-foreground/30" />
                      <h4 className="mb-2 font-medium text-foreground/80">Audit Documentation</h4>
                      <p className="mb-6 text-xs text-foreground/50">
                        View the complete Risk Assessment report and the Control Categories matrix defining administrative, technical, and physical safeguards.
                      </p>
                      
                      <div className="flex flex-col gap-3 w-full max-w-xs">
                        <MagneticButton href="/111.pdf" variant="secondary" external>
                          View Risk Assessment (111.pdf)
                        </MagneticButton>
                        <MagneticButton href="/222.pdf" variant="ghost" external>
                          View Control Categories (222.pdf)
                        </MagneticButton>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "ctf" && (
                <motion.div
                  key="ctf"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card flex min-h-[400px] flex-col items-center justify-center rounded-[2rem] p-8 text-center"
                >
                  <Lock className="mb-6 h-12 w-12 text-foreground/20" />
                  <h3 className="mb-2 font-heading text-xl font-bold text-foreground">CTF Write-Ups (Incoming)</h3>
                  <p className="max-w-sm text-sm text-foreground/50">
                    Detailed write-ups for reverse engineering, cryptography, and binary exploitation challenges will be decrypted here soon.
                  </p>
                </motion.div>
              )}

              {activeTab === "htb" && (
                <motion.div
                  key="htb"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card flex min-h-[400px] flex-col items-center justify-center rounded-[2rem] p-8 text-center"
                >
                  <Lock className="mb-6 h-12 w-12 text-foreground/20" />
                  <h3 className="mb-2 font-heading text-xl font-bold text-foreground">Hack The Box Machines</h3>
                  <p className="max-w-sm text-sm text-foreground/50">
                    Machine compromise walkthroughs, privilege escalation techniques, and attack chain methodologies are currently restricted.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
