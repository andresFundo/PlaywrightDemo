import { Page, expect } from '@playwright/test';

export class InventoryPage {
  private page: Page;
  private shoppingCartIcon = "svg[data-icon='shopping-cart']";

  constructor(page: Page) {
    this.page = page;
  }

  public async validateShoppingCart(): Promise<void> {
    await expect(this.page.locator(this.shoppingCartIcon)).toBeVisible();
    await expect(this.page.locator(this.shoppingCartIcon)).toBeDefined();
    
  }

  
}