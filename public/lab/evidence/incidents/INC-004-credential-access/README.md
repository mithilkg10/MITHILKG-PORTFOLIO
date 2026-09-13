# INC-004 — Credential-Access Behavioural Simulation

Status: PARTIAL
Severity: Low
VYOMRIX incident: INC-C8A3C71C

## 1. Executive Summary

A query-only LSASS handle request was denied. Wazuh observed the PowerShell discovery activity, but Sysmon Event 10 was not generated; no credential-access success is claimed.

## 2. Scenario

Test the safest detectable precursor to credential access without reading memory or exposing credentials.

## 3. Attack/Emulation Method

Requested only `PROCESS_QUERY_LIMITED_INFORMATION (0x1000)` against LSASS and immediately closed any handle. Windows denied the request.

## 4. Detection Sources

PowerShell 4104 and Wazuh rule 91815. Sysmon Event 10 was specifically checked and absent.

## 5. Initial Alert

Wazuh built-in rule 91815 alert 1789279957.4351342 records process discovery, not credential dumping.

## 6. Investigation

Confirmed the handle was not opened, no memory-read API was used, no artifact containing credentials existed, and no Event 10 was emitted.

## 7. Timeline

| Time | Event |
|---|---|
| 2026-09-13T11:42:37+05:30 | Query-only process-access attempt denied |
| 2026-09-13T11:42:37+05:30 | Wazuh 91815 recorded the PowerShell discovery script |
| 2026-09-13 | VYOMRIX incident INC-C8A3C71C documented as partial |

## 8. MITRE ATT&CK

| Technique | Name | Evidence |
|---|---|---|
| T1003 | OS Credential Dumping | Context only; not counted as evidenced because no credential read or Event 10 occurred |

## 9. Indicators / Observables

PowerShell process discovery; target `lsass.exe`; requested access 0x1000; handle-open result false; Event 10 count zero.

## 10. Detection Logic

Sigma `lsass_process_access.yml` authored but NOT_TRIGGERED. Wazuh 91815 is separately evidenced as process discovery.

## 11. False Positives

Security, identity, backup, and diagnostic tools can access LSASS. Validate access mask, signer, source image, call trace, and endpoint role.

## 12. Containment

No handle opened and no credential material existed. The one-shot process ended immediately.

## 13. Remediation

Protect LSASS, enable Credential Guard where compatible, retain Event 10 telemetry, and baseline approved security products.

## 14. Retest

PARTIAL: safe access was denied and no Event 10 resulted. Riskier tooling was deliberately not used.

## 15. Evidence

Sanitized evidence is in [`evidence/`](evidence/). Secrets, private keys, raw logs, VM files, and real personal data are excluded.

## 16. Lessons Learned

A safe negative result is stronger than manufacturing evidence with credential-dumping tooling.

## 17. Limitations

This case is PARTIAL. The query-only request was denied, no Sysmon Event 10 occurred, no memory-read API was used, and no credentials were accessed. T1003 remains contextual and is excluded from evidenced ATT&CK coverage.
