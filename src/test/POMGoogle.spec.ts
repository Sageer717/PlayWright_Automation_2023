import { test, expect } from '@playwright/test';
import { homePage } from '../../pages/homePage';
import { threadId } from 'worker_threads';

test('Google Home Page', async ({ page }) => {
    const homepage = new homePage(page)

    await homepage.navigate();
    //wait few seconds
    await page.waitForTimeout(3000)
    await homepage.search
    await page.waitForTimeout(3000)

});
