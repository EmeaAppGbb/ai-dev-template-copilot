// Scenario Outline: UI is responsive on desktop and tablet devices
// Given the user is using a <device>
// When the user resizes the browser window
// Then the layout and controls adapt for optimal usability

const { test, expect } = require('@playwright/test');

const devices = [
  { name: 'desktop', width: 1280, height: 800 },
  { name: 'tablet', width: 800, height: 1280 }
];

test.describe('Responsive Design', () => {
  for (const device of devices) {
    test(`should adapt layout and controls for optimal usability on ${device.name}`, async ({ page }) => {
      await page.setViewportSize({ width: device.width, height: device.height });
      await page.goto('http://localhost:3000');

      // Simulate resizing
      await page.setViewportSize({ width: device.width - 200, height: device.height });
      // Check for responsive layout (e.g., nav, main, sidebar, etc.)
      const nav = await page.$('nav, [role="navigation"]');
      expect(nav).not.toBeNull();
      expect(await nav.isVisible()).toBe(true);

      // Example: check that controls are still visible and usable
      const controls = await page.$$('[data-testid="control"], button, input');
      expect(controls.length).toBeGreaterThan(0);
      for (const control of controls) {
        expect(await control.isVisible()).toBe(true);
      }
    });
  }
});
