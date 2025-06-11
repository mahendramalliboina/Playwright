import {test} from '@playwright/test';
import CommonFunctions from '../common-functions/common-functions.spec';

test.describe("drg and drop", async() => {
    const commonFunctions =  new CommonFunctions();
    test("drag and drop example", async({page}) => {
        await commonFunctions.navigateToUrl();
        await page.locator(drag).dragTo(await page.locator(drop));
    })
})
