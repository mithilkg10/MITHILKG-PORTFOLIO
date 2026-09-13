# INC-005 — Host-Only Web Application Attack

Status: PASS
Severity: High
VYOMRIX incident: INC-7890B5F0

## 1. Executive Summary

A purpose-built app bound only to 192.168.56.1:8085 demonstrated real SQL injection authentication bypass and constrained path traversal into synthetic lab data.

## 2. Scenario

A small AppSec case tested input handling without Docker, public exposure, or uncontrolled scanning.

## 3. Attack/Emulation Method

Sent one failed normal login, one crafted username that altered the SQL query, and one traversal path escaping the intended public directory while remaining inside the lab app root.

## 4. Detection Sources

Application JSON request log, HTTP response metadata, PowerShell 4104, and VYOMRIX case workflow.

## 5. Initial Alert

No Wazuh alert was produced. The authoritative findings are the application result fields `sql-injection-bypass` and `path-traversal`.

## 6. Investigation

Confirmed normal authentication failed, injection returned the synthetic admin role, traversal returned only the synthetic marker, source was WIN-LAB-01, and the listener was host-only.

## 7. Timeline

| Time | Event |
|---|---|
| 2026-09-13T11:44:42.412039+05:30 | Host-only service health/normal request sequence began |
| 2026-09-13T11:44:48.04335+05:30 | SQL injection bypass confirmed |
| 2026-09-13T11:44:48.047736+05:30 | Constrained path traversal confirmed; service stopped after evidence |

## 8. MITRE ATT&CK

No Enterprise ATT&CK technique is claimed for this AppSec-only case. OWASP/CWE classification is used in the analysis.

## 9. Indicators / Observables

Destination 192.168.56.1:8085; HTTP GET; explicit application findings; synthetic path `../secrets/demo-secret.txt`.

## 10. Detection Logic

Sigma `web_sql_injection.yml` and `web_path_traversal.yml` validated against the lab-specific application log. No custom Wazuh rule is claimed.

## 11. False Positives

The explicit finding fields are deterministic in this instrumented app. Production rules should inspect normalized parameters, WAF fields, and application outcomes.

## 12. Containment

Stopped the temporary server and verified port 8085 no longer listened. The vulnerable root remained inside CyberLab evidence storage.

## 13. Remediation

Use parameterized queries; resolve and enforce an allowlisted content root; return generic errors; add structured security logging and tests.

## 14. Retest

PASS as a vulnerability demonstration. A fixed application was not deployed, so remediation retest remains a documented next engineering step.

## 15. Evidence

Sanitized evidence is in [`evidence/`](evidence/). Secrets, private keys, raw logs, VM files, and real personal data are excluded.

## 16. Lessons Learned

Application outcomes proved impact more clearly than scanner output and kept the test small and reproducible.

## 17. Limitations

The app was purpose-built and the detections depend on its explicit result fields. No Wazuh alert or remediation retest is claimed, and the findings do not measure a production application's exposure.
