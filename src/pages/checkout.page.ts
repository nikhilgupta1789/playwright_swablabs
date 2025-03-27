import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
    private page: Page;
    private firstNameInput: Locator;
    private lastNameInput: Locator;
    private zipCodeInput: Locator;
    private continueButton: Locator;
    private finishButton: Locator;
    private successMessage: Locator;
    private dispatchMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('#first-name'); // Replace with the actual selector
        this.lastNameInput = page.locator('#last-name'); // Replace with the actual selector
        this.zipCodeInput = page.locator('#postal-code'); // Replace with the actual selector
        this.continueButton = page.locator('#continue'); // Replace with the actual selector
        this.finishButton = page.locator('#finish'); // Replace with the actual selector
        this.successMessage = page.locator('.complete-header'); // Replace with the actual selector
        this.dispatchMessage = page.locator('.complete-text'); // Replace with the actual selector
    }

    async fillCheckoutDetails(firstName: string, lastName: string, zipCode: string): Promise<void> {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.zipCodeInput.fill(zipCode);
        await this.continueButton.click();
    }

    async completeCheckout(): Promise<void> {
        await this.finishButton.click();
    }

    async getOrderSuccessMessage(): Promise<string|null> {
        return await this.successMessage.textContent();
    }

    async getDispatchMessage(): Promise<string|null> {
        return await this.dispatchMessage.textContent();
    }
}