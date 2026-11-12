import { test as base, expect } from "@playwright/test";
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

  authenticatedPage: async ({ page, loginPage }, use) => {
    await page.goto("https://taskbit.online", {
      waitUntil: "networkidle",
    });

    await loginPage.login(
      process.env.TASKBIT_EMAIL,
      process.env.TASKBIT_PASSWORD,
    );

    await expect(page).toHaveURL(/dashboard/);

    await use(page);
  },
});

export { expect } from "@playwright/test";
