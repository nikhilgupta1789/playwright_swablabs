import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { ProductsPage } from '../../pages/products.page';
import testData from "./reset_app_state.json"

test('Test Case 5: Reset app state and verify cart is empty', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    // Login to the app
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login(testData.username, testData.password);

    // Add two products to the cart
    const isFirstProductAdded = await productsPage.addProductToCartByName(testData.product1);
    expect(isFirstProductAdded).toBeTruthy();
    const isSecondProductAdded = await productsPage.addProductToCartByName(testData.product2);
    expect(isSecondProductAdded).toBeTruthy();

    // Verify the cart has 2 items
    const cartBadge = page.locator('.shopping_cart_badge');
    expect(await cartBadge.textContent()).toBe('2');

    // Reset the app state
    await page.locator('#react-burger-menu-btn').click(); // Open the menu
    await page.locator('#reset_sidebar_link').click(); // Click "Reset App State"

    // Verify the cart is empty
    expect(await cartBadge.count()).toBe(0); // Cart badge should no longer exist

    // Verify "Remove" buttons turn back into "Add to Cart"
    const firstProductButton = await page.locator("//*[text()='"+testData.product1+"']/ancestor::div[@class='inventory_item']//button");
    const secondProductButton = await page.locator("//*[text()='"+testData.product2+"']/ancestor::div[@class='inventory_item']//button");
    let firstProductButtonText = await firstProductButton.textContent();
    let secondProductButtonText = await secondProductButton.textContent();

    if (firstProductButtonText !== 'Add to cart') {
        throw new Error("Expected the first product button to be 'Add to cart' after performing Reset App State, but it was not.");
    }

    if (secondProductButtonText !== 'Add to cart') {
        throw new Error("Expected the first product button to be 'Add to cart' after performing Reset App State, but it was not.");
    }

});