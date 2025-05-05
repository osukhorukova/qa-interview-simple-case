import { Page, expect } from "playwright/test";

export class CompanyPage {

  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async verifyWelcomeMessage(firstName: string, lastName: string) {
    await expect(this.page.getByText(`Welcome ${firstName} ${lastName}`)).toBeVisible();
  }

  async verifyUserInLocalStorage(email: string) {
    const users = await this.page.evaluate(() => {
      const raw = localStorage.getItem('users');
      return raw ? JSON.parse(raw) : { users: [] };
    });

    expect(users.users.some((u: any) => u.email === email)).toBe(true);
  }

  async clickLogout() {
    await this.page.getByRole('button', { name: 'Log out' }).click()
  }
}