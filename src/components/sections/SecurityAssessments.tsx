"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Target, Flag, FileText, CheckCircle, ChevronRight, Lock, Activity } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MagneticButton } from "@/components/ui/MagneticButton";

type TabId = "audits" | "incident" | "ctf" | "htb" | "journal";

const tabs = [
  { id: "audits", label: "Security Audits", icon: Shield },
  { id: "incident", label: "Incident Response", icon: Activity },
  { id: "ctf", label: "CTF Challenges", icon: Flag },
    { id: "journal", label: "Handler Journals", icon: FileText },
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
                      <p className="mt-2 font-mono text-sm text-foreground/50">Incident Response & tcpdump Packet Sniffing</p>
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
                            Conducted packet sniffing using tcpdump to investigate unreachable DNS servers.
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40" />
                            Analyzed UDP/ICMP traffic logs to diagnose network connectivity issues (Port 53).
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40" />
                            Documented root cause analysis indicating potential DoS attack or firewall misconfiguration.
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40" />
                            Applied the NIST Cybersecurity Framework (Identify, Protect, Detect, Respond, Recover) to document the incident and mitigation.
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
                            <div className="font-mono text-xl font-bold text-orange-400">UDP/ICMP</div>
                            <div className="text-xs text-foreground/40">Protocols Evaluated</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center">
                      <FileText className="mb-4 h-12 w-12 text-foreground/30" />
                      <h4 className="mb-2 font-medium text-foreground/80">Incident Reports</h4>
                      <p className="mb-6 text-xs text-foreground/50">
                        View the detailed traffic analysis report and the exemplar methodology breakdown.
                      </p>
                      
                      <div className="flex flex-col gap-3 w-full max-w-xs">
                        <MagneticButton href="/Incident-report-analysis.pdf" variant="secondary" external>
                          View NIST Framework Analysis
                        </MagneticButton>
                        <MagneticButton href="/report incident traffic analysed.pdf" variant="ghost" external>
                          View Traffic Analysis Report
                        </MagneticButton>
                        <MagneticButton href="/incident report.pdf" variant="ghost" external>
                          View Exemplar Breakdown
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

                            {activeTab === "journal" && (
                <motion.div
                  key="journal"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="glass-card rounded-[2rem] p-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50"></div>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-mono">Entry: 1/MKG</span>
                          <span className="text-foreground/50 text-sm font-mono">18 July 2026</span>
                        </div>
                        <h3 className="text-xl font-bold font-heading text-foreground">Log Analysis using Splunk</h3>
                      </div>
                      <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-foreground/70">
                        <Activity className="w-3 h-3 text-cyan-400" /> SIEM
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <h4 className="text-xs font-mono text-foreground/40 uppercase tracking-wider mb-2">Description</h4>
                          <p className="text-sm text-foreground/80 leading-relaxed">
                            Performed log analysis using Splunk to search security events and identify suspicious login attempts. The exercise demonstrated how SIEM platforms centralize logs, support investigations, and improve incident response. This belongs to the Detection and Analysis phase because log analysis helps security analysts identify potential threats and collect evidence.
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="bg-black/30 border border-white/5 p-4 rounded-xl">
                            <h4 className="text-xs font-mono text-foreground/40 uppercase tracking-wider mb-2">Who</h4>
                            <p className="text-sm text-foreground/70">An external attacker communicating with an internal system.</p>
                          </div>
                          <div className="bg-black/30 border border-white/5 p-4 rounded-xl">
                            <h4 className="text-xs font-mono text-foreground/40 uppercase tracking-wider mb-2">What</h4>
                            <p className="text-sm text-foreground/70">Suspicious network traffic indicating possible unauthorized access.</p>
                          </div>
                          <div className="bg-black/30 border border-white/5 p-4 rounded-xl">
                            <h4 className="text-xs font-mono text-foreground/40 uppercase tracking-wider mb-2">When</h4>
                            <p className="text-sm text-foreground/70">During packet capture and network monitoring.</p>
                          </div>
                          <div className="bg-black/30 border border-white/5 p-4 rounded-xl">
                            <h4 className="text-xs font-mono text-foreground/40 uppercase tracking-wider mb-2">Where</h4>
                            <p className="text-sm text-foreground/70">Internal organizational network.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="bg-blue-500/5 border border-blue-500/10 p-5 rounded-2xl h-full">
                          <h4 className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <Target className="w-3.5 h-3.5" /> Why & Impact
                          </h4>
                          <p className="text-sm text-foreground/80 mb-6">
                            To identify unusual activity and prevent further compromise.
                          </p>
                          
                          <h4 className="text-xs font-mono text-blue-400/70 uppercase tracking-wider mb-3">Additional Notes</h4>
                          <p className="text-sm text-foreground/60">
                            Centralized log management improves visibility across an organization&apos;s systems.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card rounded-[2rem] p-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-red-500/50"></div>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full text-xs font-mono">Entry: 2/MKG</span>
                          <span className="text-foreground/50 text-sm font-mono">18 July 2026</span>
                        </div>
                        <h3 className="text-xl font-bold font-heading text-foreground">Ransomware Incident at Healthcare Clinic</h3>
                      </div>
                      <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-foreground/70">
                        <Shield className="w-3 h-3 text-red-400" /> Detection & Analysis
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <h4 className="text-xs font-mono text-foreground/40 uppercase tracking-wider mb-2">Description</h4>
                          <p className="text-sm text-foreground/80 leading-relaxed">
                            Documented a ransomware incident affecting a small healthcare clinic. Employees were unable to access patient records because ransomware encrypted critical files after a phishing email installed malware. This investigation belongs to the Detection and Analysis phase of the NIST Incident Response Lifecycle.
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="bg-black/30 border border-white/5 p-4 rounded-xl">
                            <h4 className="text-xs font-mono text-foreground/40 uppercase tracking-wider mb-2">Who</h4>
                            <p className="text-sm text-foreground/70">An organized group of cybercriminals targeted the healthcare clinic using phishing emails.</p>
                          </div>
                          <div className="bg-black/30 border border-white/5 p-4 rounded-xl">
                            <h4 className="text-xs font-mono text-foreground/40 uppercase tracking-wider mb-2">What</h4>
                            <p className="text-sm text-foreground/70">Employees opened a malicious email attachment, allowing ransomware to encrypt files. A ransom note demanded payment.</p>
                          </div>
                          <div className="bg-black/30 border border-white/5 p-4 rounded-xl">
                            <h4 className="text-xs font-mono text-foreground/40 uppercase tracking-wider mb-2">When</h4>
                            <p className="text-sm text-foreground/70">The incident occurred on Tuesday at approximately 9:00 a.m.</p>
                          </div>
                          <div className="bg-black/30 border border-white/5 p-4 rounded-xl">
                            <h4 className="text-xs font-mono text-foreground/40 uppercase tracking-wider mb-2">Where</h4>
                            <p className="text-sm text-foreground/70">Internal computer systems, preventing access to medical records and critical files.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="bg-red-500/5 border border-red-500/10 p-5 rounded-2xl h-full">
                          <h4 className="text-xs font-mono text-red-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <Lock className="w-3.5 h-3.5" /> Why & Motivation
                          </h4>
                          <p className="text-sm text-foreground/80 mb-6">
                            The attackers wanted to extort money by encrypting the clinic&apos;s files and demanding payment for the decryption key.
                          </p>
                          
                          <h4 className="text-xs font-mono text-red-400/70 uppercase tracking-wider mb-3">Remediation Notes</h4>
                          <p className="text-sm text-foreground/60">
                            Isolate infected systems immediately, notify authorities, restore data from secure backups, and improve employee phishing awareness training.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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
