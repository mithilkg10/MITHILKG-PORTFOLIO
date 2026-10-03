import { projects } from "./portfolioOverrides";

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  problemStatement: string;
  motivation: string;
  architectureText: string;
  architectureDiagram: string;
  technologyStack: string[];
  implementation: string;
  securityConsiderations: string;
  mlPipeline?: string;
  systemDesignText: string;
  apiDesign?: string;
  databaseDesign?: string;
  databaseDiagram?: string;
  sequenceDiagram?: string;
  deploymentStrategy: string;
  deploymentDiagram?: string;
  testing: string;
  performance: string;
  scalability: string;
  challenges: string;
  tradeOffs: string;
  futureImprovements: string;
  researchPaperUrl?: string;
  githubUrl: string;
  liveDemoUrl?: string;
  technicalDocsUrl?: string;
}

const details: Record<string, {
  architecture: string;
  diagram: string;
  testing: string;
  deployment: string;
  limitations: string;
}> = {
  "vyomrix-security-platform": {
    architecture: "Next.js analyst interface → FastAPI security services → PostgreSQL persistence and Redis-supported workflows. Wazuh and other security products connect through explicit integration boundaries.",
    diagram: "flowchart LR\n  W[Wazuh and security providers] --> A[FastAPI services]\n  A --> P[PostgreSQL]\n  A --> R[Redis]\n  A --> U[Next.js analyst interface]",
    testing: "The repository contains backend tests and an end-to-end CI workflow; its current run status should be checked on GitHub. The linked Cyber Defense Lab documents six investigation cases.",
    deployment: "Docker-based development and deployment assets are documented in the repository. External providers require configuration.",
    limitations: "Some integrations are unavailable without provider credentials and production configuration. The project is an actively engineered security platform, not a claim of a deployed enterprise SOC.",
  },
  "honeybee-distributed-ai-defense": {
    architecture: "TShark and PyShark capture → Kafka or direct prediction → XGBoost, CNN-LSTM, and DQN decision layer → dashboard and optional deception trigger → separate Flask honeypot.",
    diagram: "flowchart LR\n  N[Network telemetry] --> T[TShark and PyShark]\n  T --> K[Kafka or direct path]\n  K --> D[Hybrid decision layer]\n  D --> H[Dashboard]\n  D --> P[Honeypot service]",
    testing: "The repository documents dependency-light CI contract checks. Full integration requires Kafka, TShark, model artifacts, and SQLite.",
    deployment: "The current integrated startup is Windows-oriented and expects local Kafka and ZooKeeper.",
    limitations: "Research prototype. DQN adaptation lacks an independent holdout benchmark, explanations are rule-based, and production authorization and transport hardening remain future work.",
  },
  "carbon-credit-exchange": {
    architecture: "Next.js application → trading and passport workflows → company and regulator views with authentication and audit logging.",
    diagram: "flowchart LR\n  U[Company and regulator users] --> A[Next.js application]\n  A --> T[Trading and passport workflows]\n  T --> L[Audit logging]",
    testing: "A reproducible performance or security evaluation is not documented in the public README.",
    deployment: "The repository documents local npm setup and a demonstration deployment; sign-in requires configured deployment secrets.",
    limitations: "Prototype with demonstration data and storage paths. It is not a production financial exchange or certified cryptographic system.",
  },
  "mkg-cyber-defense-lab": {
    architecture: "Isolated Windows and Kali range → endpoint and application telemetry → Wazuh and Sigma detection → VYOMRIX investigation → sanitized case evidence.",
    diagram: "flowchart LR\n  W[Windows and application events] --> Z[Wazuh and Sigma]\n  Z --> V[VYOMRIX investigation]\n  V --> E[Sanitized evidence and retest]",
    testing: "Six controlled incident case studies are documented with telemetry, detection logic, and retests. Five are PASS and INC-004 remains PARTIAL.",
    deployment: "The live portfolio range is a safe evidence replay. VM capture and response remain local to the isolated lab.",
    limitations: "This is a controlled lab, not a production SOC or evidence of real-world compromise. The public replay does not expose the private VMs.",
  },
};

export const detailedProjects: ProjectData[] = projects.map((project) => {
  const detail = details[project.slug];
  return {
    id: project.id,
    slug: project.slug,
    title: project.title,
    tagline: project.solution,
    overview: project.solution,
    problemStatement: project.problem,
    motivation: project.problem,
    architectureText: detail.architecture,
    architectureDiagram: detail.diagram,
    technologyStack: project.techStack,
    implementation: project.solution,
    securityConsiderations: project.securityFeatures.join("; "),
    systemDesignText: detail.architecture,
    deploymentStrategy: detail.deployment,
    testing: detail.testing,
    performance: "No independently verified production performance metric is claimed.",
    scalability: "Production scale has not been independently validated.",
    challenges: project.challenges,
    tradeOffs: detail.limitations,
    futureImprovements: detail.limitations,
    githubUrl: project.github,
    liveDemoUrl: project.liveDemo ?? undefined,
  };
});
