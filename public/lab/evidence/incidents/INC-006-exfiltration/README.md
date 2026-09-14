# INC-006: Synthetic Isolated Data Transfer

Status: PASS

Severity: Medium

VYOMRIX incident: INC-4C4C2C05

## Executive Summary

WIN-LAB-01 created a 489 byte archive from three synthetic files and transferred it only to KALI-ATTACK at 192.168.56.10:8090. Source and collector SHA256 values matched.

## Origin and target

| Field | Value |
|---|---|
| Source | WIN-LAB-01 192.168.56.20 |
| Destination | KALI-ATTACK 192.168.56.10:8090 |
| Network | VirtualBox host only 192.168.56.0/24 |
| Internet route | None |

## Detection and investigation

PowerShell 4104 record 3406 preserved the archive and transfer script. Wazuh alert 1789381207.5448611 under built in rule 91819 supplied supporting endpoint evidence. Collector metadata proved receipt and hash equality. VYOMRIX incident INC-4C4C2C05 contains both references.

## Containment and retest

Windows staging was removed. The Kali receiver was stopped. Port 8090 was closed. The received archive was deleted after hash verification. The transfer remained inside 192.168.56.0/24.

## Evidence

The evidence directory contains the Windows transfer result, Kali collector record, matching hashes, PowerShell event, Wazuh alert, receiver state, and containment result. No real data or secret is included.
