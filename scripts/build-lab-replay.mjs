import fs from 'node:fs';
import crypto from 'node:crypto';
const {cases} = await import('data:text/javascript;base64,' + Buffer.from(fs.readFileSync('src/app/lab/data.ts','utf8')).toString('base64'));
const validation = JSON.parse(fs.readFileSync('src/app/lab/detection-validation.json','utf8'));
const primary = ['correlation-observation.json','windows-events.json','windows-events.json','windows-events.json','application-requests.json','windows-client.json'];
const rules = [['failed_logon.yml','failed_logon_burst.yml'],['encoded_powershell.yml'],['scheduled_task.yml'],['lsass_process_access.yml'],['web_sql_injection.yml','web_path_traversal.yml'],['powershell_archive_staging.yml']];
const wazuhIds = ['100201','92057','60228','91815',null,null];
const section = (text, name) => text.match(new RegExp('## \\d+\\. '+name+'\\r?\\n([\\s\\S]*?)(?=\\r?\\n##|$)'))?.[1].trim() || '';
const replay = cases.map((c,i) => {
  const dir = `incidents/${c.id}-${c.slug}/`;
  const read = file => fs.readFileSync('public/lab/evidence/'+file,'utf8');
  const readme = read(dir+'README.md');
  const rawPath = dir+'evidence/'+primary[i];
  const raw = JSON.parse(read(rawPath));
  const alerts = wazuhIds[i] ? JSON.parse(read(dir+'evidence/wazuh-alerts.json')).alerts : [];
  const alert = alerts.find(a => a.rule.id === wazuhIds[i]) ?? null;
  if(wazuhIds[i] && !alert) throw new Error(`Missing real alert for ${c.id}`);
  const paths = [rawPath,dir+'README.md',dir+'CONTAINMENT.md',dir+'REMEDIATION.md',dir+'RETEST.md',...rules[i].map(r=>'detections/sigma/'+r)];
  if(i===0) paths.push('detections/wazuh/phase3_auth_rules.xml');
  if(alert) paths.push(dir+'evidence/wazuh-alerts.json');
  return {...c, raw, rawPath, alert,
    severity:readme.match(/^Severity: (.+)$/m)?.[1].trim() || 'Not recorded',
    origin:i===4?'WIN-LAB-01 → host-only application':i===5?'WIN-LAB-01 → host-only collector':'Controlled Windows process on WIN-LAB-01',
    method:section(readme,'Attack/Emulation Method'), observables:section(readme,'Indicators / Observables'),
    investigation:section(readme,'Investigation'),
    containment:read(dir+'CONTAINMENT.md').replace(/^#.*\r?\n/,'').trim(),
    remediation:read(dir+'REMEDIATION.md').replace(/^#.*\r?\n/,'').trim(),
    retest:read(dir+'RETEST.md').replace(/^#.*\r?\n/,'').trim(),
    rules:rules[i].map(file=>({file,source:'detections/sigma/'+file,text:read('detections/sigma/'+file),validation:validation.rules.find(r=>r.file===file)?.validation || 'NOT_TRIGGERED'})),
    customRule:i===0?read('detections/wazuh/phase3_auth_rules.xml'):null,
    sources:paths.map(file=>({file,sha256:crypto.createHash('sha256').update(read(file)).digest('hex')})),
  };
});
fs.writeFileSync('src/app/lab/replay-data.json',JSON.stringify(replay,null,2)+'\n');
console.log('Built six replay records from preserved evidence; original sources unchanged.');
