
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.here if we dont mention /../ it will expect exact tile 
  await expect(page).toHaveTitle(/Playwright/);
  const pageTitle  =  await page.title();
  console.log(pageTitle);
  await expect(page).toHaveTitle(pageTitle);

});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
