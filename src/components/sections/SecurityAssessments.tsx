"use client";

import Link from "next/link";
import {RangeMark} from "@/components/ui/RangeMark";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Target, FileText, CheckCircle, ChevronRight, Activity } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MagneticButton } from "@/components/ui/MagneticButton";

type TabId = "audits" | "incident" | "journal" | "cyberlab";

const tabs = [
  { id: "cyberlab", label: "CyberLab Evidence", icon: Activity },
  { id: "audits", label: "Security Audits", icon: Shield },
  { id: "incident", label: "Incident Response", icon: Activity },
  { id: "journal", label: "Handler Journals", icon: FileText },
] as const;

export function SecurityAssessments() {
  const [activeTab, setActiveTab] = useState<TabId>("cyberlab");

  return (
    <section id="assessments" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Practical Skills"
          title="Security Assessments and Analysis"
          description="Practical debriefs of security audits, incident analysis, packet investigation, SIEM workflows, and documented defensive security exercises."
        />

        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex w-full flex-row gap-2 overflow-x-auto pb-4 lg:w-64 lg:flex-col lg:overflow-visible lg:pb-0">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id} aria-pressed={isActive}
                  onClick={() => setActiveTab(tab.id)}
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

          <div className="min-w-0 flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              {activeTab === "cyberlab" && <motion.div key="cyberlab" className="range-assessment" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><RangeMark/><p className="range-kicker">PUBLIC INVESTIGATION RECORD</p><h3>Six investigations. Inspectable evidence.</h3><p>Preserved telemetry, detection evidence, Wazuh alerts and MITRE mappings. Each case includes containment records, retests and public documentation.</p><p>Five PASS cases. INC 004 remains PARTIAL. Application evidence supports INC 005; Wazuh context for INC 006 does not prove direct transfer detection.</p><div className="range-feature-actions"><Link className="range-action-primary" href="/evidence">Open Evidence Vault ↗</Link><a href="https://github.com/mithilkg10/MKG-Cyber-Defense-Lab/tree/main/incidents">Open GitHub Cases</a></div></motion.div>}
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
                      <p className="mt-2 font-mono text-sm text-foreground/50">Enterprise IT Assets and Compliance Audit</p>
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
                            Analyzed the security program, including IT assets and internal processes.
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40" />
                            Evaluated controls against NIST CSF concepts and international security standards.
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40" />
                            Identified missing controls involving encryption, intrusion detection, and separation of duties.
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
                        Review the complete risk assessment and control categories covering administrative, technical, and physical safeguards.
                      </p>
                      <div className="flex w-full max-w-xs flex-col gap-3">
                        <MagneticButton href="/111.pdf" variant="secondary" external>
                          View Risk Assessment
                        </MagneticButton>
                        <MagneticButton href="/222.pdf" variant="ghost" external>
                          View Control Categories
                        </MagneticButton>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "incident" && (
                <motion.div
                  key="incident"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card rounded-[2rem] p-8"
                >
                  <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-6">
                    <div>
                      <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground">Network Traffic Analysis</h3>
                      <p className="mt-2 font-mono text-sm text-foreground/50">Incident Response and tcpdump Packet Analysis</p>
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
                            Conducted packet analysis using tcpdump to investigate unreachable DNS services.
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40" />
                            Analyzed UDP and ICMP traffic to diagnose network connectivity behavior around DNS traffic.
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40" />
                            Documented root cause possibilities including denial of service activity and firewall misconfiguration.
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40" />
                            Applied the NIST Cybersecurity Framework to structure investigation, response, and recovery analysis.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-foreground/70">
                          <Shield className="h-4 w-4" /> Forensics
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="rounded-xl border border-white/5 bg-black/40 p-4">
                            <div className="font-mono text-xl font-bold text-cyan-400">tcpdump</div>
                            <div className="text-xs text-foreground/40">Packet Analyzer</div>
                          </div>
                          <div className="rounded-xl border border-white/5 bg-black/40 p-4">
                            <div className="font-mono text-xl font-bold text-orange-400">UDP / ICMP</div>
                            <div className="text-xs text-foreground/40">Protocols Evaluated</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center">
                      <FileText className="mb-4 h-12 w-12 text-foreground/30" />
                      <h4 className="mb-2 font-medium text-foreground/80">Incident Reports</h4>
                      <p className="mb-6 text-xs text-foreground/50">
                        Review the traffic investigation, NIST based incident analysis, and documented methodology.
                      </p>
                      <div className="flex w-full max-w-xs flex-col gap-3">
                        <MagneticButton href="/Incident-report-analysis.pdf" variant="secondary" external>
                          View NIST Framework Analysis
                        </MagneticButton>
                        <MagneticButton href="/report incident traffic analysed.pdf" variant="ghost" external>
                          View Traffic Analysis Report
                        </MagneticButton>
                        <MagneticButton href="/incident report.pdf" variant="ghost" external>
                          View Incident Breakdown
                        </MagneticButton>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "journal" && (
                <motion.div
                  key="journal"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card rounded-[2rem] p-8"
                >
                  <div className="mb-8 flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 font-mono text-xs text-blue-400">Entry 1 / MKG</span>
                        <span className="font-mono text-xs text-foreground/50">18 July 2026</span>
                      </div>
                      <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground">Log Analysis using Splunk</h3>
                      <p className="mt-2 font-mono text-sm text-foreground/50">SIEM Detection and Analysis Journal</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-foreground/70">
                      <Activity className="h-3.5 w-3.5 text-cyan-400" /> SIEM
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div className="space-y-5 lg:col-span-2">
                      <div>
                        <h4 className="mb-2 font-mono text-xs uppercase tracking-wider text-foreground/40">Description</h4>
                        <p className="text-sm leading-relaxed text-foreground/75">
                          Performed log analysis in Splunk to search security events, identify suspicious login behavior, and connect evidence across centralized logs. The exercise focused on detection and analysis workflows used by SOC analysts during investigation.
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2 font-mono text-xs uppercase tracking-wider text-foreground/40">Analyst Focus</h4>
                        <p className="text-sm leading-relaxed text-foreground/65">
                          Reviewed event context, suspicious authentication activity, source and destination behavior, and the evidence required to distinguish normal activity from potential unauthorized access.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/5 bg-black/30 p-6">
                      <h4 className="mb-4 font-mono text-xs uppercase tracking-wider text-foreground/40">Security Workflow</h4>
                      <ul className="space-y-3 text-sm text-foreground/65">
                        <li className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40" /> Centralized log search</li>
                        <li className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40" /> Suspicious login analysis</li>
                        <li className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40" /> Event correlation</li>
                        <li className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40" /> Evidence documentation</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
