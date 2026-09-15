import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'./tests/lab',outputDir:'./lab-test-results',fullyParallel:false,workers:1,timeout:60000,use:{baseURL:process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:3100',channel:'msedge',headless:true},reporter:'list'});
