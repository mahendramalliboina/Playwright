# Test info

- Name: catching session
- Location: /Users/mahendra/Desktop/Playwright_Practice/Playwright/tests/globalSetUp.spec.js:9:6

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://mahendraprod1.thjkjkrivesparrow.com/login
Call log:
  - navigating to "https://mahendraprod1.thjkjkrivesparrow.com/login", waiting until "load"

    at /Users/mahendra/Desktop/Playwright_Practice/Playwright/tests/globalSetUp.spec.js:10:14
```

# Page snapshot

```yaml
- heading "This site can’t be reached" [level=1]
- paragraph:
  - strong: mahendraprod1.thjkjkrivesparrow.com
  - text: ’s server IP address could not be found.
- paragraph: "Try:"
- list:
  - listitem: Checking the connection
  - listitem:
    - link "Checking the proxy, firewall, and DNS configuration":
      - /url: "#buttons"
- text: ERR_NAME_NOT_RESOLVED
- button "Reload"
- button "Details"
```

# Test source

```ts
   1 | // This test file verifies whether the login session is successfully captured and reused
   2 | // after being stored using the global-setup script (via storageState).
   3 | // It checks if the user remains logged in by navigating to an authenticated page
   4 | // and asserting the presence of UI elements only visible after login.
   5 |
   6 | //import { test } from '../Fixtures/custom-fixture';
   7 | import {test, expect} from '@playwright/test'
   8 |
   9 | test.only('catching session', async ({ page}) => {
> 10 |   await page.goto('https://mahendraprod1.thjkjkrivesparrow.com/login');
     |              ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://mahendraprod1.thjkjkrivesparrow.com/login
  11 |   expect(await page.locator("//a[normalize-space()='Overview']")).toBeVisible();
  12 |   await page.waitForTimeout(3000);
  13 |
  14 | });
  15 |
  16 | test.only('verifying if session captur is working or not', async ({ page }) => {
  17 |   await page.goto('https://mahendraprod1.thrivesparrow.com/configure/surveys');
  18 |   expect(await page.locator("//a[normalize-space()='Engage']")).toBeVisible();
  19 |   await page.waitForTimeout(3000);
  20 |
  21 | });
  22 |
```