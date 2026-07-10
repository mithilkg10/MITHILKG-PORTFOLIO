"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRole, Role } from "@/lib/data/roleContext";
import { ChevronDown, ShieldCheck, Zap, Database, Terminal, FileCode2, Network, type LucideIcon } from "lucide-react";

const roleDetails: Record<Role, { description: string; competencies: string[]; tools: string[]; icon: LucideIcon }> = {
  "General": {
    description: "I am a versatile Security Engineer & Systems Researcher combining deep backend engineering with advanced cryptographic trust frameworks.",
    competencies: ["Full-Stack Engineering", "Cryptography (STAVP/ZKPs)", "Multi-Agent Systems", "Network Architecture", "Zero-Trust Deployment"],
    tools: ["Python", "Go", "TypeScript", "React", "PostgreSQL", "Kafka", "Docker", "Kubernetes", "AWS", "Git"],
    icon: Terminal
  },
  "Cybersecurity Engineer": {
    description: "I engineer defense-in-depth architectures, securing critical infrastructure with advanced cryptography and distributed threat intelligence pipelines.",
    competencies: ["Threat Modeling", "Post-Quantum Cryptography", "Vulnerability Management", "Network Telemetry", "Zero-Trust Principles", "Security Operations"],
    tools: ["Splunk", "Zeek", "Suricata", "Wireshark", "Burp Suite", "Nmap", "Metasploit", "Tenable/Nessus", "AWS Security Hub"],
    icon: ShieldCheck
  },
  "SOC Analyst": {
    description: "I monitor and analyze network telemetry using ML-driven tools to achieve 98%+ detection accuracy with near-zero false positives.",
    competencies: ["Intrusion Detection (Snort/Zeek)", "SIEM Engineering", "Log Analysis & PCAP", "Incident Response Playbooks", "Malware Analytics", "Threat Hunting"],
    tools: ["Splunk Enterprise Security", "QRadar", "Elastic Security (ELK)", "CrowdStrike Falcon", "Zeek", "Snort", "Wireshark", "TheHive", "MISP"],
    icon: Network
  },
  "Application Security Engineer": {
    description: "I integrate security directly into the application layer, implementing Zero-Knowledge Proofs (zk-STARKs) and semantic obfuscation to prevent data tampering.",
    competencies: ["Secure Code Review", "ZKP Implementation", "DAST / SAST", "OWASP Top 10 Defenses", "Application Cryptography", "SSDLC"],
    tools: ["Burp Suite Pro", "Checkmarx", "SonarQube", "Snyk", "Veracode", "OWASP ZAP", "Postman", "Circom", "SnarkJS"],
    icon: FileCode2
  },
  "Cloud Security Engineer": {
    description: "I secure distributed cloud environments and orchestrate ML-driven workflows across scalable architectures like AWS, Docker, and Kubernetes.",
    competencies: ["AWS IAM/EC2/S3 Security", "Kubernetes Hardening", "Docker Security", "Zero-Trust Architectures", "CSPM / CWPP", "Terraform / IaC Security"],
    tools: ["AWS (GuardDuty, Macie, Inspector)", "Terraform", "Kubernetes (RBAC, Network Policies)", "Trivy", "Aqua Security", "Prisma Cloud", "Docker", "Vault"],
    icon: Database
  },
  "AI Security Engineer": {
    description: "I architect adversarial ML defense frameworks, utilizing deep reinforcement learning and hybrid XGBoost/CNN models for autonomous response.",
    competencies: ["Adversarial ML Defense", "Deep Q-Networks (DQN)", "XGBoost & CNN-LSTM", "Model Poisoning Mitigation", "Defensive Distillation", "AI Governance"],
    tools: ["PyTorch", "TensorFlow", "Scikit-Learn", "XGBoost", "ART (Adversarial Robustness Toolbox)", "CleverHans", "Jupyter", "MLflow", "CUDA"],
    icon: Zap
  },
  "Threat Intelligence Analyst": {
    description: "I proactively gather, analyze, and share cyber threat intel utilizing distributed systems like Apache Kafka for global, low-latency threat neutralization.",
    competencies: ["Threat Hunting & Attribution", "Kafka Intel Sharing", "C2 Infrastructure Analysis", "Malware Analytics", "OSINT/Dark Web Intel", "IOC Enrichment"],
    tools: ["MISP", "Maltego", "VirusTotal Intelligence", "Shodan", "Censys", "Apache Kafka", "Elasticsearch", "AlienVault OTX", "YARA"],
    icon: Network
  },
  "DevSecOps Engineer": {
    description: "I seamlessly inject security guardrails into CI/CD pipelines, automating threat detection without compromising high-frequency deployment velocity.",
    competencies: ["Pipeline Automation", "Infrastructure as Code Security", "Container Security", "Continuous Monitoring", "SAST/DAST/SCA", "Automated Compliance"],
    tools: ["GitHub Actions", "GitLab CI", "Jenkins", "Terraform", "HashiCorp Vault", "Snyk", "Trivy", "SonarQube", "ArgoCD", "Kubernetes"],
    icon: Terminal
  },
  "DFIR Analyst": {
    description: "I investigate security breaches, performing memory analysis and reverse engineering to neutralize advanced persistent threats across enterprise networks.",
    competencies: ["Digital Forensics", "Malware Reverse Engineering", "Memory Analysis", "Kill-Chain Reconstruction", "Host & Network Forensics", "Chain of Custody"],
    tools: ["Volatility", "Ghidra", "IDA Pro", "Autopsy", "FTK Imager", "Wireshark", "Sysinternals", "Velociraptor", "Cuckoo Sandbox"],
    icon: ShieldCheck
  },
  "GRC Analyst": {
    description: "I enforce strict access controls and validate compliance (e.g., GDPR data-deletion via Proactive Secret Sharing) across complex, global deployments.",
    competencies: ["Risk Assessments & Audits", "Compliance (GDPR, NIST, ISO27001)", "Data Privacy Frameworks", "Trust Governance", "Proactive Secret Sharing", "Policy Enforcement"],
    tools: ["OneTrust", "Archer", "ServiceNow GRC", "Drata", "Vanta", "NIST CSF Framework", "Splunk", "Jira"],
    icon: FileCode2
  },
  "Software Engineer": {
    description: "I write high-performance, concurrent software in Python and Go, building distributed systems capable of sub-second operational latency and mass scale.",
    competencies: ["Python/Go Advanced Programming", "Distributed Systems Architecture", "Microservices & gRPC", "REST/GraphQL APIs", "Kafka Event Streaming", "High-Concurrency Design"],
    tools: ["Go (Golang)", "Python", "TypeScript", "PostgreSQL", "Redis", "gRPC", "GraphQL", "Docker", "Kubernetes", "Linux"],
    icon: Terminal
  },
  "Backend Engineer": {
    description: "I optimize secure database workflows, caching layers, and microservices for high-frequency environments, orchestrating robust and compliant data pipelines.",
    competencies: ["Database Optimization (SQL/NoSQL)", "API Security & Rate Limiting", "Message Queues (Kafka)", "System Design", "Caching Strategies", "RBAC/ABAC"],
    tools: ["PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "RabbitMQ", "Node.js", "Express/NestJS", "Go", "Docker", "AWS (RDS, ElastiCache)"],
    icon: Database
  },
  "Data Scientist": {
    description: "I apply advanced statistical modeling and machine learning to extract actionable intelligence from massive, complex network and telemetry datasets.",
    competencies: ["Statistical Modeling", "PyTorch/TensorFlow", "Feature Engineering", "Data Visualization", "Predictive Analytics", "Anomaly Detection"],
    tools: ["Python", "PyTorch", "TensorFlow", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "Databricks", "SQL"],
    icon: Zap
  },
  "Data Analyst": {
    description: "I process massive datasets, uncovering trends and creating dynamic dashboards for telemetry visualization, driving rapid, data-driven decision-making.",
    competencies: ["Advanced SQL & Query Optimization", "Pandas & NumPy", "Dashboarding", "Time-Series Analysis", "Data Cleansing", "Storytelling with Data"],
    tools: ["SQL", "Tableau", "Power BI", "Grafana", "Python (Pandas, NumPy)", "Excel", "BigQuery", "Snowflake", "Looker"],
    icon: Database
  },
  "Business Intelligence Analyst": {
    description: "I bridge the gap between deep technical data and business strategy, engineering intelligent governance architectures and dynamic pricing mechanisms.",
    competencies: ["Market Intelligence", "Fraud Detection Analytics", "Dynamic Pricing Models", "Data Strategy", "KPI Tracking", "Executive Dashboarding"],
    tools: ["Tableau", "Power BI", "SQL", "Python", "Snowflake", "dbt", "Google Analytics", "Salesforce", "Jira"],
    icon: Network
  },
  "AI / ML Engineer": {
    description: "I develop and deploy highly accurate, hybrid ML architectures (like XGBoost + CNN-LSTM) directly into high-risk production environments.",
    competencies: ["Production ML Deployment (MLOps)", "Deep Learning Architectures", "Reinforcement Learning (DQN)", "Model Serving", "Performance Tuning", "Inference Optimization"],
    tools: ["PyTorch", "TensorFlow", "MLflow", "Kubeflow", "Triton Inference Server", "ONNX", "Docker", "Kubernetes", "AWS SageMaker", "CUDA"],
    icon: Zap
  }
};

const ALL_ROLES = Object.keys(roleDetails) as Role[];

export function RoleCompetency() {
  const { selectedRole, setSelectedRole } = useRole();
  const [isOpen, setIsOpen] = useState(false);

  const activeRole = roleDetails[selectedRole];
  const Icon = activeRole.icon;

  return (
    <section className="relative z-20 mx-auto max-w-7xl px-6 pb-24">
      <div className="rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl p-1 shadow-2xl">
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="group flex cursor-pointer items-center justify-between rounded-2xl bg-white/5 px-6 py-5 transition-colors hover:bg-white/10"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-mono text-neutral-500">Recruiting For</p>
              <h2 className="font-heading text-xl font-bold text-white md:text-2xl">{selectedRole}</h2>
            </div>
          </div>
          <ChevronDown className={`h-6 w-6 text-neutral-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="border-t border-white/10 p-6 md:p-8">
                <div className="mb-8 grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 font-mono text-sm text-neutral-500 uppercase tracking-wider">Select a Role</h3>
                    <div className="flex flex-wrap gap-2">
                      {ALL_ROLES.map((r) => (
                        <button
                          key={r}
                          onClick={() => {
                            setSelectedRole(r);
                          }}
                          className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                            selectedRole === r
                              ? "border-blue-500 bg-blue-500/10 text-blue-400"
                              : "border-white/10 bg-transparent text-neutral-400 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                    <h3 className="mb-3 font-heading text-lg font-bold text-white">Why {selectedRole}?</h3>
                    <p className="mb-6 text-sm text-neutral-300 leading-relaxed">
                      {activeRole.description}
                    </p>
                    
                    <h4 className="mb-3 font-mono text-xs text-neutral-500 uppercase tracking-wider">Key Competencies</h4>
                    <ul className="mb-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {activeRole.competencies.map((comp, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-neutral-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                          {comp}
                        </li>
                      ))}
                    </ul>

                    <h4 className="mb-3 mt-6 font-mono text-xs text-neutral-500 uppercase tracking-wider">Technical Arsenal</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeRole.tools.map((tool, idx) => (
                        <span key={idx} className="rounded bg-white/5 px-2.5 py-1 text-xs font-medium text-neutral-300 border border-white/10">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
