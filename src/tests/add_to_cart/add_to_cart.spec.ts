import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { ProductsPage } from '../../pages/products.page';
import testData from "./add_to_cart.json";

test('Test Case 2: Add to Cart', async ({ page }) => {

    let loginPage = new LoginPage(page);
    let productsPage = new ProductsPage(page);

    await page.goto('https://saucedemo.com/');
    await loginPage.login(testData.username, testData.password);
    expect(await productsPage.addProductToCartByName(testData.addItem), "Expected product "+testData.addItem+" to be added to the cart, but it was not.").toBeTruthy();
    expect(await productsPage.addProductToCartByName(testData.addItem2), "Expected product "+testData.addItem2+" to be added to the cart, but it was not.").toBeTruthy();
});