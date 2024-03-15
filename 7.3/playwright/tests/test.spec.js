const { test, expect, chromium } = require("@playwright/test");
const user = require("../user");

test("test", async ({page}) =>
{
    const browser = await chromium.launch({
        headless: false,
        slowMo: 5000
    });
 await page.goto("https://netology.ru/?modal=sign_in");
 await page.locator('[placeholder="Email"]').click();
 await page.locator('[placeholder="Email"]').fill(user.email);
 await page.locator('[placeholder="Пароль"]').click();
 await page.locator('[placeholder="Пароль"]').fill(user.password);
 await page.locator('[data-testid="login-submit-btn"]').click();
 await page.waitForURL("https://netology.ru/profile/");
 await browser.close();
})()