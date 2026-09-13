import {test,expect} from '@playwright/test';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
for(const [name,width,height] of [['desktop',1440,1000],['laptop',1280,900],['tablet',768,1024],['mobile',390,844]] as const){
 test(`${name}: layout, evidence and keyboard navigation`,async({page})=>{
  await page.setViewportSize({width,height});const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('/lab');await expect(page.getByRole('heading',{name:'MKG CYBER DEFENSE LAB'})).toBeVisible();
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();
  await page.getByRole('button',{name:'04 Wazuh',exact:true}).click();await expect(page.locator('pre')).toContainText('1789279933.4126869');
  await page.getByRole('button',{name:'Not triggered',exact:true}).click();await expect(page.getByRole('status')).toContainText('3 Sigma');
  await page.locator('.case-4 summary').click();await expect(page.locator('.case-4')).toContainText('No credential read');
  await page.screenshot({path:`lab-test-results/lab-${name}.png`,fullPage:true});expect(errors).toEqual([]);
  await page.goto('/lab/demo');await page.getByRole('button',{name:'90 seconds',exact:true}).click();await page.locator('h1').click();await page.keyboard.press('ArrowRight');await expect(page.locator('pre')).toContainText('2285');
  await page.getByRole('button',{name:'5 minutes',exact:true}).click();await expect(page.locator('#limitations')).toContainText('ABHEDYA');expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();
 });
}
test('offline download works with network disabled',async({page,context})=>{
 await page.goto('/lab/demo');const downloadPromise=page.waitForEvent('download');await page.getByRole('button',{name:'Download offline edition'}).click();const download=await downloadPromise;
 const file=path.resolve('lab-test-results/offline.html');await download.saveAs(file);await context.setOffline(true);await page.goto(pathToFileURL(file).href);
 await expect(page.getByRole('heading',{name:'MKG CYBER DEFENSE LAB'})).toBeVisible();await page.getByRole('button',{name:'90 seconds',exact:true}).click();await page.getByRole('button',{name:'Wazuh',exact:true}).click();await expect(page.locator('#code')).toContainText('92057');
 await page.getByRole('button',{name:'5 minutes',exact:true}).click();await expect(page.locator('#limitations')).toContainText('PARTIAL');await page.screenshot({path:'lab-test-results/lab-offline.png',fullPage:false});
});
test('incident routes and existing portfolio routes remain available',async({page})=>{
 for(const slug of ['authentication-attack','powershell','scheduled-task','credential-access','web-attack','exfiltration']){const r=await page.goto(`/lab/incidents/${slug}`);expect(r?.status()).toBe(200);await expect(page.locator('h1')).toBeVisible();}
 for(const route of ['/','/blog','/projects/honeybee-distributed-ai-defense']){const r=await page.goto(route);expect(r?.status()).toBe(200);await expect(page.locator('main')).toBeVisible();}
});
test('reduced motion, focus and source links',async({page,request})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/lab');await page.keyboard.press('Tab');await expect(page.getByRole('link',{name:'Skip to content'})).toBeFocused();await page.keyboard.press('Enter');
 expect(await page.locator('.lab-case').first().evaluate(e=>getComputedStyle(e).transitionDuration)).toBe('0s');
 const links=await page.locator('a[href^="/lab/evidence/"]').evaluateAll(nodes=>nodes.map(n=>n.getAttribute('href')!));for(const href of new Set(links)){expect((await request.get(href)).status()).toBe(200);}
});

