import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { ProductsPage, SortOptions } from '../../pages/products.page';
import testData from "./sort_by_price.json";

test('Test Case 3: Sort items by price (low to high)', async ({ page }) => {

    let loginPage = new LoginPage(page);
    let productsPage = new ProductsPage(page);

    await page.goto('https://saucedemo.com/');
    await loginPage.login(testData.username, testData.password);
    await productsPage.sortProducts(SortOptions.PRICE_LOW_TO_HIGH);
    let priceList:number[] = await productsPage.getProductPriceList();
    let sortedPriceList:number[] = priceList.slice().sort((a, b) => a - b);
    expect(priceList).toEqual(sortedPriceList);
});