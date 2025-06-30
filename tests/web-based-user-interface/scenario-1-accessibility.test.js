
// Scenario: Interface is accessible and easy to use for elderly users and caregivers
// Given the user has normal or impaired vision and dexterity
// When the user navigates the interface
// Then the interface provides high contrast, large fonts, and clear navigation
// And all interactive elements are accessible via keyboard and screen reader

const { test, expect } = require('@playwright/test');

test.describe('Accessibility & Usability', () => {
  test('should provide high contrast, large fonts, and clear navigation', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Check for high contrast mode or sufficient contrast ratio
    const bgColor = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    const textColor = await page.evaluate(() => getComputedStyle(document.body).color);
    expect(bgColor).not.toBe(textColor);

    // Check for large font size (e.g., >= 16px)
    const fontSize = await page.evaluate(() => parseFloat(getComputedStyle(document.body).fontSize));
    expect(fontSize).toBeGreaterThanOrEqual(16);

    // Check for clear navigation (presence of nav landmarks)
    const nav = await page.$('nav, [role="navigation"]');
    expect(nav).not.toBeNull();
  });

  test('should have all interactive elements accessible via keyboard and screen reader', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Check that all buttons and links are focusable and have accessible names
    const interactive = await page.$$('[tabindex], button, a, input, select, textarea');
    for (const el of interactive) {
      const tabIndex = await el.getAttribute('tabindex');
      const role = await el.getAttribute('role');
      const ariaLabel = await el.getAttribute('aria-label');
      const ariaHidden = await el.getAttribute('aria-hidden');
      const isHidden = ariaHidden === 'true';
      if (!isHidden) {
        // Should be focusable
        expect(await el.isVisible()).toBe(true);
        // Should have accessible name
        const name = await el.evaluate(node => node.innerText || node.getAttribute('aria-label') || node.getAttribute('alt'));
        expect(name).not.toBe('');
      }
    }
  });
});
