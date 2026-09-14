# INC-005: Host Only Web Application Attack

Status: PASS

Severity: High

VYOMRIX incident: INC-7890B5F0

## Executive Summary

KALI-ATTACK at 192.168.56.10 sent controlled requests to a purpose built application bound only to 192.168.56.1:8085. The application confirmed an SQL injection authentication bypass and path traversal into a synthetic marker file.

## Origin and target

| Field | Value |
|---|---|
| Source | KALI-ATTACK 192.168.56.10 |
| Target | Synthetic application 192.168.56.1:8085 |
| Network | VirtualBox host only 192.168.56.0/24 |
| Internet route | None |

## Detection and investigation

Application findings `sql-injection-bypass` and `path-traversal` are authoritative. Sigma `web_sql_injection.yml` and `web_path_traversal.yml` matched the structured records. No Wazuh alert is claimed for the primary behavior. VYOMRIX incident INC-7890B5F0 contains the Kali timeline and evidence references.

## Containment and retest

The normal synthetic login remained unauthenticated. Port 8085 was closed after evidence capture. The request log remained readable with SHA256 c1a113a1618f6e3927fb280edae83c24ec294a49b0a2977ef0eb16c412fc8973.

## Evidence

The evidence directory contains Kali transcripts, application records, preflight results, and containment confirmation. No credentials, private keys, VM files, or personal data are included.
