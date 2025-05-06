import { test as base } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'

export type Fixtures = {
    loginPage: string
    signupPage: string
    pageManager: PageManager
}

export const test = base.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
        await page.goto('/login')
        await use('')
    },

    signupPage: async ({ page }, use) => {
        await page.goto('/signup')
        await use('')
    },

    pageManager: async ({ page }, use) => {
        const pm = new PageManager(page)
        await use(pm)
    }
})