import { test } from '../../test-options/test-options'
import { existingUsers } from '../../test-data/test-users'

test.describe('Login form tests', () => {
  test('Successful login with existing account', async ({ pageManager, loginPage }) => {
    
    const existingUser = existingUsers[0]

    await pageManager.onLoginPage().fillLoginFormAndPressLogin(existingUser.email, existingUser.password)
    await pageManager.onCompanyPage().verifyWelcomeMessage(existingUser.firstName, existingUser.lastName)
  })
})
