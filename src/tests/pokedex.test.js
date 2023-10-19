import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navigate to your Pokedex app URL
  await page.goto("http://localhost:5173");

  // Wait for the page to load completely
  await page.waitForLoadState("domcontentloaded");

  // Capture a screenshot before the components have loaded
  await page.screenshot({ path: "path/to/before-loading-screenshot.png" });

  // Wait for a certain amount of time (adjust the delay as needed)
  await page.waitForTimeout(2000); // 2 seconds delay

  // Capture a screenshot after the components have loaded
  await page.screenshot({ path: "path/to/after-loading-screenshot.png" });

  await browser.close();
})();
