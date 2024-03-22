const { test, expect, chromium } = require("@playwright/test");
const {login, password} = require ("../user");

test("test success authorization", async ({ page }) => {

  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(login);
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill(password);
  await page.getByTestId('login-submit-btn').click();
  await page.waitForURL("https://netology.ru/profile/8122316" , {timeout: 100000});
  const header = await page.locator("h2").first();
  await expect(header).toHaveText("Моё обучение");
  await page.close();

});

test("test not success authorization", async ({ page }) => {

  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill("elenasheglova15414@gmail.com");
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill("password");
  await page.getByTestId('login-submit-btn').click();
  await page.locator("data-testid=login-error-hint").isVisible;
  await expect(page.locator("[data-testid=login-error-hint]")).toContainText("Вы ввели неправильно логин или пароль");
});