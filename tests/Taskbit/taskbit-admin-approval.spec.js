import { test, expect } from "@playwright/test";

test("Taskbit Admin Approval Test", async ({ page }) => {
  await page.goto("https://taskbit.online/index.html");

  await page.locator("#login-email").fill("ymironatnom@gmail.com");

  await page.locator("#login-password").fill("12345678");

  await page.locator("#login-submit").click();

  await expect(page.locator("#login-error")).toHaveText(
    "Your account is waiting for admin approval.",
  );
});
