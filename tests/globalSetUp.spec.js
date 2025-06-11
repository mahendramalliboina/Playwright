// This test file verifies whether the login session is successfully captured and reused
// after being stored using the global-setup script (via storageState).
// It checks if the user remains logged in by navigating to an authenticated page
// and asserting the presence of UI elements only visible after login.

//import { test } from '../Fixtures/custom-fixture';
import {test, expect} from '@playwright/test'

test.only('catching session', async ({ page}) => {
  await page.goto('https://mahendraprod1.thjkjkrivesparrow.com/login');
  expect(await page.locator("//a[normalize-space()='Overview']")).toBeVisible();
  await page.waitForTimeout(3000);

});

test.only('verifying if session captur is working or not', async ({ page }) => {
  await page.goto('https://mahendraprod1.thrivesparrow.com/configure/surveys');
  expect(await page.locator("//a[normalize-space()='Engage']")).toBeVisible();
  await page.waitForTimeout(3000);

});
