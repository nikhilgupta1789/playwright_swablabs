import { Page, Locator } from '@playwright/test';

export enum SortOptions {
    PRICE_LOW_TO_HIGH = 'Price (low to high)',
    PRICE_HIGH_TO_LOW = 'Price (high to low)',
    NAME_A_TO_Z = 'Name (A to Z)',
    NAME_Z_TO_A = 'Name (Z to A)',
}

export class ProductsPage {
    private page: Page;
    private productTitle: Locator;
    private addToCartButton: Locator;
    private cartIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productTitle = page.locator('.inventory_item_name'); // Replace with the actual selector
        this.addToCartButton = page.locator('.btn_inventory'); // Replace with the actual selector
        this.cartIcon = page.locator('.shopping_cart_link'); // Replace with the actual selector
    }

    async getProductTitle(index: number): Promise<string> {
        return await this.productTitle.nth(index).textContent().toString();
    }

    async navigateToCart(): Promise<void> {
        await this.cartIcon.click();
    }

    async clickOnCheckout(): Promise<void> {
        await this.page.locator('.checkout_button').click();
    }

    async clickOnCart(): Promise<void> {
        await this.cartIcon.click();
    }

    async addProductToCartByName(productName: string): Promise<boolean> {
        let isProductAdded = false;
        await this.page.locator("//*[text()='"+productName+"']/ancestor::div[@class='inventory_item']//button").click();
        let buttonText = await this.page.locator("//*[text()='Sauce Labs Backpack']/ancestor::div[@class='inventory_item']//button").textContent();
        if(buttonText === "Remove"){
            isProductAdded = true;
        }
        return isProductAdded;
    }

    async sortProducts(sortOptions: SortOptions): Promise<void> {
        await this.page.selectOption('.product_sort_container', { label: sortOptions});
    }

    async getProductPriceList(): Promise<number[]> {
        const priceList: number[] = [];
        const priceElements = this.page.locator('.inventory_item_price'); // Locate all price elements
    
        // Iterate through each price element and extract the price as a number
        const count = await priceElements.count();
        for (let i = 0; i < count; i++) {
            const priceText = await priceElements.nth(i).textContent();
            if (priceText) {
                priceList.push(parseFloat(priceText.replace('$', '').trim())); // Remove "$" and convert to number
            }
        }
    
        return priceList;
    }
}