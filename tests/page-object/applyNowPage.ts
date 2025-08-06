import { Page, expect } from '@playwright/test';
import dotenv from 'dotenv';
import { generateFakeEmail } from '../web-utils/dataFaker';
dotenv.config();

export class ApplyNowPage {
  private page: Page;
  private enterFirstName = "//input[@data-testid='firstNameField']";
  private enterLastName = "//input[@data-testid='lastNameField']";
  private enterEmailAddress = "//input[@data-testid='phoneMobileField']";
  private checkboxTerms1 = "//input[@id='mat-checkbox-1-input']";
  private checkboxTerms2 = "//input[@id='mat-checkbox-2-input']";
  private checkboxTerms3 = "//span[@class='mat-checkbox-label'][contains(., 'Fundo LLC and its representatives')]";
  private nextButton = "//button[@type='submit']";
  private authPageOption = "//a[@data-idp='Azure AD']";
  private authPageEmail = "//input[@name='loginfmt']";
  private authPageSubmit = "//input[@type='submit']";
  private authPagePassword = "//input[@name='passwd']";
  private authPageSubmit2 = "//input[@type='submit']";
  private authPageConfirmLogin = "//input[@type='submit']";

  constructor(page: Page) {
    this.page = page;
  }


  public async completeApplyNow(): Promise<void> {
    if (await this.page.locator(this.authPageOption).isVisible({ timeout: 2000 })) 
      await this.page.locator(this.authPageOption).click();
      await expect(this.page.locator(this.authPageEmail)).toBeVisible();
      await this.page.locator(this.authPageEmail).fill(process.env.AUTH_USER as string);
      await expect(this.page.locator(this.authPageSubmit)).toBeVisible();
      await this.page.locator(this.authPageSubmit).click();
      await expect(this.page.locator(this.authPagePassword)).toBeVisible();
      await this.page.locator(this.authPagePassword).fill(process.env.AUTH_PASS as string);
      await expect(this.page.locator(this.authPageSubmit2)).toBeVisible();
      await this.page.locator(this.authPageSubmit2).click();
      await expect(this.page.locator(this.authPageConfirmLogin)).toBeVisible();
      await this.page.locator(this.authPageConfirmLogin).click();
    

    await expect(this.page.locator(this.enterFirstName)).toBeVisible();
    const firstName = process.env.FIRST_NAME as string;
    console.log('FIRST_NAME:', process.env.FIRST_NAME);
    await this.page.locator(this.enterFirstName).click();
    await this.page.locator(this.enterFirstName).clear();
    await this.page.locator(this.enterFirstName).type(firstName);

    await expect(this.page.locator(this.enterLastName)).toBeVisible();
    const lastName = process.env.LAST_NAME as string;
    console.log('LAST_NAME:', process.env.LAST_NAME);
    await this.page.locator(this.enterLastName).click();
    await this.page.locator(this.enterLastName).fill(lastName);

    await expect(this.page.locator(this.enterEmailAddress)).toBeVisible();
    const emailAddress = generateFakeEmail();
    console.log('FAKE_EMAIL:', emailAddress);
    await this.page.locator(this.enterEmailAddress).click();
    await this.page.locator(this.enterEmailAddress).fill(emailAddress);

    await this.page.locator(this.checkboxTerms3).click();
    
    await expect(this.page.locator(this.nextButton)).toBeVisible();
    await this.page.locator(this.nextButton).click();
    await this.page.waitForTimeout(5000);
  }
}