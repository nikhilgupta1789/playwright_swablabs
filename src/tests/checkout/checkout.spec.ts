import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { ProductsPage } from '../../pages/products.page';
import { CheckoutPage } from '../../pages/checkout.page';
import testData from './checkout.json';

test('Test Case 4: Complete checkout process', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Login
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login(testData.username, testData.password);

    // Add product to cart and navigate to checkout
    const isProductAdded = await productsPage.addProductToCartByName(testData.productName);
    expect(isProductAdded).toBeTruthy();
    await productsPage.clickOnCart();
    await productsPage.clickOnCheckout();

    // Fill checkout details and complete checkout
    await checkoutPage.fillCheckoutDetails(testData.firstName, testData.lastName, testData.zipCode);
    await checkoutPage.completeCheckout();

    // Verify success message
    let orderSuccesMessage = await checkoutPage.getOrderSuccessMessage();
    let dispatchMessage = await checkoutPage.getDispatchMessage();
    expect(orderSuccesMessage).toEqual(testData.orderSuccessMessage);
    expect(dispatchMessage).toEqual(testData.dispatchMessage);
});
