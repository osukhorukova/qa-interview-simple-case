import { test, expect } from '@playwright/test'
import { existingUsers } from '../../test-setup/localstorage.setup'

test.describe('login form tests', () => {
  test('logging in works with existing account', async ({ page }) => {
    await page.goto('/login')

    const existingUser = existingUsers[0]

    await page
      .getByRole('textbox', { name: "Email" })
      .fill(existingUser.email)

    await page
      .getByRole('textbox', { name: "Password" })
      .fill(existingUser.password)

    // Find and click the login button
    await page.getByRole('button', { name: "Login" }).click()

    // Verify successful login by checking for the "Log out" button
    await expect(page.getByText('Log out')).toBeVisible()
  })
})