// global-setup.js
import { chromium } from '@playwright/test';
import Pwactions from './PlaywrightActions/Pwactions';
import Login from './Pages/login-page.spec';
import CommonFunctions from './common-functions/common-functions.spec';

export default async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  const pwactions = new Pwactions(page);
  const login = new Login(page);
  const commonFunctions = new CommonFunctions(page);

  await commonFunctions.navigateToUrl('https://mahendraprod1.thrivesparrow.com/login');
  await login.login('mahendra.malleboina+prod1@surveysparrow.com', '12345678');
 await page.waitForTimeout(3000);

  // Save auth state
  await context.storageState({ path: 'userauth.json' });

  await browser.close();
};
