export class RegisterPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.fullNameInput = page.locator("#reg-fullname");
    this.idNumberInput = page.locator("#reg-idnumber");
    this.emailInput = page.locator("#reg-email");

    this.positionType = page.locator("#reg-position-officer");
    this.positionDropdown = page.locator("#reg-officer-position");

    this.passwordInput = page.locator("#reg-password");
    this.confirmPasswordInput = page.locator("#reg-password-confirm");
    this.registerButton = page.locator("#register-submit");
    this.errorMessage = page.locator("#register-error");
  }

  // Register action
  async register(fullName, idNumber, email, password) {
    await this.fullNameInput.fill(fullName);
    await this.idNumberInput.fill(idNumber);
    await this.emailInput.fill(email);

    await this.positionType.click();
    await this.positionDropdown.click();

    await this.page
      .getByRole("option", {
        name: "1st Year I.T Representative",
      })
      .click();

    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);

    await this.registerButton.click();
  }
}
