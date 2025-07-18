import { test, expect } from '@playwright/test';
import { LoginPage } from './page-object/loginPage';
import { InventoryPage } from './page-object/inventoryPage';
import { ScreenshotHelper } from './web-utils/screenshotHelper';

test('test the sauce demo page', async ({ page }, testInfo) => {
  await page.goto('https://www.saucedemo.com/v1/index.html');

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.enterUsername('standard_user');
  await loginPage.enterPassword('secret_sauce');
  await loginPage.clickLoginButton();
  await ScreenshotHelper.attachScreenshot(page, testInfo, 'login-process');
  await inventoryPage.validateShoppingCart();
  await ScreenshotHelper.attachScreenshot(page, testInfo, 'shopping-cart-page');
  
});

