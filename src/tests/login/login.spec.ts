import { test, expect } from '@playwright/test';
import testData from './login.json';


testData.data_sets.forEach((data: any) => {

    test(data.scenario, async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    
        await page.fill('#user-name', data.username);
        await page.fill('#password', data.password);
        await page.click('#login-button');
    
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });
});