import { test, expect } from "../../fixtures/test.js";

test.beforeEach(async ({ page }) => {
  await page.goto("https://taskbit.online", {
    waitUntil: "networkidle",
  });
});

test("TC-LOGIN-001: Successful Login", async ({ loginPage, page }) => {
  await loginPage.login(
    process.env.TASKBIT_EMAIL,
    process.env.TASKBIT_PASSWORD,
  );

  await expect(page).toHaveURL(/dashboard/);
});

test("TC-LOGIN-002: Successful Logout", async ({ authenticatedPage }) => {
  await authenticatedPage
    .locator("button.btn--ghost")
    .filter({
      has: authenticatedPage.locator("span.u-visually-hide-below-900"),
    })
    .click();

  await authenticatedPage.getByRole("menuitem", { name: "Log out" }).click();

  await expect(authenticatedPage).toHaveURL("https://taskbit.online");
});

test("TC-LOGIN-003: Account Deactivation Login", async ({
  loginPage,
  page,
}) => {
  await loginPage.login(
    process.env.TASKBIT_PERSONAL_EMAIL,
    process.env.TASKBIT_PERSONAL_PASSWORD,
  );

  await expect(page.locator("#login-error")).toHaveText(
    "Your account is deactivated. Contact the CCIT admin.",
  );
});
