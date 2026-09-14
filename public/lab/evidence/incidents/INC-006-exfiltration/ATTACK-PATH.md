# Attack Path

## Verified evidence flow

```text
WIN-LAB-01 192.168.56.20
to synthetic archive creation
to HTTP transfer inside 192.168.56.0/24
to KALI-ATTACK collector 192.168.56.10:8090
to PowerShell 4104 and Wazuh 91819
to VYOMRIX INC-4C4C2C05
to receiver shutdown and payload removal
```

Kali was the genuine isolated collection endpoint. The transfer never left the host only network.
