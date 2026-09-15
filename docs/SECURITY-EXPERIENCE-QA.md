# Portfolio Security Experience Verification

Date: 2026-09-15

## Scope

The homepage now exposes the Cyber Defense Range in primary navigation, the portrait badge, the first security section, a flagship project and the assessments interface. The Evidence Vault at /evidence indexes all six preserved investigations. RangeMark is an original decorative SVG shared across the homepage, lab, demo and vault.

## Evidence boundary

Technical baseline: 523a3f760db2bdce4d487e87c4109a66e901abea.

The public evidence directory is unchanged. Kali is the request source for INC 005 and the collector for INC 006. INC 001 through INC 004 retain their Windows execution origins. INC 004 remains PARTIAL. Nine built in Wazuh IDs are observed. Rule 91819 remains supporting endpoint context, without a claim of direct transfer detection.

## Verification

Production build and lint passed. The 31 browser checks passed across the full run and the focused mobile retest. The full run passed 30 checks and exposed a six pixel mobile overflow from the existing contact entrance animation. Containing that animation resolved the final check. No assertion was weakened.

Verified sizes: 1440, 1280, 768 and 390 pixels. Checks cover navigation, the portrait badge, homepage range, flagship project, assessment entry, six vault cards, internal evidence links, keyboard access, the 90 second entry, six replay scenarios, decisions, notes, reports, reset, fullscreen and offline operation. Browser errors were monitored. Desktop and mobile compositions were visually inspected.

Accessibility checks cover visible focus, the vault skip link, descriptive controls, decorative SVG semantics, textual status, and reduced motion for the new mark. This is targeted verification, not a full WCAG certification or assistive technology audit.

## Recruiter review

| Perspective | Visible answer |
| --- | --- |
| SOC manager | Six investigations expose containment, retests and analyst decisions. |
| Detection engineer | Ten authored Sigma rules, seven validated selections, one custom Wazuh rule and nine observed platform IDs retain distinct counts. |
| Security engineer | Each case states its real origin, target, telemetry and boundary. |
| Graduate recruiter | The first screen links directly to the range and the 90 second demonstration. |

## Release boundary

This pass creates a local portfolio commit. No new VM activity or scenario execution occurred. Preserved telemetry was not regenerated. Publishing is separate from this local presentation verification.
