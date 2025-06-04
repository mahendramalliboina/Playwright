// global-setup.js
import { chromium } from '@playwright/test';
import fs from 'fs';

export default async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://mahendraprod1.thrivesparrow.com/login');
  await page.fill('//input[@type="email"]', 'mahendra.malleboina+prod1@surveysparrow.com');
  await page.fill("//input[@name='password']", '12345678');
  await page.click("//button[normalize-space()='Login']");
 await page.waitForTimeout(3000);

  // Save auth state
  await context.storageState({ path: 'userauth.json' });

  await browser.close();
};
