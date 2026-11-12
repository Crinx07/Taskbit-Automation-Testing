import { test, expect } from "../../fixtures/test.js";

test.beforeEach(async ({ page }) => {
  await page.goto("https://taskbit.online/register");
});

test("TC-REG-001: Successful Registration", async ({ registerPage, page }) => {
  const uniqueIDNumber = String(Date.now()).slice(-10);
  const uniqueEmail = `qa-${Date.now()}@example.com`;

  await registerPage.register(
    "Cristiano Maldia",
    uniqueIDNumber,
    uniqueEmail,
    "12345678",
  );

  await expect(
    page.getByRole("heading", { name: "Check your email" }),
  ).toBeVisible();
});

test("TC-REG-002: Duplicate Email Validation", async ({
  registerPage,
  page,
}) => {
  await registerPage.register(
    "Cristiano Maldia",
    "2023012451",
    "ymironatnom@gmail.com",
    "12345678",
  );

  await expect(registerPage.errorMessage).toHaveText(
    "That email is already registered.",
  );
});

test("TC-REG-003: Duplicate ID Number Validation", async ({
  registerPage,
  page,
}) => {
  await registerPage.register(
    "Cristiano Maldia",
    "2023012451",
    "ymironatnom1@gmail.com",
    "12345678",
  );

  await expect(registerPage.errorMessage).toHaveText(
    "That ID number is already registered.",
  );
});
