# INC-006 — Synthetic Isolated Data Transfer

Status: PASS
Severity: Medium
VYOMRIX incident: INC-4C4C2C05

## 1. Executive Summary

Three synthetic files were archived and transferred over HTTP inside 192.168.56.0/24. The 508-byte source and collector archives had the same SHA-256.

## 2. Scenario

Demonstrate staging and observable transfer without real data, Internet egress, or an attacker-controlled public service.

## 3. Attack/Emulation Method

Created three clearly labeled synthetic files, used PowerShell `Compress-Archive`, uploaded the archive to the temporary host-only collector, compared hashes, and deleted Windows staging.

## 4. Detection Sources

PowerShell 4104, collector request log, source/collector byte count and SHA-256, VYOMRIX case workflow.

## 5. Initial Alert

No Wazuh alert was produced for the transfer. PowerShell 4104 supports archive staging; the collector log proves network receipt.

## 6. Investigation

Confirmed three synthetic filenames, 508 transferred bytes, matching hashes, destination 192.168.56.1:8085, no default guest route, and successful source cleanup.

## 7. Timeline

| Time | Event |
|---|---|
| 2026-09-13T11:44:54.179886+05:30 | Synthetic archive received by host-only collector |
| 2026-09-13T11:44:54.179886+05:30 | Source and collector SHA-256 matched |
| 2026-09-13T11:44:54.179886+05:30 | Windows staging deleted and collector stopped |

## 8. MITRE ATT&CK

| Technique | Name | Evidence |
|---|---|---|
| T1560.001 | Archive Collected Data: Archive via Utility | Compress-Archive in real 4104 telemetry |
| T1048.003 | Exfiltration Over Unencrypted Non-C2 Protocol | HTTP transfer to an isolated collector; no C2 or Internet involved |

## 9. Indicators / Observables

Files `finance_demo.csv`, `employees_demo.csv`, `research_demo.txt`; 508 bytes; destination 192.168.56.1:8085; matching SHA-256.

## 10. Detection Logic

Sigma `powershell_archive_staging.yml` validated against 4104. Collector metadata is evidence, while no Wazuh transfer alert is claimed.

## 11. False Positives

Backup, packaging, software delivery, and normal uploads. Correlate archive creation, file sensitivity, destination, volume, user, and time.

## 12. Containment

Deleted Windows staging and the archive, stopped the collector, and retained only the synthetic evidence copy inside CyberLab.

## 13. Remediation

Apply data classification, DLP, destination allowlists, proxy logging, archive monitoring, and least-privilege controls.

## 14. Retest

PASS: bytes and SHA-256 matched, transfer stayed host-only, source cleanup completed, and no Internet route existed.

## 15. Evidence

Sanitized evidence is in [`evidence/`](evidence/). Secrets, private keys, raw logs, VM files, and real personal data are excluded.

## 16. Lessons Learned

Hash and byte-count verification establish transfer integrity without exposing file contents or relying on a screenshot.

## 17. Limitations

The transfer contained only 508 bytes of synthetic data and stayed inside the host-only network. No Wazuh transfer alert, Internet egress, C2 channel, or large-volume behavior is claimed.
