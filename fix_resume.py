import re

with open("src/lib/data/resume.ts", "r", encoding="utf-8") as f:
    content = f.read()

cyber_lab_replacement = """export const cyberLab = {
  categories: [
    {
      name: "Network Security",
      skills: ["Network Security", "Intrusion Detection Systems (IDS)", "Threat Modeling", "Security Architecture", "Zero Trust", "Firewall Configuration", "VPN setup", "DDoS Mitigation"],
    },
    {
      name: "Web Security",
      skills: ["Web Application Security", "Vulnerability Assessment", "Burp Suite", "OWASP ZAP", "SQL Injection", "XSS Mitigation", "API Security", "CSRF Protection", "DAST / SAST"],
    },
    {
      name: "Threat Intelligence",
      skills: ["Threat Intelligence", "Threat Detection", "Security Analytics", "Nmap", "Wireshark", "OSINT", "Maltego", "Dark Web Analysis", "YARA Rules", "MISP"],
    },
    {
      name: "Cloud Security",
      skills: ["Google Cloud Platform (GCP)", "Secure Access Control", "Cloud Architecture", "AWS IAM", "GuardDuty", "Container Security", "Kubernetes Hardening"],
    },
    {
      name: "Programming",
      skills: ["Python", "Java", "JavaScript", "SQL", "HTML", "CSS", "Go (Golang)", "TypeScript", "Bash/Shell Scripting", "C/C++"],
    },
    {
      name: "Databases",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Database Sharding", "Secure DB Workflows"],
    },
    {
      name: "Operating Systems",
      skills: ["Linux", "Kali Linux", "Windows", "Debian/RHEL", "macOS", "Windows Server", "Active Directory"],
    },
    {
      name: "Frameworks",
      skills: ["Flask", "Node.js", "REST APIs", "Git", "React", "Next.js", "Express", "Django"],
    },
    {
      name: "Research",
      skills: ["Predictive Modeling", "Data Analytics", "Pandas", "NumPy", "Data Visualization", "AI Security", "Zero-Knowledge Proofs", "Cryptography"],
    },
    {
      name: "Tools",
      skills: ["Kali Linux", "Wireshark", "Nmap", "Burp Suite", "OWASP ZAP", "Metasploit", "Splunk", "CrowdStrike", "Docker"],
    },
  ],
};"""

certifications_replacement = """export const certifications = [
  {
    id: "ibm-cyber",
    title: "IBM IT Fundamentals for Cybersecurity Specialization",
    issuer: "IBM",
    year: "2026",
    status: "Coursera",
  },
  {
    id: "ibm-frontend",
    title: "IBM Front-End Developer Specialization",
    issuer: "IBM",
    year: "2026",
    status: "Coursera",
  },
  {
    id: "ceh-cisco",
    title: "Certified Ethical Hacker (CEH)",
    issuer: "Cisco",
    year: "2025",
    status: "Networking Academy",
  },
  {
    id: "ignou-cyber",
    title: "Introduction to Cyber Security",
    issuer: "IGNOU",
    year: "2025",
    status: "SWAYAM",
  },
  {
    id: "usable-security",
    title: "Systems and Usable Security",
    issuer: "NPTEL",
    year: "2025",
    status: "Elite Certification",
  },
  {
    id: "iot",
    title: "Introduction to Internet of Things",
    issuer: "NPTEL",
    year: "2025",
    status: "Silver Medal",
  },
  {
    id: "bi-analytics",
    title: "Business Intelligence and Analytics",
    issuer: "NPTEL",
    year: "2025",
    status: "Completed",
  },
  {
    id: "gcp-nptel",
    title: "Google Cloud Computing",
    issuer: "NPTEL",
    year: "2024",
    status: "Completed",
  },
];"""

content = re.sub(r'export const cyberLab = \{.*?\n\};\n', cyber_lab_replacement + '\n\n', content, flags=re.DOTALL)
content = re.sub(r'export const certifications = \[.*?\n\];\n', certifications_replacement + '\n\n', content, flags=re.DOTALL)

with open("src/lib/data/resume.ts", "w", encoding="utf-8") as f:
    f.write(content)
