export class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.emailInput = page.locator("#login-email");
    this.passwordInput = page.locator("#login-password");
    this.loginButton = page.locator("#login-submit");
  }

  // Login action
  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
