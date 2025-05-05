import { Page } from "playwright/test";

export class LoginPage {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async fillLoginFormAndPressLogin(email: string, password: string) {
        await this.page.getByRole('textbox', { name: 'Email' }).fill(email)
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password)
        await this.page.getByRole('button', { name: "Login" }).click()
    }
}