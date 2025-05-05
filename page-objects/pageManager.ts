import { Page } from "playwright/test";
import { SignupPage } from '../page-objects/signupPage'
import { CompanyPage } from '../page-objects/companyPage'
import { LoginPage } from '../page-objects/loginPage'

export class PageManager{

    private readonly page: Page
    private readonly signupPage: SignupPage
    private readonly loginPage: LoginPage
    private readonly companyPage: CompanyPage

    constructor(page: Page){
        this.page = page
        this.signupPage = new SignupPage(this.page) 
        this.loginPage = new LoginPage(this.page)
        this.companyPage = new CompanyPage(this.page)
    }

    onSignupPage(){
        return this.signupPage
    }

    onLoginPage(){
        return this.loginPage
    }

    onCompanyPage(){
        return this.companyPage
    }
}