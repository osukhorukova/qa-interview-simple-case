import { test } from '../../fixtures/fixtures'
import { existingUsers } from '../../test-data/test-users'

test.describe('Login form tests', () => {
  existingUsers.forEach(user => {
    test(`Successful login with ${user.firstName} ${user.lastName}`, async ({ pageManager, loginPage }) => {
      await pageManager.onLoginPage().fillLoginFormAndPressLogin(user.email, user.password)
      await pageManager.onCompanyPage().verifyWelcomeMessage(user.firstName, user.lastName)
    })
  })
})