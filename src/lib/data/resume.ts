import { Role } from "./roleContext";

export const personal = {
  name: "Mithil K Gowda",
  firstName: "Mithil",
  lastName: "Gowda",
  title: "Security Engineer & Systems Researcher",
  email: "mithil.k.g.10@gmail.com",
  phone: "+91-8431196506",
  linkedin: "https://www.linkedin.com/in/mithil-k-gowda",
  github: "https://github.com/mithilkg10",
  githubUsername: "mithilkg10",
  location: "Bangalore, India",
  summary:
    "I architect distributed, AI-driven defense systems and cryptographic trust frameworks. Currently engineering multi-agent threat detection pipelines and researching post-quantum cryptography applications for critical infrastructure.",
};

export const education = {
  institution: "M.S. Ramaiah University of Applied Sciences",
  location: "Bangalore, India",
  degree: "Bachelor of Technology in Information Science and Engineering",
  period: "2022 – 2026",
  cgpa: "8.8",
  cgpaLabel: "CGPA",
};

export const experience: Array<{
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  logo: string;
  highlights: string[];
  roles: Role[];
}> = [
  {
    id: "research",
    company: "Independent Security Research",
    role: "Security Research Engineer",
    location: "Remote",
    period: "2023 – Present",
    logo: "RES",
    highlights: [
      "Architected HoneyBee, a distributed multi-agent cyber defense framework using Apache Kafka and Deep Q-Networks.",
      "Designed and simulated the STAVP cryptographic pipeline, implementing AES-256 and Zero-Knowledge Proofs (ZKPs) for decentralized trust validation.",
      "Authored two peer-reviewed publications on AI-driven threat intelligence and carbon market security.",
    ],
    roles: [
      "General", "Cybersecurity Engineer", "AI Security Engineer", "Threat Intelligence Analyst",
      "Software Engineer", "Backend Engineer", "AI / ML Engineer", "Application Security Engineer",
      "DFIR Analyst"
    ],
  },
  {
    id: "isro",
    company: "Indian Space Research Organisation (ISRO) – LEOS",
    role: "Data Analytics & Backend Engineering Intern",
    location: "Bangalore, India",
    period: "Aug 2025 – Oct 2025",
    logo: "ISRO",
    highlights: [
      "Engineered Python/Flask backend microservices for telemetry data processing and visualization.",
      "Optimized secure database workflows, reducing query latency and ensuring strict RBAC compliance for sensitive analytics dashboards.",
      "Participated in research-oriented software development for data-driven decision-making systems.",
    ],
    roles: [
      "General", "Backend Engineer", "Data Scientist", "Data Analyst",
      "Business Intelligence Analyst", "Software Engineer", "Cloud Security Engineer", "DevSecOps Engineer"
    ],
  },
];

export const publications = [
  {
    id: "honeybee-iciice",
    title: "A Multi-Agent AI Cyber Defense Framework Using HoneyBee Method",
    venue: "ICIICE 2026 – International Conference on Integrated Intelligence and Cognitive Engineering, Dubai, UAE",
    focus: "Oral Presentation · First Author",
    status: "Accepted",
    roles: ["General", "AI Security Engineer", "Threat Intelligence Analyst", "Cybersecurity Engineer", "AI / ML Engineer"],
  },
  {
    id: "honeybee-book",
    title: "A HoneyBee-Inspired Metaheuristic Multi-Agent Cyber Defense Framework for Adaptive Deception and Autonomous Response",
    venue: "Metaheuristic Optimization for Social Good (Edited Volume)",
    focus: "Book Chapter · First Author & Corresponding Author",
    status: "Accepted",
    roles: ["General", "AI Security Engineer", "Threat Intelligence Analyst", "Cybersecurity Engineer", "AI / ML Engineer"],
  },
  {
    id: "carbon-credit",
    title: "AI-Governed Carbon Credit Exchange with Digital Carbon Passport",
    venue: "ICASF 2027 – 4th International Conference on Advancing Sustainable Futures, Abu Dhabi University, UAE",
    focus: "Abstract Accepted",
    status: "Accepted",
    roles: ["General", "Data Scientist", "Data Analyst", "GRC Analyst", "Business Intelligence Analyst"],
  },
];

export const researchItems = [
  {
    id: "honeybee",
    slug: "honeybee-distributed-ai-defense",
    title: "HoneyBee-Inspired Multi-Agent Cyber Defense Framework",
    tagline: "Detect–Mislead–Neutralize–Learn security lifecycle for autonomous defense",
    overview:
      "A highly concurrent, multi-agent threat detection system built on Python and Apache Kafka. Ingests network telemetry to train a hybrid XGBoost/CNN-LSTM model, achieving 98.24% accuracy on CIC-IDS2017 datasets.",
    architecture:
      "Scalable agent-based framework utilizing Apache Kafka, Flask-based deception environments, XGBoost, CNN-LSTM, Deep Q-Network (DQN) reinforcement learning, adaptive honeypots, and distributed threat intelligence sharing.",
    conference: "ICIICE 2026, Dubai, UAE (Oral Presentation Accepted)",
    publication:
      "Book chapter accepted in Metaheuristic Optimization for Social Good — First Author & Corresponding Author",
    techStack: ["Python", "Apache Kafka", "XGBoost", "CNN-LSTM", "DQN", "Reinforcement Learning"],
    impact:
      "Evaluated on CIC-IDS2017 and simulated enterprise attacks: 98.24% detection accuracy, 98.51% precision, 98.10% recall, 0.992 ROC-AUC, 1.85% false positive rate, and 92.40% deception engagement rate.",
    innovation:
      "Agents utilize DQN reinforcement learning to autonomously redirect attackers into ephemeral honeypots with sub-second latency.",
    github: "https://github.com/mithilkg10",
    paperUrl: "/research papers/CH32 (2).pdf",
    roles: ["General", "AI Security Engineer", "Threat Intelligence Analyst", "Cybersecurity Engineer", "AI / ML Engineer", "Backend Engineer", "Software Engineer", "SOC Analyst"],
  },
  {
    id: "carbon-credit",
    slug: "carbon-credit-exchange",
    title: "AI-Governed Carbon Credit Exchange with Digital Carbon Passport",
    tagline: "Secure digital trust ecosystem for carbon market governance",
    overview:
      "Proposed and designed an AI-governed carbon trading ecosystem integrating Digital Carbon Passports, intelligent governance, fraud detection, trust scoring, and dynamic pricing mechanisms.",
    architecture:
      "Secure Trade Authorization and Verification Pipeline (STAVP) with AES-256 encryption, SHA-256 hashing, secure transaction validation, and ML-driven market intelligence layers.",
    conference: "ICASF 2027, Abu Dhabi University, UAE",
    publication: "Abstract Accepted",
    techStack: ["Random Forest", "XGBoost", "Neural Networks", "AES-256", "SHA-256", "STAVP"],
    impact:
      "Addresses fraud detection, trust evaluation, and adaptive pricing in carbon credit markets through AI-driven governance and secure transaction pipelines.",
    innovation:
      "Combines Digital Carbon Passports with intelligent governance and the STAVP pipeline for end-to-end secure carbon credit authorization and verification.",
    github: "https://github.com/mithilkg10",
    paperUrl: "/research papers/carbon paper .pdf",
    roles: ["General", "Data Scientist", "Data Analyst", "GRC Analyst", "Business Intelligence Analyst", "Cloud Security Engineer"],
  },
  {
    id: "c3t-stavp",
    slug: "stavp-zero-knowledge-pipeline",
    title: "C3T-STAVP Cryptographic Framework",
    tagline: "Hybrid cryptography for critical infrastructure and digital trust",
    overview:
      "A privacy-preserving transaction authorization protocol. Implements Character Chaffing & Transposition Technology (C3T) at the application layer, combined with ZKP validation for off-chain state verification.",
    architecture:
      "Application-layer semantic obfuscation, ephemeral key generation, Zero-Knowledge Proof (ZKP) verification, distributed trust architectures, Crypto-Shredding, and off-chain storage integration.",
    conference: "Ongoing Research",
    publication: "In Development",
    techStack: ["Cryptography", "ZKP", "Post-Quantum Security", "C3T", "STAVP"],
    impact:
      "Designed to prevent double-spending and data tampering in high-trust environments such as critical infrastructure and financial systems.",
    innovation:
      "Investigating privacy-preserving techniques including Crypto-Shredding, off-chain storage, and post-quantum cryptography migration strategies within a unified trust framework.",
    github: "https://github.com/mithilkg10",
    roles: ["General", "Application Security Engineer", "Cybersecurity Engineer", "Software Engineer", "Backend Engineer"],
  },
];

export const projects = [
  {
    id: "honeybee-project",
    slug: "honeybee-distributed-ai-defense",
    title: "HoneyBee | Distributed AI Defense Framework",
    image: "/projects/honeybee.svg",
    techStack: ["Python", "Apache Kafka", "XGBoost", "CNN-LSTM", "DQN"],
    problem:
      "Enterprise networks face sophisticated, adaptive cyber attacks that overwhelm traditional single-point defenses and lack autonomous response capabilities.",
    solution:
      "A highly concurrent, multi-agent threat detection system built on Python and Apache Kafka. Ingests network telemetry to train a hybrid XGBoost/CNN-LSTM model, achieving 98.24% accuracy on CIC-IDS2017 datasets.",
    securityFeatures: [
      "Adaptive honeypots with 92.40% deception engagement rate",
      "Distributed threat intelligence sharing via Apache Kafka",
      "XGBoost + CNN-LSTM hybrid threat classification",
      "DQN reinforcement learning for autonomous response",
    ],
    challenges:
      "Achieving sub-second autonomous response while coordinating distributed agents across deception, detection, and neutralization layers without increasing false positives.",
    results:
      "98.24% detection accuracy, 0.992 ROC-AUC, and 1.85% false positive rate on CIC-IDS2017 and simulated enterprise attack scenarios.",
    github: "https://github.com/mithilkg10",
    liveDemo: null,
    featured: true,
    roles: ["General", "AI Security Engineer", "Threat Intelligence Analyst", "Cybersecurity Engineer", "AI / ML Engineer", "Backend Engineer", "Software Engineer", "SOC Analyst"],
  },
  {
    id: "c3t-stavp-project",
    slug: "stavp-zero-knowledge-pipeline",
    title: "STAVP | Zero-Knowledge Cryptographic Pipeline",
    image: "/projects/crypto.svg",
    techStack: ["Cryptography", "ZKP", "C3T", "STAVP", "Post-Quantum Security"],
    problem:
      "Critical infrastructure and financial systems require next-generation cryptographic protection against evolving and post-quantum threats while maintaining transaction privacy.",
    solution:
      "A privacy-preserving transaction authorization protocol. Implements Character Chaffing & Transposition Technology (C3T) at the application layer, combined with ZKP validation for off-chain state verification.",
    securityFeatures: [
      "Character Chaffing & Transposition Technology (C3T)",
      "Zero-Knowledge Proof (ZKP) verification",
      "Ephemeral key generation",
      "Crypto-Shredding and off-chain storage",
    ],
    challenges:
      "Designing privacy-preserving trust validation that scales across financial, healthcare, and critical infrastructure domains while planning post-quantum migration.",
    results:
      "Ongoing research evaluating framework applications for EHR protection, financial systems security, and critical infrastructure defense.",
    github: "https://github.com/mithilkg10",
    liveDemo: null,
    featured: true,
    roles: ["General", "Application Security Engineer", "Cybersecurity Engineer", "Software Engineer", "Backend Engineer"],
  },
  {
    id: "carbon-credit-project",
    slug: "carbon-credit-exchange",
    title: "AI-Governed Carbon Credit Exchange Pipeline",
    image: "/projects/carbon.svg",
    techStack: ["Random Forest", "XGBoost", "Neural Networks", "AES-256", "SHA-256"],
    problem:
      "Carbon credit markets lack transparent trust mechanisms, enabling fraud, double-counting, and unreliable pricing in digital trading ecosystems.",
    solution:
      "Built an AI-governed carbon trading ecosystem with Digital Carbon Passports, STAVP secure pipelines, and ML models for anomaly detection, trust scoring, and dynamic pricing.",
    securityFeatures: [
      "STAVP with AES-256 encryption and SHA-256 hashing",
      "Secure transaction validation pipeline",
      "AI-driven fraud detection and trust scoring",
      "Digital Carbon Passport identity layer",
    ],
    challenges:
      "Balancing transparent market governance with privacy-preserving transaction validation across distributed carbon credit stakeholders.",
    results:
      "Abstract accepted at ICASF 2027, Abu Dhabi University — establishing a secure, AI-governed framework for carbon market intelligence.",
    github: "https://github.com/mithilkg10",
    liveDemo: null,
    featured: false,
    roles: ["General", "Data Scientist", "Data Analyst", "GRC Analyst", "Business Intelligence Analyst", "Cloud Security Engineer"],
  },
];

export const cyberLab = {
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
};


export const certifications = [
  {
    id: "google-cyber",
    title: "Google Cybersecurity",
    issuer: "Google",
    year: "2026",
    status: "Coursera",
  },
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
];


export const achievements = [
  { label: "Reliance Foundation Scholar", value: 1, suffix: "", roles: ["General", "Software Engineer", "Cybersecurity Engineer", "Data Scientist"] },
  { label: "International Conference Publications", value: 3, suffix: "+", roles: ["General", "AI Security Engineer", "Threat Intelligence Analyst", "Data Scientist", "AI / ML Engineer"] },
  { label: "Research Publications", value: 3, suffix: "+", roles: ["General", "AI Security Engineer", "Threat Intelligence Analyst", "Data Scientist", "AI / ML Engineer"] },
  { label: "Security Research Projects", value: 4, suffix: "", roles: ["General", "Cybersecurity Engineer", "Application Security Engineer", "Cloud Security Engineer", "DevSecOps Engineer"] },
  { label: "Detection Accuracy (HoneyBee)", value: 98, suffix: "%", roles: ["General", "AI Security Engineer", "Threat Intelligence Analyst", "SOC Analyst"] },
  { label: "ISRO LEOS Internship", value: 1, suffix: "", roles: ["General", "Backend Engineer", "Data Analyst", "Business Intelligence Analyst", "Cloud Security Engineer"] },
];

export const aboutCards = [
  {
    id: "who",
    title: "Security Engineering",
    icon: "Shield",
    content:
      "Architecting secure, fault-tolerant backend systems and robust cyber defense pipelines for critical infrastructure.",
  },
  {
    id: "mission",
    title: "Distributed Systems",
    icon: "Target",
    content:
      "Building high-throughput, concurrent applications utilizing Apache Kafka and microservices architectures to scale security solutions.",
  },
  {
    id: "research",
    title: "AI Security Research",
    icon: "Brain",
    content:
      "Published author on multi-agent cyber defense, bridging the gap between deep reinforcement learning and practical intrusion detection.",
  },
  {
    id: "isro",
    title: "ISRO Internship",
    icon: "Rocket",
    content:
      "Engineered secure backend workflows and optimized telemetry data processing for the Indian Space Research Organisation.",
  },
];

export const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Systems" },
  { href: "#research", label: "Research" },
  { href: "#lab", label: "Competencies" },
  { href: "/blog", label: "Blog" },
  { href: "#about", label: "About" },
  { href: "#certifications", label: "Certs" },
  { href: "#achievements", label: "Achievements" },
  { href: "#github", label: "Impact" },
  { href: "#assessments", label: "Assessments" },
  { href: "#contact", label: "Contact" },
];

export const resumePath = "/resume.pdf";
