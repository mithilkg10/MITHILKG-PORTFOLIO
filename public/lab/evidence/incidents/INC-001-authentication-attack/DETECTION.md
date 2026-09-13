# Detection

Sigma base rule `failed_logon.yml`, Sigma correlation `failed_logon_burst.yml`, and custom Wazuh rule 100201. The correlation groups by target account over five minutes.

Initial alert: Wazuh custom rule 100201 correlated six unique 4625 records. Built-in rule 60122 supplied the base events.
