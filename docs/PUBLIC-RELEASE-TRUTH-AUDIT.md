# Public Release Truth Audit

Date: 2026-09-15

## Evidence baseline

Technical source commit: 523a3f760db2bdce4d487e87c4109a66e901abea.
Transformation commit: e025fa6daca00e5f2edfa22b0922179759eb3a9b.

All 112 public incident files match their corresponding source repository files byte for byte. The public package validator passes. The targeted secret scan found no credential or private key matches. Evidence files were not edited during this release.

| Claim | Verified result | Source |
| --- | --- | --- |
| Investigations | 6 | Six incident directories |
| Sigma authored | 10 | Detection files and validation summary |
| Sigma directly validated | 7 | Detection validation summary |
| Custom Wazuh rules | 1 | Rule 100201 and INC 001 evidence |
| Built in Wazuh IDs | 9 | 60122, 60228, 67027, 91815, 91816, 91819, 92004, 92036, 92057 |
| Evidenced ATT&CK techniques | 5 | Published MITRE coverage |
| Cases with real Wazuh alerts | 5 | Final adversary report and case records |
| VYOMRIX workflows | 6 | Six incident references |
| Kali action roles | 2 | INC 005 request source; INC 006 collector |

INC 001 through INC 004 retain Windows execution origins. INC 001 Kali preflight sent no authentication attempt. INC 004 remains PARTIAL. INC 006 rule 91819 provides endpoint context and is not a direct transfer detector. Screenshot evidence remains PARTIAL.

## Corrections made for release

1. Replaced the unsupported impact panel totals of 10k+ attacks neutralized, 25+ threat models and 15+ trained models with audited lab counts. The panel now identifies its scope as CyberLab Evidence and displays six investigations, ten authored Sigma rules, seven validated Sigma rules and five evidenced ATT&CK techniques.
2. Removed the generic 98.2 percent detection figure from that panel. It was not a CyberLab measurement.
3. Removed the unsupported A+ HTTP security rating from the footer. The footer now describes the public portfolio without asserting a security grade.
4. Labeled the randomly generated activity pattern decorative. It is not a contribution history.
5. Explicitly attributed HoneyBee benchmark figures to the linked research paper. The bundled CH32 paper contains accuracy 98.24 percent, precision 98.51 percent, recall 98.10 percent, ROC AUC 0.992, false positive rate 1.85 percent and deception engagement 92.40 percent. This confirms source attribution, not independent reproduction of that research.

No layout, visual direction, lab scenario or preserved evidence changed. The test configuration accepts a production base URL so the same browser suite can verify the public release.

## Verification scope

Lint, typecheck, production compilation, browser regression, internal evidence links, six scenario replays, analyst decisions, reports, reset and offline controls are release gates. Four viewport widths are exercised: 1440, 1280, 768 and 390 pixels. Accessibility checks are targeted keyboard, focus, reduced motion and semantic checks, not a full assistive technology certification.
