import type { BlogPost } from "./blogData";

/** Publicly reported October 19–23, 2026 incidents; mappings are assessments, not prevention claims. */
export const weeklyIncidentPosts: BlogPost[] = [
  {
    "id": "incident-2026-capcom",
    "slug": "capcom-id-breach-october-2026-detection-review",
    "title": "Capcom ID Breach: What Identity Telemetry Could Have Revealed",
    "excerpt": "Capcom disclosed 11.77 million exposed CAPCOM ID records on 22 October. An evidence-led review of identity detections, incident response, and the limits of my VYOMRIX and Cyber Defense Lab work.",
    "date": "October 23, 2026",
    "readTime": "7 min read",
    "tags": [
      "October 2026",
      "Identity Security",
      "Incident Analysis",
      "VYOMRIX"
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "INCIDENT BRIEF | Reported 22 October 2026 | Analysis prepared 23 October 2026. This is an independent assessment of public information, not an investigation of Capcom or a claim that my systems were installed there."
      },
      {
        "type": "heading",
        "text": "What is confirmed"
      },
      {
        "type": "paragraph",
        "text": "Capcom disclosed unauthorized access to CAPCOM ID, its shared online account service. Its official statement reported 11,774,247 affected records containing email addresses and account metadata such as creation date, last-login time, login count and last-login IP address. Within the affected population, 43 records included additional profile fields; unauthorized password changes were confirmed for 196 accounts. Capcom stated that payment card information was not involved and that it had not confirmed exposure of users' originally configured passwords."
      },
      {
        "type": "paragraph",
        "text": "The company detected suspicious activity and confirmed unauthorized access on 19 October, established an incident response operation on 20 October, and notified authorities on 21 October. The precise initial-access technique was not published in the 22 October notice. It would be incorrect to label this a proven brute-force or token-theft attack."
      },
      {
        "type": "heading",
        "text": "Defensive hypothesis: the signals an SOC would request"
      },
      {
        "type": "list",
        "items": [
          "Identity provider and application audit logs for unexpected password changes, unusual administrative actions, unfamiliar client IPs, and unusual session patterns.",
          "Database access and export records showing unusual query volume or enumeration of account metadata.",
          "Correlate alert timestamps with customer account changes; preserve chain of custody and verify whether activity was authenticated, unauthenticated, or privileged.",
          "Enforce least-privilege service identities, step-up verification for sensitive account actions, and rate limits as preventive controls."
        ]
      },
      {
        "type": "heading",
        "text": "What my projects can substantiate"
      },
      {
        "type": "paragraph",
        "text": "VYOMRIX is a Next.js and FastAPI security-operations project with analyst investigation workflows and Wazuh integration boundaries. It could organize and correlate these signals IF the application and identity logs were collected and mapped; that Capcom-specific integration has not been built or tested."
      },
      {
        "type": "paragraph",
        "text": "MKG Cyber Defense Lab case INC-001 preserved six unique Windows Security 4625 failed-logon events and a same-account five-minute correlation through custom Wazuh rule 100201. That is evidence of failed-authentication detection in a controlled lab, not proof of detection for valid-session abuse, data extraction, or Capcom's undisclosed entry path."
      },
      {
        "type": "heading",
        "text": "What is not prevented, and what I would test next"
      },
      {
        "type": "paragraph",
        "text": "Neither this lab case nor the VYOMRIX demo proves that the breach would have been prevented. A realistic next exercise would generate synthetic password-change audit events, account enumeration and sensitive-record export activity; establish baselines; document detection latency and false positives; then validate a rollback and account-recovery playbook."
      },
      {
        "type": "heading",
        "text": "Sources and preserved evidence"
      },
      {
        "type": "source",
        "text": "Capcom official disclosure, 22 October 2026",
        "url": "https://www.capcom.co.jp/ir/english/news/html/e261022.html"
      },
      {
        "type": "source",
        "text": "MKG Cyber Defense Lab — INC-001 authentication investigation",
        "url": "https://mithilkg-portfolio.vercel.app/lab/incidents/authentication-attack"
      },
      {
        "type": "source",
        "text": "Lab detection record — INC-001",
        "url": "https://github.com/mithilkg10/MITHILKG-PORTFOLIO/blob/main/public/lab/evidence/incidents/INC-001-authentication-attack/DETECTION.md"
      },
      {
        "type": "source",
        "text": "VYOMRIX project source",
        "url": "https://github.com/mithilkg10/VYOMRIX"
      }
    ]
  },
  {
    "id": "incident-2026-litellm",
    "slug": "litellm-supply-chain-attack-october-2026-defense-review",
    "title": "LiteLLM's Compromised Release: CI Trust, Secrets and the Detection Gap",
    "excerpt": "On 21 October, compromised LiteLLM v1.107.0 packages exposed the fragility of trusted release pipelines. Mapping public attack facts to VYOMRIX, ABHEDYA and reproducible lab evidence.",
    "date": "October 23, 2026",
    "readTime": "8 min read",
    "tags": [
      "October 2026",
      "Supply Chain",
      "Cloud Security",
      "ABHEDYA"
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "INCIDENT BRIEF | Incident on 21 October 2026 | Analysis prepared 23 October 2026. This is a public-source defensive design study. None of my projects claims to have protected LiteLLM customers."
      },
      {
        "type": "heading",
        "text": "What the maintainer confirmed"
      },
      {
        "type": "paragraph",
        "text": "LiteLLM reported that attackers used compromised developer GitHub credentials to alter its release workflow and distribute malicious version 1.107.0 through PyPI and official container tags. Its incident report says the artifacts contained credential-stealing malware and remote-code execution tooling. Compromised PyPI wheels were available from approximately 11:39 to 13:23 UTC; affected Docker tags were published around 11:46 UTC and subsequently removed or repointed. The maintainer described the attack as contained while investigation continued."
      },
      {
        "type": "paragraph",
        "text": "A critical distinction: the official source tag did not contain the malicious payload. The published artifacts came from an attacker-controlled source path. Trusting a version number or the expected repository alone would not have verified the delivered bytes."
      },
      {
        "type": "heading",
        "text": "How the attack crossed trust boundaries"
      },
      {
        "type": "list",
        "items": [
          "Stolen developer credentials acquired authority in the source-control and release pipeline.",
          "Release workflow modification and approval abuse allowed the attacker-controlled build to reach publishing channels.",
          "Downstream Python environments and containers running affected artifacts risked startup-time credential theft and malicious execution.",
          "Incident response required quarantining affected artifacts, rebuilding environments and rotating potentially exposed secrets."
        ]
      },
      {
        "type": "heading",
        "text": "Where my engineering is relevant"
      },
      {
        "type": "paragraph",
        "text": "VYOMRIX could be extended to ingest GitHub audit events, CI workflow revisions, identity events and endpoint detections into one case. Its existing investigation workflow is an analyst surface, not a verified GitHub/PyPI release-integrity enforcement system."
      },
      {
        "type": "paragraph",
        "text": "MKG Cyber Defense Lab INC-002 validates an encoded PowerShell alert with preserved Event 4104 and Wazuh context; INC-003 validates scheduled task creation and cleanup; INC-006 preserves a 489-byte synthetic transfer with matching hashes. These are evidence-handling analogues only. The LiteLLM malicious Python startup hook and software-release compromise were NOT reproduced by those cases."
      },
      {
        "type": "paragraph",
        "text": "ABHEDYA's research architecture explores network telemetry, hybrid scoring and honeypot diversion. Network anomalies after a compromised install may be candidates for future research, but the prototype does not certify detection of LiteLLM's malware or prevent a malicious release from publishing."
      },
      {
        "type": "heading",
        "text": "Controls that actually address this class of incident"
      },
      {
        "type": "list",
        "items": [
          "Enforce least privilege for developers and CI identities, phishing-resistant authentication, tightly scoped short-lived release credentials and independently verified approvals.",
          "Verify build provenance and artifact digests; rebuild from approved immutable source and verify container and package signatures where available.",
          "Alert on unusual CI workflow changes, new publishing tokens, package-install persistence artifacts and unexpected outbound connections.",
          "Treat affected hosts as potentially compromised; rebuild from clean images and rotate reachable cloud, application and database secrets."
        ]
      },
      {
        "type": "heading",
        "text": "A reproducible lab extension"
      },
      {
        "type": "paragraph",
        "text": "Proposed experiment, not completed work: create a harmless private test package with an intentionally modified build output, collect workflow audit and container digest records, correlate the release approval chain in VYOMRIX, and prove an alert before publishing. Preserve input events, rules, screenshots, decisions, and a retest with the compromised route disabled."
      },
      {
        "type": "heading",
        "text": "Sources and preserved evidence"
      },
      {
        "type": "source",
        "text": "LiteLLM maintainer incident report, 21 October 2026",
        "url": "https://docs.litellm.ai/blog/security-incident-oct-21-2026"
      },
      {
        "type": "source",
        "text": "Independent technical analysis — Datadog Security Labs",
        "url": "https://securitylabs.datadoghq.com/articles/litellm-compromised-pypi-docker/"
      },
      {
        "type": "source",
        "text": "MKG Cyber Defense Lab — INC-002 PowerShell",
        "url": "https://mithilkg-portfolio.vercel.app/lab/incidents/powershell"
      },
      {
        "type": "source",
        "text": "MKG Cyber Defense Lab — INC-006 synthetic transfer",
        "url": "https://mithilkg-portfolio.vercel.app/lab/incidents/exfiltration"
      },
      {
        "type": "source",
        "text": "ABHEDYA source and architecture",
        "url": "https://github.com/mithilkg10/Multi-Agent-AI-Cyber-Defense-Framework"
      }
    ]
  },
  {
    "id": "incident-2026-php2shell",
    "slug": "php2shell-cve-2026-109618-109619-october-response",
    "title": "PHP2Shell: Why Pre-Disclosure Detection Matters in the UK",
    "excerpt": "UK NCSC warned of critical PHP remote-code execution, while AWS saw exploitation attempts before disclosure. A practical patch-first detection review with honest links to my web-attack lab.",
    "date": "October 23, 2026",
    "readTime": "8 min read",
    "tags": [
      "October 2026",
      "UK Cybersecurity",
      "Vulnerability Response",
      "Detection Engineering"
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "VULNERABILITY AND EXPLOITATION BRIEF | NCSC alert 21 October 2026 | Analysis prepared 23 October 2026. This is not evidence that every threatened website was successfully breached."
      },
      {
        "type": "heading",
        "text": "Verified situation and timeline"
      },
      {
        "type": "paragraph",
        "text": "The UK National Cyber Security Centre warned organizations about two critical PHP runtime vulnerabilities: CVE-2026-109618 and CVE-2026-109619. The issues can lead to memory corruption and, under certain conditions, unauthenticated remote-code execution. AWS reported an exploitation attempt in its MadPot telemetry on 17 October, before public disclosure on 21 October, and further scanning after details became public."
      },
      {
        "type": "paragraph",
        "text": "The NCSC advised asset discovery, urgent PHP updates, monitoring, temporary mitigation and taking affected systems offline when adequate mitigation could not be achieved promptly. The absence of a visible compromise is not proof of safety."
      },
      {
        "type": "heading",
        "text": "Threat model and observable data"
      },
      {
        "type": "list",
        "items": [
          "Prioritize internet-facing PHP hosts, dependency inventory, exposed endpoints and runtime versions.",
          "Collect structured HTTP request metadata, web-server errors, server process execution and file-change events without publishing sensitive payloads.",
          "Investigate known attempts from at least 17 October, not merely from the public advisory date; correlate request bursts with new processes and unexpected file writes.",
          "Escalate suspected exploitation for host triage and patch verification, instead of relying solely on an untested signature."
        ]
      },
      {
        "type": "heading",
        "text": "Existing work versus this specific vulnerability"
      },
      {
        "type": "paragraph",
        "text": "In MKG Cyber Defense Lab INC-005, controlled Kali requests to an isolated test application produced preserved SQL-injection and path-traversal findings. Two Sigma selections were validated against application logs. No corresponding Wazuh alert was observed for the primary behavior. This demonstrates a logging and investigation workflow, NOT detection of PHP2Shell's low-level memory corruption or remote-code execution."
      },
      {
        "type": "paragraph",
        "text": "VYOMRIX can document related investigations when appropriate web, endpoint and asset data are connected. ABHEDYA's packet analysis and honeypot concepts could support pre-exploitation observation in a separately designed evaluation, but no PHP2Shell-specific replay or validated block is present in the public repositories."
      },
      {
        "type": "heading",
        "text": "What prevention genuinely requires"
      },
      {
        "type": "paragraph",
        "text": "Update affected PHP installations to vendor-fixed, supported releases as a first-line control. Network filtering or WAF rules may reduce exposure during patching but are not equivalent to fixing the vulnerable runtime. Isolate or temporarily disable affected services if safe mitigation cannot be deployed. After an exposure window, collect forensic evidence and check for persistence before returning systems to service."
      },
      {
        "type": "heading",
        "text": "Next lab validation to document"
      },
      {
        "type": "paragraph",
        "text": "A future non-exploit regression can use synthetic web-request and server-process logs to test the analyst workflow without deploying a live remote-code-execution proof of concept. Record hypothesis, log schema, Sigma/Wazuh logic, expected alerts, false positives, containment decision and patch verification. Mark the result as synthetic unless real controlled test evidence exists."
      },
      {
        "type": "heading",
        "text": "Sources and preserved evidence"
      },
      {
        "type": "source",
        "text": "UK NCSC official PHP advisory, 21 October 2026",
        "url": "https://www.ncsc.gov.uk/news/critical-security-issue-affecting-php"
      },
      {
        "type": "source",
        "text": "AWS Threat Intelligence — early PHP2Shell activity",
        "url": "https://aws.amazon.com/tw/blogs/security/amazon-threat-intelligence-identifies-php2shell-exploitation-prior-to-public-disclosure-in-madpot/"
      },
      {
        "type": "source",
        "text": "AWS WAF temporary mitigation and fixed versions",
        "url": "https://aws.amazon.com/blogs/security/using-aws-waf-to-apply-mitigations-for-php2shell-rce-vulnerabilities-cve-2026-109618-and-cve-2026-109619/"
      },
      {
        "type": "source",
        "text": "Lab INC-005 web investigation",
        "url": "https://mithilkg-portfolio.vercel.app/lab/incidents/web-attack"
      },
      {
        "type": "source",
        "text": "Lab INC-005 detection record",
        "url": "https://github.com/mithilkg10/MITHILKG-PORTFOLIO/blob/main/public/lab/evidence/incidents/INC-005-web-attack/DETECTION.md"
      }
    ]
  },
  {
    "id": "incident-2026-safepay",
    "slug": "safepay-ransomware-cisa-october-2026-defense-mapping",
    "title": "SafePay Ransomware: From Stolen Access to Business Recovery",
    "excerpt": "The 20 October CISA and FBI advisory details SafePay's attacks on 600+ organizations. An evidence-based mapping to authentication alerts, attack staging and synthetic exfiltration cases.",
    "date": "October 23, 2026",
    "readTime": "8 min read",
    "tags": [
      "October 2026",
      "Ransomware",
      "SOC",
      "Incident Response"
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "THREAT ADVISORY BRIEF | Joint advisory issued 20 October 2026. This is analysis of a multi-year ransomware campaign reported this week, not a claim that 600 new incidents occurred during 19–23 October."
      },
      {
        "type": "heading",
        "text": "What CISA and partners reported"
      },
      {
        "type": "paragraph",
        "text": "The CISA, FBI, US Secret Service and international partners released a SafePay ransomware advisory covering at least 600 organizations affected since August 2024. Described entry routes include exposed or stolen credentials, brute-force access, phishing and exploitation of internet-facing equipment. Post-compromise activity can combine data theft, encryption, backup disruption and pressure to pay."
      },
      {
        "type": "heading",
        "text": "Attack sequence to defend"
      },
      {
        "type": "list",
        "items": [
          "Initial access: assess VPN, remote access, credential abuse and identity logs. Require phishing-resistant MFA where feasible and patch edge devices.",
          "Persistence and staging: review new scheduled tasks, suspicious scripting, unexpected privileged activity and archive creation.",
          "Potential exfiltration: combine endpoint staging, DNS/proxy and network transfer telemetry; do not treat one local filesystem alert as proof of a completed transfer.",
          "Recovery: protect separate, tested, immutable or offline backups and isolate backup administration from ordinary domain credentials."
        ]
      },
      {
        "type": "heading",
        "text": "What the published Cyber Defense Lab really proves"
      },
      {
        "type": "paragraph",
        "text": "INC-001 confirms six synthetic failed-login events and custom Wazuh correlation for an account over five minutes. INC-002 and INC-003 provide documented script and persistence-related telemetry. INC-006 documents a 489-byte transfer of synthetic data to an isolated Kali receiver with matching SHA-256 hashes."
      },
      {
        "type": "paragraph",
        "text": "Crucially, Wazuh rule 91819 in INC-006 is endpoint supporting context, not a direct detector of network exfiltration. INC-004 credential access remains PARTIAL: the OS denied an LSASS query-only handle request; no credential read, dump, or Sysmon Event 10 was observed. These labels remain visible because the evidence must not be inflated."
      },
      {
        "type": "heading",
        "text": "Where VYOMRIX and ABHEDYA fit"
      },
      {
        "type": "paragraph",
        "text": "VYOMRIX offers a case-based analyst workflow to link authenticated activity, endpoint alerts, decisions, containment and retest records after integration. ABHEDYA explores packet-derived behavioral scoring and honeypot redirection in a research prototype. Both can inform an early-warning architecture, but neither public project demonstrates prevention of SafePay, automated ransomware blocking or backup recovery in a production enterprise."
      },
      {
        "type": "heading",
        "text": "How I would validate the defense"
      },
      {
        "type": "paragraph",
        "text": "Build an isolated scenario with synthetic VPN login failures, controlled command staging, an authorized test archive, known-benign transfer and simulated backup-tamper alerts. Define detection thresholds, evidence hashes, false-positive treatment, analyst decisions and recovery success criteria before executing it. Do not claim a PASS unless the relevant source events and alert outcomes are preserved."
      },
      {
        "type": "heading",
        "text": "Sources and preserved evidence"
      },
      {
        "type": "source",
        "text": "CISA and partners' SafePay ransomware advisory, 20 October 2026",
        "url": "https://content.govdelivery.com/accounts/USDHSCISA/bulletins/42fd782"
      },
      {
        "type": "source",
        "text": "MKG Cyber Defense Lab — authentication case",
        "url": "https://mithilkg-portfolio.vercel.app/lab/incidents/authentication-attack"
      },
      {
        "type": "source",
        "text": "MKG Cyber Defense Lab — synthetic transfer case",
        "url": "https://mithilkg-portfolio.vercel.app/lab/incidents/exfiltration"
      },
      {
        "type": "source",
        "text": "INC-006 detection limitation in source",
        "url": "https://github.com/mithilkg10/MITHILKG-PORTFOLIO/blob/main/public/lab/evidence/incidents/INC-006-exfiltration/DETECTION.md"
      },
      {
        "type": "source",
        "text": "INC-004 credential access limitation",
        "url": "https://github.com/mithilkg10/MITHILKG-PORTFOLIO/blob/main/public/lab/evidence/incidents/INC-004-credential-access/LIMITATIONS.md"
      }
    ]
  }
];
