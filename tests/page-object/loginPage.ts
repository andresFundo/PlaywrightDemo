import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private usernameInput = "//input[@id='user-name']";
  private passwordInput = "//input[@id='password']";
  private loginButton = '#login-button';

  constructor(page: Page) {
    this.page = page;
  }

  public async enterUsername(username: string): Promise<void> {
    await this.page.locator(this.usernameInput).fill(username);
  }

  public async enterPassword(password: string): Promise<void> {
    await this.page.locator(this.passwordInput).fill(password);
  }

  public async clickLoginButton(): Promise<void> {
    await this.page.locator(this.loginButton).click();
  }

}