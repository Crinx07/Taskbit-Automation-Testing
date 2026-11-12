import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { RegisterPage } from "../pages/RegisterPage.js";

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },

  registerPage: async ({ page }, use) => {
    const registerPage = new RegisterPage(page);

    await use(registerPage);
  },
});

export { expect } from "@playwright/test";
