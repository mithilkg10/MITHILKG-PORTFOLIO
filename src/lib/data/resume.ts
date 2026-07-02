export const personal = {
  name: "Mithil K Gowda",
  firstName: "Mithil",
  lastName: "Gowda",
  title: "Cybersecurity Engineer & AI Security Researcher",
  email: "mithil.k.g.10@gmail.com",
  phone: "+91-8431196506",
  linkedin: "https://www.linkedin.com/in/mithil-k-gowda",
  github: "https://github.com/mithilkg10",
  githubUsername: "mithilkg10",
  location: "Bangalore, India",
  summary:
    "Cybersecurity and AI Security researcher with hands-on experience in secure system design, threat modeling, intelligent cyber defense frameworks, and AI-governed digital ecosystems. Contributor to multiple international research publications in AI-driven cyber defense, intelligent threat detection, carbon credit security systems, and digital trust frameworks. Currently pursuing B.Tech in Information Science with internship experience at ISRO and recognized as a Reliance Foundation Scholar.",
};

export const typingRoles = [
  "Cybersecurity Engineer",
  "AI Security Researcher",
  "Threat Intelligence Enthusiast",
  "Security Engineering Specialist",
  "Cloud Security Engineer",
  "Critical Infrastructure Protection Researcher",
];

export const education = {
  institution: "M.S. Ramaiah University of Applied Sciences",
  location: "Bangalore, India",
  degree: "Bachelor of Technology in Information Science and Engineering",
  period: "2022 – 2026",
  cgpa: "8.8",
  cgpaLabel: "CGPA",
};

export const experience = [
  {
    id: "isro",
    company: "Indian Space Research Organisation (ISRO) – LEOS",
    role: "Intern – Data Analytics and Full Stack Development",
    location: "Bangalore, India",
    period: "Aug 2025 – Oct 2025",
    logo: "ISRO",
    highlights: [
      "Contributing to analytics-driven software development projects involving data processing, visualization, and application design.",
      "Working on backend development, database integration, and secure application workflows.",
      "Developing solutions using Python, Flask, and modern web technologies.",
      "Participating in research-oriented software development activities and data-driven decision-making systems.",
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
  },
  {
    id: "honeybee-book",
    title: "A HoneyBee-Inspired Metaheuristic Multi-Agent Cyber Defense Framework for Adaptive Deception and Autonomous Response",
    venue: "Metaheuristic Optimization for Social Good (Edited Volume)",
    focus: "Book Chapter · First Author & Corresponding Author",
    status: "Accepted",
  },
  {
    id: "carbon-credit",
    title: "AI-Governed Carbon Credit Exchange with Digital Carbon Passport",
    venue: "ICASF 2027 – 4th International Conference on Advancing Sustainable Futures, Abu Dhabi University, UAE",
    focus: "Abstract Accepted",
    status: "Accepted",
  },
];

export const researchItems = [
  {
    id: "honeybee",
    title: "HoneyBee-Inspired Multi-Agent Cyber Defense Framework",
    tagline: "Detect–Mislead–Neutralize–Learn security lifecycle for autonomous defense",
    overview:
      "Proposed and designed a HoneyBee-inspired multi-agent cyber defense architecture integrating intelligent threat detection, adaptive deception, autonomous response, and continuous learning for enterprise-scale protection.",
    architecture:
      "Scalable agent-based framework utilizing Apache Kafka, Flask-based deception environments, XGBoost, CNN-LSTM, Deep Q-Network (DQN) reinforcement learning, adaptive honeypots, and distributed threat intelligence sharing.",
    conference: "ICIICE 2026, Dubai, UAE (Oral Presentation Accepted)",
    publication:
      "Book chapter accepted in Metaheuristic Optimization for Social Good — First Author & Corresponding Author",
    techStack: ["Python", "Flask", "Apache Kafka", "XGBoost", "CNN-LSTM", "DQN", "Reinforcement Learning"],
    impact:
      "Evaluated on CIC-IDS2017 and simulated enterprise attacks: 98.24% detection accuracy, 98.51% precision, 98.10% recall, 0.992 ROC-AUC, 1.85% false positive rate, and 92.40% deception engagement rate.",
    innovation:
      "Developed the Detect–Mislead–Neutralize–Learn lifecycle with adaptive attacker redirection, intelligence collection, and autonomous neutralization through coordinated multi-agent orchestration.",
    github: "https://github.com/mithilkg10",
    paperUrl: "/research papers/CH32 (2).pdf",
  },
  {
    id: "carbon-credit",
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
  },
  {
    id: "c3t-stavp",
    title: "C3T-STAVP Cryptographic Framework",
    tagline: "Hybrid cryptography for critical infrastructure and digital trust",
    overview:
      "Developing a hybrid cybersecurity framework integrating Character Chaffing & Transposition Technology (C3T), Secure Transaction Authorization & Verification Protocol (STAVP), and adaptive trust validation mechanisms.",
    architecture:
      "Application-layer semantic obfuscation, ephemeral key generation, Zero-Knowledge Proof (ZKP) verification, distributed trust architectures, Crypto-Shredding, and off-chain storage integration.",
    conference: "Ongoing Research",
    publication: "In Development",
    techStack: ["Cryptography", "ZKP", "Post-Quantum Security", "C3T", "STAVP", "Trust Architectures"],
    impact:
      "Targeting applications in critical infrastructure protection, financial systems security, and Electronic Health Record (EHR) protection.",
    innovation:
      "Investigating privacy-preserving techniques including Crypto-Shredding, off-chain storage, and post-quantum cryptography migration strategies within a unified trust framework.",
    github: "https://github.com/mithilkg10",
  },
];

export const projects = [
  {
    id: "honeybee-project",
    title: "HoneyBee Multi-Agent Cyber Defense Framework",
    image: "/projects/honeybee.svg",
    techStack: ["Python", "Flask", "Apache Kafka", "XGBoost", "CNN-LSTM", "DQN"],
    problem:
      "Enterprise networks face sophisticated, adaptive cyber attacks that overwhelm traditional single-point defenses and lack autonomous response capabilities.",
    solution:
      "Designed a HoneyBee-inspired multi-agent architecture with the Detect–Mislead–Neutralize–Learn lifecycle, integrating ML, deep learning, and reinforcement learning for autonomous cyber defense.",
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
  },
  {
    id: "carbon-credit-project",
    title: "AI-Governed Carbon Credit Exchange with Digital Carbon Passport",
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
    featured: true,
  },
  {
    id: "canteen",
    title: "Enterprise Canteen Management System",
    image: "/projects/canteen.svg",
    techStack: ["Python", "Flask", "MySQL", "Data Analytics", "RBAC"],
    problem:
      "Manual canteen operations create inefficiencies in meal ordering, inventory control, vendor management, and employee attendance tracking.",
    solution:
      "Developed a centralized enterprise platform with interactive analytics dashboards for demand forecasting, inventory optimization, and procurement cost analysis.",
    securityFeatures: [
      "Role-Based Access Control (RBAC)",
      "Secure authentication and audit logging",
      "Compliance-oriented operational transparency",
      "Digital record management with secure workflows",
    ],
    challenges:
      "Integrating real-time reporting and forecasting analytics while enforcing strict access controls across employee, vendor, and admin roles.",
    results:
      "Automated manual business processes, improved operational efficiency, and reduced administrative overhead through responsive web interfaces.",
    github: "https://github.com/mithilkg10",
    liveDemo: null,
    featured: false,
  },
  {
    id: "c3t-stavp-project",
    title: "C3T-STAVP Cryptographic Framework",
    image: "/projects/crypto.svg",
    techStack: ["Cryptography", "ZKP", "C3T", "STAVP", "Post-Quantum Security"],
    problem:
      "Critical infrastructure, financial systems, and healthcare records require next-generation cryptographic protection against evolving and post-quantum threats.",
    solution:
      "Developing a hybrid framework combining C3T semantic obfuscation, STAVP transaction verification, ZKP validation, and adaptive trust architectures.",
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
    featured: false,
  },
];

export const cyberLab = {
  categories: [
    {
      name: "Network Security",
      skills: ["Network Security", "Intrusion Detection Systems (IDS)", "Threat Modeling", "Security Architecture"],
    },
    {
      name: "Web Security",
      skills: ["Web Application Security", "Vulnerability Assessment", "Burp Suite", "OWASP ZAP"],
    },
    {
      name: "Threat Intelligence",
      skills: ["Threat Intelligence", "Threat Detection", "Security Analytics", "Nmap", "Wireshark"],
    },
    {
      name: "Cloud Security",
      skills: ["Google Cloud Platform (GCP)", "Secure Access Control", "Cloud Architecture"],
    },
    {
      name: "Programming",
      skills: ["Python", "Java", "JavaScript", "SQL", "HTML", "CSS"],
    },
    {
      name: "Databases",
      skills: ["MySQL", "MongoDB"],
    },
    {
      name: "Operating Systems",
      skills: ["Linux", "Kali Linux", "Windows"],
    },
    {
      name: "Frameworks",
      skills: ["Flask", "Node.js", "REST APIs", "Git"],
    },
    {
      name: "Research",
      skills: ["Predictive Modeling", "Data Analytics", "Pandas", "NumPy", "Data Visualization", "AI Security"],
    },
    {
      name: "Tools",
      skills: ["Kali Linux", "Wireshark", "Nmap", "Burp Suite", "OWASP ZAP"],
    },
  ],
};

export const certifications = [
  {
    id: "ibm-cyber",
    title: "IBM IT Fundamentals for Cybersecurity Specialization",
    issuer: "IBM",
    year: "2026",
    status: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/specialization/Y1GBH9GSCHE5",
  },
  {
    id: "ibm-frontend",
    title: "IBM Front-End Developer Specialization",
    issuer: "IBM",
    year: "2026",
    status: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/specialization/YKUEYK44AIQI",
  },
  {
    id: "ceh-cisco",
    title: "Certified Ethical Hacker (CEH)",
    issuer: "Cisco",
    year: "2025",
    status: "Networking Academy",
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
    status: "Elite Certification",
    url: "/certificates/systems and usable security.jpg",
  },
  {
    id: "iot",
    title: "Introduction to Internet of Things",
    issuer: "NPTEL",
    year: "2025",
    status: "Silver Medal",
    url: "/certificates/iot.jpg",
  },
  {
    id: "bi-analytics",
    title: "Business Intelligence and Analytics",
    issuer: "NPTEL",
    year: "2025",
    status: "Completed",
    url: "/certificates/buissness intelligence and analytics.jpg",
  },
  {
    id: "gcp-nptel",
    title: "Google Cloud Computing",
    issuer: "NPTEL",
    year: "2024",
    status: "Completed",
    url: "/certificates/google cloud somputing.jpg",
  },
];

export const achievements = [
  { label: "Reliance Foundation Scholar", value: 1, suffix: "" },
  { label: "International Conference Publications", value: 3, suffix: "+" },
  { label: "Research Publications", value: 3, suffix: "+" },
  { label: "Security Research Projects", value: 4, suffix: "" },
  { label: "Detection Accuracy (HoneyBee)", value: 98, suffix: "%" },
  { label: "ISRO LEOS Internship", value: 1, suffix: "" },
];

export const aboutCards = [
  {
    id: "who",
    title: "Who I Am",
    icon: "Shield",
    content:
      "Cybersecurity and AI Security researcher pursuing B.Tech in Information Science and Engineering at M.S. Ramaiah University, with hands-on experience in secure system design and intelligent cyber defense.",
  },
  {
    id: "mission",
    title: "My Mission",
    icon: "Target",
    content:
      "Build AI-governed security systems that protect critical infrastructure — bridging threat modeling, intelligent detection, and autonomous response for real-world digital ecosystems.",
  },
  {
    id: "research",
    title: "Research Mindset",
    icon: "Brain",
    content:
      "First author and corresponding author on international conference publications spanning multi-agent cyber defense, carbon credit security, and cryptographic trust frameworks.",
  },
  {
    id: "isro",
    title: "ISRO Internship",
    icon: "Rocket",
    content:
      "Selected for internship at ISRO – Laboratory for Electro Optics Systems (LEOS), contributing to analytics-driven development, secure workflows, and data-driven decision systems.",
  },
  {
    id: "scholar",
    title: "Reliance Foundation Scholar",
    icon: "Award",
    content:
      "Recognized as a Reliance Foundation Scholar for academic excellence and commitment to impactful research in cybersecurity and artificial intelligence.",
  },
  {
    id: "passion",
    title: "Cybersecurity Passion",
    icon: "Flame",
    content:
      "Deeply invested in Cybersecurity Engineering, Threat Intelligence, AI Security, Cloud Security, and Critical Infrastructure Protection through continuous research and hands-on engineering.",
  },
  {
    id: "ai-security",
    title: "AI Security",
    icon: "Cpu",
    content:
      "Designing multi-agent defense frameworks with ML, deep learning, and reinforcement learning — achieving 98.24% detection accuracy with adaptive deception and autonomous neutralization.",
  },
  {
    id: "threat-intel",
    title: "Threat Intelligence",
    icon: "Radar",
    content:
      "Expertise in threat modeling, intrusion detection, security analytics, vulnerability assessment, and distributed threat intelligence sharing across agent-based architectures.",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#lab", label: "Cyber Lab" },
  { href: "#certifications", label: "Certs" },
  { href: "#achievements", label: "Achievements" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export const resumePath = "/resume.pdf";
