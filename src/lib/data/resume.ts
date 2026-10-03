import { Role } from "./roleContext";

export const personal = {
  name: "Mithil K Gowda",
  firstName: "Mithil",
  lastName: "Gowda",
  title: "Cybersecurity Engineer",
  email: "mithil.k.g.10@gmail.com",
  phone: "+91-8431196506",
  linkedin: "https://www.linkedin.com/in/mithil-k-gowda",
  github: "https://github.com/mithilkg10",
  githubUsername: "mithilkg10",
  location: "United Kingdom",
  summary:
    "MSc Cyber Security Engineering at the University of Warwick (2026–2027). Focused on security operations, detection engineering, incident response, Python, and Linux.",
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
      "Developed research prototypes and manuscripts on multi-agent cyber defence and digital trust.",
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
      "Developed a Purchase Order and Budget Analytics Application during a nine-week internship at LEOS.",
      "Used Flask, JavaScript and Plotly to visualise purchase-order and budget data for division-wise analysis.",
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
    title: "ABHEDYA: Multi-Agent AI Cyber Defence",
    tagline: "Network telemetry, threat scoring, and deception research prototype",
    overview: "A controlled-lab prototype combining packet-derived telemetry, Kafka event transport, hybrid threat scoring, and a separate honeypot service.",
    architecture: "TShark/PyShark capture → Kafka or direct prediction → XGBoost, CNN-LSTM, and DQN decision layer → dashboard or deception trigger.",
    conference: "ICIICE 2026 (acceptance listed in existing portfolio; confirmation requested)",
    publication: "Accepted research listed in existing portfolio",
    techStack: ["Python", "Kafka", "Flask", "PyShark", "TShark"],
    impact: "The repository documents implementation, a threat model, evaluation boundaries, and known limitations.",
    innovation: "The research explores coordinated scoring and deception; independent production detection performance is not claimed.",
    github: "https://github.com/mithilkg10/Multi-Agent-AI-Cyber-Defense-Framework",
    paperUrl: "/research papers/CH32 (2).pdf",
    roles: ["General", "Cybersecurity Engineer", "SOC Analyst", "AI Security Engineer"],
  },
  {
    id: "carbon-credit",
    slug: "carbon-credit-exchange",
    title: "CarbonEx: Secure Platform Prototype",
    tagline: "Digital carbon passports, role-based workflows, and audit visibility",
    overview: "A full-stack carbon credit exchange prototype with trading APIs, role-specific views, and security-focused transaction experiments.",
    architecture: "Next.js application with authentication, company and regulator workflows, audit logging, and demonstration data.",
    conference: "ICASF 2027 abstract acceptance listed in existing portfolio; confirmation requested",
    publication: "Accepted abstract listed in existing portfolio",
    techStack: ["Next.js", "TypeScript", "JWT", "Zod"],
    impact: "The public repository documents a deployed demonstration and explicit security limitations.",
    innovation: "Explores governance and transaction traceability in a research prototype.",
    github: "https://github.com/mithilkg10/CARBON-EX-PLATFORM",
    paperUrl: "/research papers/carbon paper .pdf",
    roles: ["General", "Cybersecurity Engineer", "Application Security Engineer"],
  },
  {
    id: "c3t-stavp",
    slug: "stavp-zero-knowledge-pipeline",
    title: "STAVP: Cryptographic Research Specification",
    tagline: "Architecture and projected performance model",
    overview: "A theoretical specification exploring security mechanisms for transaction authorisation.",
    architecture: "Layered research concept covering key lifecycle, integrity verification, privacy-preserving validation, and audit mechanisms.",
    conference: "No publication status verified",
    publication: "Research specification",
    techStack: ["Cryptography", "Security Architecture"],
    impact: "The repository identifies the reference implementation, benchmark harness, threat model, and independent review as future work.",
    innovation: "Studies the operational cost of combining established security mechanisms.",
    github: "https://github.com/mithilkg10/C3T-STAVP-Cryptographic-Framework",
    roles: ["General", "Cybersecurity Engineer", "Application Security Engineer"],
  },
];

export const projects = [
  {
    id: "honeybee-project",
    slug: "honeybee-distributed-ai-defense",
    title: "ABHEDYA | Multi-Agent AI Cyber Defence",
    image: "/projects/honeybee.svg",
    techStack: ["Python", "Kafka", "Flask", "PyShark", "TShark"],
    problem: "Controlled security research needs a traceable path from packet telemetry to a detection decision.",
    solution: "Built a prototype combining packet capture, Kafka event transport, hybrid scoring, and a separate honeypot.",
    securityFeatures: ["Telemetry and detection history", "Configurable threat thresholds", "Honeypot redirection"],
    challenges: "Coordinating local services while keeping model evaluation separate from independent detection claims.",
    results: "Research prototype with architecture, threat model, and limitations documented in the repository.",
    github: "https://github.com/mithilkg10/Multi-Agent-AI-Cyber-Defense-Framework",
    liveDemo: null,
    featured: true,
    roles: ["General", "Cybersecurity Engineer", "SOC Analyst", "AI Security Engineer"],
  },
  {
    id: "carbon-credit-project",
    slug: "carbon-credit-exchange",
    title: "CarbonEx | Secure AI-Governed Platform",
    image: "/projects/carbon.svg",
    techStack: ["Next.js", "TypeScript", "JWT", "Zod"],
    problem: "Carbon credit transactions need traceable identity and audit workflows.",
    solution: "Built a full-stack prototype with digital carbon passports, trading APIs, and regulator views.",
    securityFeatures: ["Authentication", "Company and regulator roles", "Audit logging"],
    challenges: "Separating security experiments and demonstration data from production claims.",
    results: "Deployed prototype with documented security boundaries.",
    github: "https://github.com/mithilkg10/CARBON-EX-PLATFORM",
    liveDemo: null,
    featured: false,
    roles: ["General", "Cybersecurity Engineer", "Application Security Engineer"],
  },
  {
    id: "canteen-management-system",
    slug: "vyomrix-security-platform",
    title: "Vyomrix | SIEM / XDR Security Operations Platform",
    image: "/projects/honeybee.svg",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Wazuh"],
    problem: "Security analysts need connected alert, detection, and incident workflows.",
    solution: "Built a security operations platform with a Next.js interface and FastAPI services.",
    securityFeatures: ["Wazuh integration", "Detection workflows", "Incident tracking", "Role-based access control"],
    challenges: "Keeping unavailable external integrations explicit.",
    results: "The linked Cyber Defense Lab documents six Vyomrix investigations.",
    github: "https://github.com/mithilkg10/VYOMRIX",
    liveDemo: null,
    featured: true,
    roles: ["General", "Cybersecurity Engineer", "SOC Analyst", "DFIR Analyst"],
  },
];

export const cyberLab = {
  categories: [
    { name: "Security operations", skills: ["Wazuh", "Wireshark", "PyShark / TShark", "Incident investigation", "Detection engineering"] },
    { name: "Engineering", skills: ["Python", "Linux", "Kafka", "FastAPI", "Flask", "Docker", "REST APIs"] },
    { name: "Data and access", skills: ["SQL / PostgreSQL", "IAM / RBAC"] },
    { name: "Frameworks", skills: ["MITRE ATT&CK", "NIST CSF", "OWASP Top 10"] },
  ],
};

export const certifications = [
  {
    id: "google-cyber",
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    year: "2026",
    status: "Coursera",
    url: "/certificates/google-cyber-security-professional-certificate.png",
  },
  {
    id: "ceh-cisco",
    title: "Certified Ethical Hacker course",
    issuer: "Cisco Networking Academy",
    year: "2025",
    status: "Course completion",
    url: "/certificates/cisco networking academy certified ethical hacker .jpg",
  },
  {
    id: "ignou-cyber",
    title: "Introduction to Cyber Security",
    issuer: "IGNOU",
    year: "2025",
    status: "SWAYAM",
    url: "/certificates/introduction to cyber security.jpg",
  },
  {
    id: "usable-security",
    title: "Systems and Usable Security",
    issuer: "NPTEL",
    year: "2025",
    status: "Course completion",
    url: "/certificates/systems and usable security.jpg",
  },
];

export const achievements: { label: string; value: number; suffix: string; roles: Role[] }[] = [];

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
      "Developing multi-agent cyber defence research with documented evaluation limits.",
  },
  {
    id: "isro",
    title: "ISRO Internship",
    icon: "Rocket",
    content:
      "Developed a Flask-based purchase-order and budget analytics application at ISRO LEOS.",
  },
];

export const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#lab", label: "Cyber Lab" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

export const resumePath = "/resume.pdf";
