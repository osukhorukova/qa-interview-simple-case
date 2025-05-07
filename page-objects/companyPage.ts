import { Page, expect } from "playwright/test";

export class CompanyPage {

  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async verifyWelcomeMessage(firstName: string, lastName: string) {
    await expect(this.page.locator("[data-testid='welcome-header']")).toHaveText(`Welcome ${firstName} ${lastName}`);
  }
  
  async clickLogout() {
    await this.page.getByRole('button', { name: 'Log out' }).click()
  }
}