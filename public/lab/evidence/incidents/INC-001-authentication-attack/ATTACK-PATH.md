# Attack Path

## Kali decision

KALI-ATTACK at 192.168.56.10 checked the existing authentication surfaces on WIN-LAB-01. Ports 445, 3389, 5985, and 5986 were unavailable from the host only network. No authentication attempt was sent. The Windows firewall was not weakened for presentation value.

## Verified evidence flow

```text
WIN-LAB-01 local controlled failures
to Security 4625
to authored Sigma correlation
to custom Wazuh 100201
to VYOMRIX INC-B4FBF410
to analyst containment and retest
```

Kali participation for the authentication action is Not applicable under the preserved service boundary. The reachability transcript records why.
