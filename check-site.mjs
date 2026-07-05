import { chromium, devices } from 'playwright';
import fs from 'fs';

// Configuration
const TARGET_URL = process.argv[2] || 'http://localhost:3000';
const OUT_DIR = './test-results';

// Devices to simulate
const viewports = {
  Desktop: devices['Desktop Chrome'],
  Tablet: devices['iPad (gen 7)'],
  Mobile: devices['iPhone 13']
};

async function runTests() {
  console.log(`\n🚀 Starting Automated Site Check against: ${TARGET_URL}\n`);
  
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR);
  }

  const browser = await chromium.launch({ headless: true });
  let totalErrors = 0;

  for (const [deviceName, deviceConfig] of Object.entries(viewports)) {
    console.log(`\n📱 Testing on ${deviceName} (${deviceConfig.viewport.width}x${deviceConfig.viewport.height})`);
    console.log(`--------------------------------------------------`);
    
    const context = await browser.newContext({ ...deviceConfig });
    const page = await context.newPage();
    
    // Listen for console errors
    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.error(`[CONSOLE ERROR] ${msg.text()}`);
      }
    });

    try {
      console.log(`⏳ Loading page...`);
      const response = await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
      
      if (!response || !response.ok()) {
        console.error(`❌ Failed to load page. Status: ${response?.status()}`);
        totalErrors++;
        continue;
      }
      console.log(`✅ Page loaded successfully.`);

      // Simulate human scrolling to trigger all framer-motion animations
      console.log(`🎬 Triggering scroll animations...`);
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 300; // scroll amount
          const timer = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;

            if (totalHeight >= scrollHeight) {
              clearInterval(timer);
              resolve();
            }
          }, 200); // interval
        });
      });
      // Wait a moment for final animations to settle
      await page.waitForTimeout(2000);

      // Take Screenshot
      const screenshotPath = `${OUT_DIR}/${deviceName}-fullpage.png`;
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`📸 Saved full-page layout screenshot to ${screenshotPath}`);

      // Check all buttons and links
      console.log(`🔍 Checking interactive elements...`);
      const elements = await page.locator('a, button').all();
      console.log(`Found ${elements.length} buttons/links.`);

      let brokenLinks = 0;
      for (const el of elements) {
        const tagName = await el.evaluate(n => n.tagName.toLowerCase());
        const href = await el.getAttribute('href');
        
        // Ensure element is visible
        const isVisible = await el.isVisible();
        if (!isVisible) continue;

        if (tagName === 'a' && href) {
          // Check internal links
          if (href.startsWith('/') || href.startsWith(TARGET_URL)) {
            // Check if it's a file download (like pdf)
            if (href.endsWith('.pdf')) {
               const pdfRes = await page.request.get(href);
               if (!pdfRes.ok()) {
                 console.error(`❌ Broken PDF Link found: ${href} (Status: ${pdfRes.status()})`);
                 brokenLinks++;
               }
            } else {
               // Normal internal link (skip hash links for now as they just scroll)
               if (!href.includes('#')) {
                 const linkRes = await page.request.get(href);
                 if (!linkRes.ok()) {
                   console.error(`❌ Broken Internal Link found: ${href} (Status: ${linkRes.status()})`);
                   brokenLinks++;
                 }
               }
            }
          }
        }
      }
      
      if (brokenLinks === 0) {
        console.log(`✅ All internal links and PDFs are working on this device.`);
      } else {
        totalErrors += brokenLinks;
      }

    } catch (e) {
      console.error(`❌ Error testing on ${deviceName}:`, e.message);
      totalErrors++;
    } finally {
      await context.close();
    }
  }

  await browser.close();

  console.log(`\n==================================================`);
  if (totalErrors === 0) {
    console.log(`🎉 ALL CHECKS PASSED! The site is fully functional across all devices.`);
  } else {
    console.log(`⚠️ FINISHED WITH ${totalErrors} ERRORS. Please check the logs above.`);
  }
  console.log(`Check the '${OUT_DIR}' folder to visually verify layout and animations!`);
  console.log(`==================================================\n`);
}

runTests();
