import { Page } from "playwright/test";

export class SignupPage {

  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async fillSignupFormAndPressSubmit(firstName: string, lastName: string, email: string, password: string) {
    await this.page.getByRole('textbox', { name: 'First name' }).fill(firstName)
    await this.page.getByRole('textbox', { name: 'Last name' }).fill(lastName)
    await this.page.getByRole('textbox', { name: 'Email' }).fill(email)
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password)
    await this.page.getByRole('button', { name: "Submit" }).click()
  }
}