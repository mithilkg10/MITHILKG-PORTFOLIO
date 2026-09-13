import {test,expect, type Page} from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import records from '../../src/app/lab/replay-data.json';

async function review(page:Page,demo=false){
  const range=page.locator('#range-console');
  await range.getByRole('button',{name:demo?'Start demo':'Start safe simulation',exact:true}).click();
  for(let i=0;i<6;i++)await range.getByRole('button',{name:'Next',exact:true}).click();
  await range.getByRole('button',{name:'Open analyst workspace',exact:true}).click();
  return range;
}
for(const demo of [false,true])for(const [i,c] of records.entries())test(`${demo?'demo':'lab'} ${c.id}: replay, inspector, provenance, decision and report`,async({page})=>{
  const errors:string[]=[];const unsafe:string[]=[];page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>{if(r.method()!=='GET')unsafe.push(r.url());});
  await page.goto(demo?'/lab/demo':'/lab');const range=page.locator('#range-console');await range.getByRole('combobox',{name:'Scenario',exact:true}).selectOption(String(i));
  await expect(range).toContainText(c.proof);await expect(range.getByRole('button',{name:'Open analyst workspace'})).toBeDisabled();
  await range.getByRole('button',{name:demo?'Start demo':'Start safe simulation',exact:true}).click();await expect(range.locator('[data-testid=range-status]')).toHaveText('RUNNING');
  await expect(range.locator('.range-node').nth(0)).toContainText('IDLE');await expect(range.locator('.range-node').nth(1)).toHaveAttribute('data-active','true');
  for(let step=1;step<=6;step++){await range.getByRole('button',{name:'Next',exact:true}).click();await expect(range.locator('.range-stream li')).toHaveCount(step+1);await expect(range.locator('.range-stage-track [data-current=true]')).toContainText(String(step+1).padStart(2,'0'));}
  await expect(range.locator('.range-node').nth(3)).toHaveAttribute('data-active','true');
  for(const name of ['Raw event','Normalized','Detection','Wazuh','Incident']){
    await range.getByRole('button',{name,exact:true}).click();await expect(range.getByRole('button',{name,exact:true})).toHaveAttribute('aria-pressed','true');
    if(name==='Raw event')await expect(range.locator('pre')).toHaveText(JSON.stringify(c.raw,null,2));
    if(name==='Detection'){for(const r of c.rules)await expect(range.locator('.range-inspector-body')).toContainText(r.validation);await expect(range.locator('.range-inspector-body')).toContainText('AUTHORED BY MITHIL');}
    if(name==='Wazuh')await expect(range.locator('.range-inspector-body')).toContainText(c.alert?c.alert.alert_id:'No Wazuh alert');
    if(name==='Incident')await expect(range.locator('.range-inspector-body')).toContainText(c.incident);
  }
  await range.getByRole('button',{name:'Open incident',exact:true}).click();await expect(range.getByRole('region',{name:'Analyst workspace',exact:true})).toBeVisible();await range.getByRole('button',{name:'Review telemetry',exact:true}).click();await expect(range.locator('.range-main')).toBeVisible();await range.getByRole('button',{name:'Open analyst workspace',exact:true}).click();
  const note='<script>window.replayLeak=true</script> Evidence reviewed.';await range.getByLabel(/Analyst note —/).fill(note);await range.getByRole('button',{name:'Add analyst note',exact:true}).click();await expect(range.locator('.range-notes')).toContainText(note);expect(await page.evaluate(()=>Object.prototype.hasOwnProperty.call(window,'replayLeak'))).toBe(false);
  await range.getByRole('button',{name:'Contain',exact:true}).click();await expect(range.locator('[data-testid=range-status]')).toHaveText('COMPLETE');await expect(range.getByRole('region',{name:'Simulated incident summary'})).toContainText(c.status);
  const downloadPromise=page.waitForEvent('download');await range.getByRole('button',{name:'Download simulated incident report',exact:true}).click();const download=await downloadPromise;const file=path.resolve(`lab-test-results/${c.id}-report.json`);await download.saveAs(file);const report=JSON.parse(fs.readFileSync(file,'utf8'));expect(report.historical.outcome).toBe(c.status);expect(report.visitor.notes).toEqual([note]);expect(report.sources).toEqual(c.sources);expect(report.timeline).toHaveLength(8);expect(report.visitor.action).toBe('Contain');
  await expect(range.getByRole('link',{name:'Open full investigation'})).toHaveAttribute('href',`/lab/incidents/${c.slug}`);
  await range.getByRole('button',{name:'Run another scenario',exact:true}).click();await expect(range.getByRole('combobox',{name:'Scenario',exact:true})).toBeFocused();await expect(range.locator('[data-testid=range-status]')).toHaveText('IDLE');await expect(range.locator('.range-notes')).toHaveCount(0);expect(errors).toEqual([]);expect(unsafe).toEqual([]);
});

test('automatic timer, pause/resume, keyboard, reset and scenario switch cancel old work',async({page})=>{
  await page.clock.install();await page.goto('/lab');const range=page.locator('#range-console');await range.getByRole('button',{name:'Start safe simulation'}).click();await page.clock.runFor(8000);await expect(range.locator('.range-stream li')).toHaveCount(2);
  await range.getByRole('button',{name:'Pause',exact:true}).click();await page.clock.runFor(24000);await expect(range.locator('.range-stream li')).toHaveCount(2);await range.getByRole('button',{name:'Resume',exact:true}).click();await page.clock.runFor(8000);await expect(range.locator('.range-stream li')).toHaveCount(3);
  await range.locator('.range-main').focus();await page.keyboard.press('Space');await expect(range.locator('[data-testid=range-status]')).toHaveText('PAUSED');await page.keyboard.press('ArrowRight');await expect(range.locator('.range-stream li')).toHaveCount(4);await page.keyboard.press('Escape');await expect(range.locator('[data-testid=range-status]')).toHaveText('IDLE');
  await range.getByRole('button',{name:'Start safe simulation'}).click();await range.getByRole('combobox',{name:'Scenario',exact:true}).selectOption('3');await page.clock.runFor(60000);await expect(range.locator('.range-stream li')).toHaveCount(0);await range.getByRole('button',{name:'Start safe simulation'}).click();for(let i=0;i<6;i++){await page.clock.runFor(8000);await expect(range.locator('.range-stream li')).toHaveCount(i+2);}await expect(range.locator('[data-testid=range-status]')).toHaveText('AWAITING DECISION');await page.clock.runFor(30000);await expect(range.locator('.range-stream li')).toHaveCount(7);await range.getByRole('button',{name:'Reset lab'}).click();await expect(range.locator('[data-testid=range-status]')).toHaveText('IDLE');
});

test('all four decisions preserve PARTIAL, notes do not survive reload',async({page})=>{
  for(const demo of [false,true])for(const decision of ['Investigate','Contain','Escalate','False positive']){
    await page.goto((demo?'/lab/demo':'/lab')+'?scenario=credential-access');await expect(page.getByRole('combobox',{name:'Scenario',exact:true})).toHaveValue('3');const range=await review(page,demo);
    await range.getByLabel(/Analyst note —/).fill('Private practice note');await range.getByRole('button',{name:'Add analyst note'}).click();await range.getByRole('button',{name:decision,exact:true}).click();await expect(range.locator('.range-report')).toContainText('PARTIAL');await expect(range.locator('.range-report')).toContainText('No credential read');await expect(range.locator('.range-report h2')).toContainText(decision);
    await page.reload();await expect(page.locator('.range-notes')).toHaveCount(0);
  }
});

test('career fair start, pause, next, workspace and fullscreen controls',async({page})=>{
  await page.setViewportSize({width:1280,height:900});await page.goto('/lab/demo');const range=page.locator('#range-console');await range.getByRole('button',{name:'Start demo'}).click();await range.getByRole('button',{name:'Pause',exact:true}).click();await expect(range.locator('[data-testid=range-status]')).toHaveText('PAUSED');await range.getByRole('button',{name:'Resume',exact:true}).click();await range.getByRole('button',{name:'Reset lab'}).click();await review(page,true);await expect(range.getByRole('button',{name:'Investigate',exact:true})).toBeInViewport();await range.getByLabel(/Analyst note —/).fill('1 2 5 a c d l');await expect(range.locator('[data-testid=range-status]')).toHaveText('AWAITING DECISION');await range.getByRole('button',{name:'Investigate',exact:true}).click();await expect(range.locator('.range-report')).toBeVisible();
  await page.getByRole('button',{name:'Fullscreen',exact:true}).click();expect(await page.evaluate(()=>!!document.fullscreenElement)).toBe(true);await page.getByRole('button',{name:'Fullscreen',exact:true}).click();expect(await page.evaluate(()=>!!document.fullscreenElement)).toBe(false);
});

test('legacy stages, filters, every disclosure and demo shortcuts',async({page})=>{
  for(const demo of [false,true]){await page.goto(demo?'/lab/demo':'/lab');if(demo)await page.getByRole('button',{name:'5 minutes',exact:true}).click();for(const name of ['Behavior','Telemetry','Sigma','Wazuh','Investigation','Decision']){const b=page.locator('.lab-stage-nav').getByRole('button',{name:new RegExp(name)});await b.click();await expect(b).toHaveAttribute('aria-pressed','true');}
  for(const [name,count] of [['Validated',7],['Not triggered',3],['All',10]] as const){await page.locator('.lab-filters').getByRole('button',{name,exact:true}).click();await expect(page.locator('.lab-ledger details')).toHaveCount(count);}
  for(const d of await page.locator('.lab-case details,.lab-ledger details').all()){await d.locator('summary').click();await expect(d).toHaveAttribute('open','');await d.locator('summary').click();await expect(d).not.toHaveAttribute('open','');}}
  await page.goto('/lab/demo');for(const name of ['90 seconds','5 minutes','30 seconds']){await page.getByRole('button',{name,exact:true}).click();await expect(page.getByRole('button',{name,exact:true})).toHaveAttribute('aria-pressed','true');}
  await page.locator('.lab-brand').focus();await page.keyboard.press('Tab');await page.locator('body').click({position:{x:2,y:2}});
  for(const [key,label] of [['2','90 seconds'],['5','5 minutes'],['1','30 seconds']]){await page.keyboard.press(key);await expect(page.getByRole('button',{name:label,exact:true})).toHaveAttribute('aria-pressed','true');}for(const [key,id]of [['a','architecture'],['c','cases'],['d','detections'],['l','limitations']]){await page.keyboard.press(key);await expect(page.locator('#'+id)).toBeInViewport();}await page.keyboard.press('Escape');
  await expect(page.getByRole('button',{name:'30 seconds',exact:true})).toHaveAttribute('aria-pressed','true');
});

test('all static assets, replay provenance and internal link destinations',async({page,request})=>{
  const links=new Set<string>();
  for(const route of ['/lab','/lab/demo',...records.map(c=>`/lab/incidents/${c.slug}`)]){
    const response=await page.goto(route);expect(response?.status()).toBe(200);
    for(const href of await page.locator('a[href]').evaluateAll(nodes=>nodes.map(n=>n.getAttribute('href')!))){if(href.startsWith('/'))links.add(href.split('#')[0]);else if(href.startsWith('#'))expect(await page.locator(href).count(),route+' '+href).toBeGreaterThan(0);}
  }
  for(const c of records)for(const source of c.sources)links.add('/lab/evidence/'+source.file);
  for(const href of links)expect((await request.get(href)).status(),href).toBe(200);
  const crypto=await import('node:crypto');for(const c of records)for(const source of c.sources)expect(crypto.createHash('sha256').update(fs.readFileSync('public/lab/evidence/'+source.file)).digest('hex')).toBe(source.sha256);
  fs.writeFileSync('lab-test-results/link-inventory.json',JSON.stringify([...links].sort(),null,2));
});

test('offline legacy controls, fullscreen, print and keyboard remain available',async({page,context})=>{
  await context.setOffline(true);await page.goto(pathToFileURL(path.resolve('public/lab/offline.html')).href);
  await page.getByRole('button',{name:'30 seconds',exact:true}).click();await expect(page.getByRole('button',{name:'30 seconds',exact:true})).toHaveAttribute('aria-pressed','true');await page.getByRole('button',{name:'90 seconds',exact:true}).click();for(const name of ['Behavior','Telemetry','Sigma','Wazuh','Investigation','Decision']){await page.getByRole('button',{name,exact:true}).click();await expect(page.getByRole('button',{name,exact:true})).toHaveAttribute('aria-pressed','true');}
  await page.getByRole('button',{name:'5 minutes',exact:true}).click();for(const summary of await page.locator('summary').all())await summary.click();
  await page.evaluate(()=>{window.print=()=>{document.title='Print invoked';};});await page.getByRole('button',{name:'Print / PDF',exact:true}).click();await expect(page).toHaveTitle('Print invoked');
  await page.getByRole('button',{name:'Fullscreen',exact:true}).click();expect(await page.evaluate(()=>!!document.fullscreenElement)).toBe(true);await page.getByRole('button',{name:'Fullscreen',exact:true}).click();
  await page.locator('h1').click();for(const key of ['ArrowLeft','ArrowRight','1','2','5','a','c','d','l','Escape'])await page.keyboard.press(key);await expect(page.getByRole('button',{name:'30 seconds',exact:true})).toHaveAttribute('aria-pressed','true');
});
