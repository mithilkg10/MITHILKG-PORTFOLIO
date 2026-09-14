# Attack Path

## Verified evidence flow

```text
KALI-ATTACK 192.168.56.10
to controlled HTTP requests
to synthetic application 192.168.56.1:8085
to application request records
to authored AppSec Sigma selections
to VYOMRIX INC-7890B5F0
to analyst containment and retest
```

Kali was the genuine request source. The application bound only to the host only adapter.
