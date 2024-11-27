import { test, expect } from '@playwright/test';

test('homepage', async ({ page }) => {

  await page.goto('https://georgebrown.ca/', {
    waitUntil: "networkidle"
  });

  await page.screenshot({
    path: page.viewportSize()?.width + "_home.png"
  });

  await page.screenshot({
    path: page.viewportSize()?.width + "_home_full.png",
    fullPage: true
  });


});

test('g418', async ({ page, isMobile }) => {

  if (isMobile == true) {
    test.skip();
  }

  await page.goto('https://www.georgebrown.ca/programs/web-development-front-end-design-program-postgraduate-g418/', {
    waitUntil: "networkidle"
  });

  await page.screenshot({
    path: page.viewportSize()?.width + "_g.png"
  });

  await page.screenshot({
    path: page.viewportSize()?.width + "_home_full.png",
    fullPage: true
  });

  await page.locator("#tab-courses-2024").click();

  await page.screenshot({
    path: page.viewportSize()?.width + "_g418_courses_full.png",
    fullPage: true
  });
})
test('g301', async ({ page, isMobile }) => {

  if (isMobile == true) {
    test.skip();
  }

  await page.goto('https://www.georgebrown.ca/programs/honours-bachelor-of-digital-experience-design-program-g301/', {
    waitUntil: "networkidle"
  });

  await page.screenshot({
    path: page.viewportSize()?.width + "_home.png"
  });

  await page.screenshot({
    path: page.viewportSize()?.width + "_home_full.png",
    fullPage: true
  });

  await page.locator("#tab-courses-2024").click();

  await page.screenshot({
    path: page.viewportSize()?.width + "_g418_courses_full.png",
    fullPage: true
  });
});

