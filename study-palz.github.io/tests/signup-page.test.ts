import { test, expect } from '@playwright/test';

test('Sign Up page should render and validate form', async ({ page }) => {
  await page.goto('https://study-palz.vercel.app/auth/signup'); 

  
  await expect(page.getByAltText('Study Palz Logo')).toBeVisible();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Join the Squad!');

  
  await expect(page.getByLabel('Email address')).toBeVisible();
  await expect(page.getByLabel('Password')).toBeVisible();

  
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await expect(page.getByText('Please fill in both fields.')).toBeVisible();

  
  await page.getByLabel('Email address').fill('testuser@example.com');
  await page.getByLabel('Password').fill('password123');

});
