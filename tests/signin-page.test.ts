// tests/sign-in.test.ts
import { test, expect } from '@playwright/test';

test('Sign In page should render correctly', async ({ page }) => {
  await page.goto('https://study-palz.vercel.app/auth/signin'); 


 
  const logo = page.locator('img[alt="Study Palz Logo"]');
  await expect(logo).toBeVisible();


  await expect(page.getByRole('heading', { level: 1 })).toContainText('Welcome');


  await expect(page.getByLabel('Email address')).toBeVisible();
  await expect(page.getByLabel('Password')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();


  await expect(page.getByText("Don't have an account?")).toBeVisible();
  await expect(page.getByRole('link', { name: /Sign up/i })).toHaveAttribute('href', '/auth/signup');
});
