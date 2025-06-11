// import { test as base, chromium } from '@playwright/test';
// //import Login from '../Pages/login-page.spec';
// let browser;
// let context;
// let page;
// export const test = base.extend({

//   customPage: async ({}, use) => {
//     if (!browser) {
//         //const loginPage = new Login(page);
//       browser = await chromium.launch({ headless: false });
//       context = await browser.newContext({storageState:'userauth.json'});
//        page = await context.newPage();
//     }
//     await use(page);
//   }
// });

// test.afterAll(async () => {
//   await browser.close();
// });
