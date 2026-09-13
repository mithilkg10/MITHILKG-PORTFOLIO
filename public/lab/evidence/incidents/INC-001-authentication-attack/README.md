# INC-001 — Repeated Authentication Failures

Status: PASS
Severity: High
VYOMRIX incident: INC-B4FBF410

## 1. Executive Summary

Six unique Windows Security 4625 records for a nonexistent synthetic account crossed a five-event/five-minute threshold and produced custom Wazuh alert 1789280470.5309068.

## 2. Scenario

Controlled authentication failures tested whether the range could distinguish a burst from an isolated typo without touching a real account.

## 3. Attack/Emulation Method

Six failed secondary-logon attempts targeted `CyberLab_Ph3_NoUser`. The account does not exist and the credential string was synthetic and redacted from evidence.

## 4. Detection Sources

Windows Security 4625, Sysmon process creation, Wazuh Manager, VYOMRIX incident workflow.

## 5. Initial Alert

Wazuh custom rule 100201 correlated six unique 4625 records. Built-in rule 60122 supplied the base events.

## 6. Investigation

Confirmed a single target account, six unique event records, a five-second observed window, no successful authentication, and no real identity impact.

## 7. Timeline

| Time | Event |
|---|---|
| 2026-09-13T11:51:06.143+05:30 | First preserved 4625 for the synthetic account |
| 2026-09-13T11:51:11.336+05:30 | Sixth preserved 4625; threshold satisfied |
| 2026-09-13T11:51:11.336+05:30 | Custom alert 1789280470.5309068 created and case recorded in VYOMRIX |

## 8. MITRE ATT&CK

| Technique | Name | Evidence |
|---|---|---|
| T1110 | Brute Force | Six repeated failures and a five-event correlation alert |

## 9. Indicators / Observables

Synthetic target `CyberLab_Ph3_NoUser`; Windows event 4625; Wazuh rules 60122 and 100201; six unique record IDs.

## 10. Detection Logic

Sigma base rule `failed_logon.yml`, Sigma correlation `failed_logon_burst.yml`, and custom Wazuh rule 100201. The correlation groups by target account over five minutes.

## 11. False Positives

Saved credentials, service-account password drift, and repeated user typing mistakes. Check source, account ownership, lockout state, and nearby successful logons.

## 12. Containment

Stopped the test after six failures. The synthetic account did not exist, so no account disablement was required.

## 13. Remediation

Use MFA, account lockout or smart throttling, stale-credential hygiene, and alert enrichment with source and success/failure context.

## 14. Retest

PASS: six unique 4625 events generated one custom rule 100201 alert at the configured threshold.

## 15. Evidence

Sanitized evidence is in [`evidence/`](evidence/). Secrets, private keys, raw logs, VM files, and real personal data are excluded.

## 16. Lessons Learned

A single failed logon is weak. Target-aware time-window correlation produced a materially stronger analyst signal.

## 17. Limitations

The activity used one nonexistent synthetic account on one endpoint. It validates the configured threshold in this lab, not detection quality across distributed sources, password spraying, or production identity systems.
