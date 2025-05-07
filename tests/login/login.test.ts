import { test, expect } from '@playwright/test'
import { existingUsers } from '../../test-setup/localstorage.setup'

test.describe('login form tests', () => {
  existingUsers.forEach(user => {
    test(`logging in works with ${user.firstName} ${user.lastName}`, async ({ page }) => {
      await page.goto('/login')

      await page
        .getByRole('textbox', { name: 'Email' })
        .fill(user.email)

      await page
        .getByRole('textbox', { name: 'Password' })
        .fill(user.password)

      // Find and click the login button
      await page.getByRole('button', { name: 'Login' }).click()

      // Verify successful login by checking for the "Log out" button
      await expect(page.getByRole('button', { name: 'Log out' })).toBeVisible()
    })
  })
})