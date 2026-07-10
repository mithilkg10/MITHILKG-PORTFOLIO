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
  mlPipeline?: string; // Optional
  systemDesignText: string;
  apiDesign?: string; // Optional
  databaseDesign?: string; // Optional
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

export const detailedProjects: ProjectData[] = [
  {
    id: "honeybee",
    slug: "honeybee-distributed-ai-defense",
    title: "HoneyBee: Distributed AI Cyber Defense Framework",
    tagline: "Autonomous Threat Detection, Deception, and Mitigation using Apache Kafka and Deep Q-Networks",
    overview: "HoneyBee is a highly concurrent, multi-agent threat detection system designed to operate autonomously in distributed network environments. It leverages Apache Kafka for high-throughput telemetry ingestion and trains a hybrid XGBoost/CNN-LSTM model to classify threats. Using Deep Q-Networks (DQN), the system dynamically redirects attackers into ephemeral honeypots, trapping them while gathering critical threat intelligence.",
    problemStatement: "Traditional single-point cyber defense mechanisms are inadequate against sophisticated, adaptive Advanced Persistent Threats (APTs). Enterprise networks often rely on static rules or isolated models that fail to dynamically respond or learn from ongoing attacks, resulting in high false positive rates and overwhelming alert fatigue for Security Operations Centers (SOCs).",
    motivation: "The objective was to bridge the gap between reactive detection and autonomous response by creating a 'living' defense system. Inspired by swarm intelligence, HoneyBee agents collaborate, share threat intelligence across distributed nodes, and execute real-time mitigation strategies without human intervention.",
    architectureText: "HoneyBee utilizes a microservices architecture centered around Apache Kafka as the event bus. Telemetry from network sensors is streamed into Kafka topics, consumed by ML inference nodes (XGBoost + CNN-LSTM), and evaluated by DQN Agent coordinators. When an anomaly is confirmed, the agent issues SDN (Software-Defined Networking) commands to dynamically reroute malicious traffic into isolated Docker-based honeypots.",
    architectureDiagram: `
graph TD
    A[Network Sensors] -->|Telemetry| B(Apache Kafka Event Bus)
    B --> C{ML Detection Engine}
    C -->|Normal Traffic| D[Core Network]
    C -->|Anomaly Detected| E[DQN Response Agent]
    E -->|SDN Commands| F[Dynamic Routing Layer]
    F -->|Redirect| G[Ephemeral Honeypots]
    G -->|Threat Intel Feed| B
    E -->|Alerts| H[SOC Dashboard]
`,
    technologyStack: ["Python 3.11", "Apache Kafka", "XGBoost", "PyTorch (CNN-LSTM)", "Docker", "Flask", "OpenFlow (SDN)"],
    implementation: "The detection engine was written in Python utilizing PyTorch for the deep learning models and scikit-learn/XGBoost for the ensemble layer. Kafka handles pub/sub messaging with partitioning configured for high throughput. The honeypots are lightweight Alpine Linux Docker containers dynamically spun up via the Docker API.",
    securityConsiderations: "The framework itself must be resilient to adversarial machine learning and state exhaustion attacks. Kafka communication is secured via TLS 1.3 and SASL/SCRAM authentication. The honeypots are strictly isolated on virtual VLANs with egress filtering to prevent lateral movement by trapped attackers.",
    mlPipeline: "Data preprocessing normalizes PCAP flows into 78 statistical features. The pipeline uses a two-stage ensemble: a fast, lightweight XGBoost model filters out known benign traffic with low latency, passing suspicious flows to a heavier CNN-LSTM network that captures spatial-temporal attack patterns. The DQN agent is trained via continuous reinforcement learning using a custom reward function based on deception engagement time.",
    systemDesignText: "The system is designed for horizontal scalability. Kafka brokers and ML inference nodes can be scaled independently based on network load. The DQN agents are stateless microservices that read from a Redis cache to maintain session state across distributed clusters.",
    apiDesign: "RESTful endpoints built with FastAPI expose metrics and control planes for SOC analysts. Endpoints include `/api/v1/telemetry`, `/api/v1/agents/status`, and `/api/v1/honeypots/spawn`.",
    databaseDesign: "Time-series telemetry and alerts are stored in InfluxDB for fast querying, while operational state and agent configurations reside in a PostgreSQL cluster.",
    databaseDiagram: `
erDiagram
    TELEMETRY ||--o{ ML_INFERENCE : triggers
    ML_INFERENCE ||--|{ ALERT : generates
    ALERT }|--|| DQN_AGENT : processed_by
    DQN_AGENT ||--o{ HONEYPOT : deploys
`,
    sequenceDiagram: `
sequenceDiagram
    participant Attacker
    participant NetworkSensor
    participant Kafka
    participant ML_Engine
    participant DQN_Agent
    participant SDN_Controller
    
    Attacker->>NetworkSensor: Malicious Payload
    NetworkSensor->>Kafka: Stream Flow Data
    Kafka->>ML_Engine: Consume Data
    ML_Engine->>ML_Engine: Classify (XGBoost/CNN-LSTM)
    ML_Engine->>DQN_Agent: Emit Threat Event
    DQN_Agent->>DQN_Agent: Calculate Optimal Policy
    DQN_Agent->>SDN_Controller: Issue Reroute Command
    SDN_Controller->>Attacker: Redirect to Honeypot
`,
    deploymentStrategy: "Containerized deployment orchestrated via Kubernetes. CI/CD pipelines use GitHub Actions to build Docker images, run unit tests, and deploy to AWS EKS. Helm charts define the deployment topology.",
    deploymentDiagram: `
graph LR
    User --> LoadBalancer
    LoadBalancer --> EKS_Cluster
    subgraph EKS_Cluster
        Ingress --> FastAPI
        FastAPI --> Kafka_Brokers
        Kafka_Brokers --> ML_Pods
        ML_Pods --> Redis
    end
`,
    testing: "Comprehensive unit testing with PyTest. Integrated load testing via Locust simulating 10,000 requests/second. Adversarial robustness testing performed using CleverHans to ensure ML model stability against evasion attacks.",
    performance: "Achieves end-to-end detection and mitigation latency of <200ms on 10Gbps enterprise uplinks. Model inference time averages 45ms per batch.",
    scalability: "Stateless architecture allows ML inference pods to auto-scale via Kubernetes HPA (Horizontal Pod Autoscaler) based on CPU and memory utilization metrics.",
    challenges: "Handling the 'concept drift' inherent in evolving cyber threats. The models required continuous online learning mechanisms to adapt to zero-day attack vectors without suffering catastrophic forgetting.",
    tradeOffs: "Chose a hybrid XGBoost/Deep Learning approach over a pure end-to-end Deep Learning model to reduce inference latency and computational overhead, trading slight accuracy in extreme edge cases for significant performance gains.",
    futureImprovements: "Integration with federated learning across multiple enterprise tenants to build a global threat intelligence model without sharing sensitive raw packet data.",
    researchPaperUrl: "/research papers/CH32 (2).pdf",
    githubUrl: "https://github.com/mithilkg10",
  },
  {
    id: "stavp-crypto",
    slug: "stavp-zero-knowledge-pipeline",
    title: "STAVP: Secure Trade Authorization and Verification Pipeline",
    tagline: "Zero-Knowledge Cryptographic Framework for Digital Trust",
    overview: "STAVP is a privacy-preserving transaction authorization protocol originally designed to secure digital carbon credit exchanges. It integrates Character Chaffing & Transposition Technology (C3T) at the application layer with Zero-Knowledge Proofs (ZKPs) for off-chain state verification.",
    problemStatement: "Digital asset exchanges, particularly in high-stakes environments like carbon markets or critical infrastructure, suffer from double-spending, data tampering, and a lack of privacy. Public ledgers expose sensitive trade strategies, while centralized databases introduce single points of failure.",
    motivation: "To architect a decentralized, trustless verification system where the validity of a transaction can be cryptographically proven without revealing the underlying sensitive data of the transacting parties.",
    architectureText: "The core architecture revolves around the C3T algorithm for semantic data obfuscation before transmission. Verification is handled by a ZK-SNARK circuit that proves a user holds a valid digital passport and sufficient balance without exposing their identity or exact balance.",
    architectureDiagram: `
graph TD
    A[Client App] -->|1. Obfuscate (C3T)| B(Local ZK Prover)
    B -->|2. Generate Proof| C[API Gateway]
    C -->|3. Route| D[STAVP Verifier Node]
    D -->|4. Verify SNARK| E{Validation}
    E -->|Valid| F[(State DB)]
    E -->|Invalid| G[Reject Transaction]
`,
    technologyStack: ["Go", "Rust (ZK Circuits)", "PostgreSQL", "AES-256-GCM", "SHA-3", "gRPC"],
    implementation: "The core verifier node is written in Go for high concurrency via goroutines. The ZK circuits are written in Rust using Arkworks to ensure memory safety and cryptographic performance. gRPC is used for low-latency node-to-node communication.",
    securityConsiderations: "Key generation relies on hardware security modules (HSMs). The ZK setup phase utilizes a simulated multi-party computation (MPC) 'trusted setup' to prevent toxic waste vulnerabilities. Post-quantum migration strategies are actively being mapped.",
    systemDesignText: "STAVP is built as an overlay network. It does not replace existing databases but rather acts as a cryptographic sidecar. Applications submit proofs to the STAVP node, which asynchronously verifies and commits state transitions.",
    apiDesign: "gRPC interfaces utilizing Protocol Buffers (protobuf) ensure strict schema typing for all cryptographic payloads. The primary RPC is `VerifyAndCommit(ProofRequest) returns (ProofResponse)`.",
    databaseDesign: "State transitions are appended to an immutable, Merkle-tree structured append-only log in PostgreSQL, allowing for cryptographic audits of the entire database history.",
    sequenceDiagram: `
sequenceDiagram
    participant User
    participant LocalProver
    participant STAVP_Node
    participant StateDB
    
    User->>LocalProver: Initiate Transfer
    LocalProver->>LocalProver: Generate ZK-SNARK Proof
    LocalProver->>STAVP_Node: Submit Proof
    STAVP_Node->>STAVP_Node: Verify ZK-SNARK
    STAVP_Node->>StateDB: Append to Merkle Log
    STAVP_Node->>User: Confirmation
`,
    deploymentStrategy: "Deployed via Docker Compose for local development and Kubernetes for production. CI/CD pipeline runs rigorous cryptographic fuzz testing on the Rust circuits before any merge to main.",
    testing: "Fuzz testing of the C3T obfuscation engine. Cryptographic unit tests verifying proof generation and rejection of forged proofs. Benchmarking of verification latency.",
    performance: "ZK-SNARK verification time is strictly bounded to <10ms per proof, allowing a single commodity server to process upwards of 1,000 TPS (Transactions Per Second).",
    scalability: "Proving is offloaded to the client (User), making the system highly scalable as the central network only needs to perform the computationally cheap verification step.",
    challenges: "Generating ZK-SNARK proofs on resource-constrained client devices. We had to optimize the Rust circuits extensively to bring client-side proving time down to acceptable mobile-friendly levels.",
    tradeOffs: "Chose ZK-SNARKs over ZK-STARKs. While STARKs offer post-quantum security and require no trusted setup, their proof sizes are significantly larger, which would have bottlenecked the network bandwidth.",
    futureImprovements: "Migrating the circuit logic to ZK-STARKs or hybrid lattice-based cryptography to ensure full post-quantum resilience.",
    githubUrl: "https://github.com/mithilkg10",
  }
];
