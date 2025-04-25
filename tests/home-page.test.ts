import { test, expect } from '@playwright/test';

test('Home Page loads correctly', async ({ page }) => {
  await page.goto('https://study-palz.vercel.app/');

  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
});