import {test} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { WelcomePage } from "../pages/WelcomePage";
import loginData from  "../../Data/loginData.json" ;
import fs from "fs"
import {parse} from "csv-parse/sync" 

const csvData = fs.readFileSync("Data/loginCsvdata.csv", "utf-8") ;
const record:any[] = parse(csvData,{columns:true, skip_empty_lines:true})

test("Test to verify Login", async({page})=>{

    let LoginPageObj = new LoginPage(page) ;
    let WelcomePageObj = new WelcomePage(page) ;
//    await page.goto(record[0].urlCsv) ;
//    await LoginPageObj.login(record[0].usernameCsv, record[0].passwordCsv) ;
    await page.goto("/") ;
    await LoginPageObj.login() ;
    await WelcomePageObj.clickCrmsfa() ;
    await page.waitForTimeout(5000) ;
})