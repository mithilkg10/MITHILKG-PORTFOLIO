import re

with open("src/components/sections/SecurityAssessments.tsx", "r", encoding="utf-8") as f:
    content = f.read()

new_tab = """  { id: "journal", label: "Handler Journals", icon: FileText },
  { id: "htb", label: "Hack The Box", icon: Target },"""
content = content.replace('{ id: "htb", label: "Hack The Box", icon: Target },', new_tab)

type_tab = """type TabId = "audits" | "incident" | "ctf" | "htb" | "journal";"""
content = content.replace('type TabId = "audits" | "incident" | "ctf" | "htb";', type_tab)

new_content = """              {activeTab === "journal" && (
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
                            Centralized log management improves visibility across an organization's systems.
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
                            The attackers wanted to extort money by encrypting the clinic's files and demanding payment for the decryption key.
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
"""

content = content.replace('{activeTab === "htb" && (', new_content + '\n              {activeTab === "htb" && (')

with open("src/components/sections/SecurityAssessments.tsx", "w", encoding="utf-8") as f:
    f.write(content)
