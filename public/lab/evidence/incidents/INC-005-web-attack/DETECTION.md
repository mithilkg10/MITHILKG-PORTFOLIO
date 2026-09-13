# Detection

Sigma `web_sql_injection.yml` and `web_path_traversal.yml` validated against the lab-specific application log. No custom Wazuh rule is claimed.

Initial alert: No Wazuh alert was produced. The authoritative findings are the application result fields `sql-injection-bypass` and `path-traversal`.
