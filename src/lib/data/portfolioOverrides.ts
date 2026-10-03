import { experience as baseExperience, projects as baseProjects } from "./resume";

export const experience = baseExperience.filter((item) => item.id === "isro");

const source = (id: string) => {
  const project = baseProjects.find((item) => item.id === id);
  if (!project) throw new Error(`Missing portfolio project: ${id}`);
  return project;
};

export const projects = [
  {
    ...source("canteen-management-system"),
    id: "vyomrix-security-platform",
    slug: "vyomrix-security-platform",
    title: "Vyomrix | SIEM / XDR Security Operations Platform",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Wazuh", "Docker"],
    problem: "Security operations data and analyst workflows can become fragmented across alerts, detections, intelligence, and incidents.",
    solution: "Built a Next.js and FastAPI platform connecting analyst workflows, persistent case data, and security integration boundaries.",
    securityFeatures: [
      "Wazuh alert and event workflows",
      "Sigma and YARA detection workflows",
      "Incident investigation and response tracking",
      "Authentication and role-based access control",
    ],
    challenges: "Integrating external security providers while keeping unconfigured capabilities explicit.",
    results: "Six documented incidents in the linked Cyber Defense Lab use Vyomrix for investigation; the lab records five PASS and one PARTIAL outcome.",
    github: "https://github.com/mithilkg10/VYOMRIX",
    liveDemo: "https://vyomrix.vercel.app/demo-login",
    loginUrl: "https://vyomrix.vercel.app/login",
    featured: true,
  },
  {
    ...source("honeybee-project"),
    title: "ABHEDYA | Multi-Agent AI Cyber Defence",
    techStack: ["Python", "Flask", "Kafka", "PyShark", "TShark", "SQLite"],
    problem: "Network monitoring, threat scoring, and deception need a traceable workflow for controlled defensive research.",
    solution: "Built a research prototype that moves packet-derived telemetry through Kafka, hybrid threat scoring, and a separate honeypot service.",
    securityFeatures: [
      "TShark and PyShark telemetry",
      "Configurable threat scoring and detection history",
      "Honeypot redirection and response history",
      "Documented threat model and evaluation boundaries",
    ],
    challenges: "Coordinating capture, scoring, and response across local services while keeping experimental model outputs distinct from validated detections.",
    results: "Research prototype with documented architecture and limitations. No independent production detection benchmark is claimed.",
    github: "https://github.com/mithilkg10/Multi-Agent-AI-Cyber-Defense-Framework",
    featured: true,
  },
  {
    ...source("carbon-credit-project"),
    title: "CarbonEx | Secure AI-Governed Carbon Credit Exchange Prototype",
    techStack: ["Next.js", "TypeScript", "JWT", "Zod", "Audit Logging"],
    problem: "Carbon credit workflows need traceable identities, transactions, and regulator visibility.",
    solution: "Built a full-stack prototype with digital carbon passports, trading APIs, role-based views, and audit workflows.",
    securityFeatures: [
      "JWT-based authentication",
      "Company and regulator roles",
      "Audit logging",
      "Transaction security experiments",
    ],
    challenges: "Separating demonstration data and security experiments from production financial-system claims.",
    results: "Prototype with synthetic in-memory data, configured login, and documented security boundaries. Deployment login depends on environment secrets.",
    github: "https://github.com/mithilkg10/CARBON-EX-PLATFORM",
    featured: false,
  },
  {
    id: "mkg-cyber-defense-lab",
    slug: "mkg-cyber-defense-lab",
    title: "MKG Cyber Defense Lab | Isolated Detection Range",
    image: "/projects/honeybee.svg",
    techStack: ["Windows", "Wazuh", "Sigma", "PowerShell", "VYOMRIX"],
    problem: "Detection claims need preserved telemetry, reproducible investigations, and explicit limitations.",
    solution: "Built an isolated range and documented six controlled security investigations from telemetry through VYOMRIX case work.",
    securityFeatures: ["Host-only lab isolation", "Wazuh and Sigma validation", "Sanitized case evidence", "MITRE ATT&CK mapping"],
    challenges: "Separating observed alerts from supporting context and marking incomplete detection honestly.",
    results: "Six documented cases: five PASS and one PARTIAL. Evidence and limitations are available in the repository and interactive portfolio range.",
    github: "https://github.com/mithilkg10/MKG-Cyber-Defense-Lab",
    liveDemo: "/lab",
    featured: false,
    roles: ["General", "Cybersecurity Engineer", "SOC Analyst", "DFIR Analyst"],
  },
];