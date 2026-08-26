import { experience as baseExperience, projects as baseProjects } from "./resume";
import type { Role } from "./roleContext";

const freelanceExperience = {
  id: "freelance-cybersecurity",
  company: "Freelance Cybersecurity",
  role: "Cybersecurity Analyst | SOC and Security Operations",
  location: "Remote",
  period: "Jan 2025 – Present",
  logo: "SOC",
  highlights: [
    "Analyzed system, application, authentication, and network logs to identify suspicious activity and unauthorized access attempts.",
    "Performed security alert triage, incident investigation, vulnerability review, and impact assessment using practical OWASP Top 10 concepts.",
    "Worked with Wireshark, PyShark, TShark, and Linux security tooling while documenting findings and supporting remediation recommendations.",
  ],
  roles: [
    "General",
    "Cybersecurity Engineer",
    "SOC Analyst",
    "Application Security Engineer",
    "Threat Intelligence Analyst",
    "DFIR Analyst",
  ] as Role[],
};

export const experience = baseExperience.flatMap((item) => {
  if (item.id !== "research") return [item];

  return [
    {
      ...item,
      period: "2024 – Present",
    },
    freelanceExperience,
  ];
});

export const projects = baseProjects.map((project) => {
  if (project.id !== "canteen-management-system") return project;

  return {
    ...project,
    id: "vyomrix-security-platform",
    slug: "vyomrix-security-platform",
    title: "VYOMRIX | Enterprise Security Operations Platform",
    techStack: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "Wazuh", "Sigma", "YARA"],
    problem:
      "Security teams often work across disconnected tools for alerts, threat intelligence, detection engineering, deception, incident response, and operational visibility, creating fragmented analyst workflows and slower investigations.",
    solution:
      "Built VYOMRIX as a unified full stack security operations platform that connects analyst workflows through a Next.js interface, FastAPI services, PostgreSQL persistence, Redis backed processing, and clearly separated security integrations.",
    securityFeatures: [
      "Wazuh SIEM integration and centralized security event workflows",
      "Sigma and YARA oriented detection engineering",
      "OpenCanary deception and honeypot monitoring",
      "Threat intelligence provider integrations",
      "Incident response and analyst investigation workflows",
      "Authentication and role based access control",
      "MITRE ATT&CK coverage views and AI assisted analysis",
    ],
    challenges:
      "Designing a coherent enterprise security product across SIEM, threat intelligence, deception, detection engineering, AI analysis, persistent infrastructure, and external provider boundaries while keeping unavailable integrations explicit and testable.",
    results:
      "Delivered an actively engineered platform with persistent backend architecture, automated backend tests, Playwright end to end validation, Docker based deployment workflows, documented release boundaries, and production focused security architecture.",
    github: "https://github.com/mithilkg10/VYOMRIX",
    liveDemo: null,
    featured: false,
    roles: [
      "General",
      "Cybersecurity Engineer",
      "SOC Analyst",
      "Application Security Engineer",
      "Cloud Security Engineer",
      "AI Security Engineer",
      "Threat Intelligence Analyst",
      "DevSecOps Engineer",
      "DFIR Analyst",
      "Software Engineer",
      "Backend Engineer",
    ] as Role[],
  };
});
