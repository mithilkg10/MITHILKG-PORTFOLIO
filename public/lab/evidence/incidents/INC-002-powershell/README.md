# INC-002 — Suspicious Encoded PowerShell

Status: PASS
Severity: Medium
VYOMRIX incident: INC-3DBE1D32

## 1. Executive Summary

A benign encoded command produced PowerShell 4104 plus Wazuh rule 92057 and was reconstructed in VYOMRIX incident INC-3DBE1D32.

## 2. Scenario

Controlled encoded PowerShell validated command-line and script-block visibility without downloads, payloads, or external traffic.

## 3. Attack/Emulation Method

A child PowerShell process decoded and ran only `Write-Output 'CyberLab-Phase3-Encoded-Benign'`.

## 4. Detection Sources

PowerShell Operational 4104, Sysmon/Windows process telemetry, Wazuh Manager, VYOMRIX.

## 5. Initial Alert

Wazuh built-in rule 92057, alert 1789279933.4126869, identified base64-encoded PowerShell.

## 6. Investigation

Decoded the command, reviewed parent/child context, confirmed the user and timestamp, and verified no network action.

## 7. Timeline

| Time | Event |
|---|---|
| 2026-09-13T06:12:17Z | Benign encoded PowerShell ran |
| 2026-09-13T11:42:13+05:30 | Wazuh rule 92057 preserved the process event |
| 2026-09-13 | VYOMRIX incident INC-3DBE1D32 contained with evidence and report |

## 8. MITRE ATT&CK

| Technique | Name | Evidence |
|---|---|---|
| T1059.001 | PowerShell | Encoded command, process telemetry, and script block |

## 9. Indicators / Observables

`powershell.exe`, `-EncodedCommand`, parent process, benign decoded marker, Wazuh alert ID.

## 10. Detection Logic

Sigma `encoded_powershell.yml` is validated. Wazuh built-in rule 92057 is evidenced separately; the Sigma rule was not represented as a deployed Wazuh rule.

## 11. False Positives

Administrative automation, software deployment, and this lab's guestcontrol helper. Decode and evaluate behavior before escalation.

## 12. Containment

The process exited normally and made no network connection. No endpoint protection was disabled.

## 13. Remediation

Constrain PowerShell where appropriate, retain script-block logging, use signed administrative scripts, and investigate encoded content in context.

## 14. Retest

PASS: new 4104 and Wazuh 92057 evidence matched the existing Sigma selection.

## 15. Evidence

Sanitized evidence is in [`evidence/`](evidence/). Secrets, private keys, raw logs, VM files, and real personal data are excluded.

## 16. Lessons Learned

Decoded content and parent context turn an ambiguous encoding signal into a defensible incident conclusion.

## 17. Limitations

The encoded content was deliberately benign and used one PowerShell execution path. This case validates visibility and selection logic; it does not establish malicious payload detection or evasion resistance.
