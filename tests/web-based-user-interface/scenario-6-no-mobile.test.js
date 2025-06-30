// Scenario: No mobile app is available in the initial version
// Given the user is on a mobile phone
// When the user tries to access the system
// Then the user is informed that only desktop and tablet devices are supported

const { test, expect } = require('@playwright/test');

test.describe('No Mobile App', () => {
  test('should inform mobile users that only desktop and tablet devices are supported', async ({ page }) => {
    // Simulate a mobile device viewport
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone 8 size
    await page.goto('http://localhost:3000');

    // Check for a message or modal indicating unsupported device
    const warning = await page.$('[data-testid="unsupported-device-message"]');
    expect(warning).not.toBeNull();
    expect(await warning.isVisible()).toBe(true);
    const text = await warning.innerText();
    expect(text.toLowerCase()).toContain('desktop');
    expect(text.toLowerCase()).toContain('tablet');
  });
});
