import {Locator, Page} from "@playwright/test"

export class LoginPage{
    page:Page ;
    usernameField:Locator ;
    passwordField:Locator ;
    loginButton:Locator ;

    constructor(page:Page){
        this.page = page ;
        this.usernameField = this.page.getByRole("textbox",{name:"Username"}) ;
        this.passwordField = this.page.getByRole("textbox",{name:"Password"}) ;
        this.loginButton = this.page.getByRole("button",{name:"Login"}) ;
    }

 /*   async login(username:string, password:string){
        await this.usernameField.fill(username) ;
        await this.passwordField.fill(password) ;
        await this.loginButton.click() ;

    } */

    async login(){
        await this.usernameField.fill(process.env.EN_USERNAME!) ;
        await this.passwordField.fill(process.env.EN_PASSWORD!) ;
        await this.loginButton.click() ;

    }



}
