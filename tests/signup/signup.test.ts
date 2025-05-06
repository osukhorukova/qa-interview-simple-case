import { test } from '../../fixtures/fixtures'
import { randomUserGenerator } from '../../test-data/test-users'

test.describe('Signup form tests', () => {
    test('Successful sign up, log out and sign in', async ({ pageManager, signupPage }) => {
        const user = randomUserGenerator()

        await pageManager.onSignupPage().fillSignupFormAndPressSubmit(user.firstName, user.lastName, user.email, user.password)

        await pageManager.onCompanyPage().verifyWelcomeMessage(user.firstName, user.lastName)
        await pageManager.onCompanyPage().clickLogout()

        await pageManager.onLoginPage().fillLoginFormAndPressLogin(user.email, user.password)

        await pageManager.onCompanyPage().verifyWelcomeMessage(user.firstName, user.lastName)
    })
})