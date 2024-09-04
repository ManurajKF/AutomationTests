import {Browser,Page} from "playwright";

import LoginPage from "../../../pages/OneCMS/loginPage";
import testData from '../../../testdata/testData.json';
import { Utility } from "../../../utilities/Utility";
let loginPage:LoginPage;
let url:any;
let env:string;
let utility : any;


    export default class LoginWorkflow
    {
          private page:any;
          constructor(page: Page)
          {
              this.page=page
              loginPage=new LoginPage(this.page);
              url= testData.AppSettingsCMS.BaseUrlCMSAdmin.BaseUrlCMSAdminFea;
          }

      async launchApplication()
      {
        try{
          await this.navigateTOURL(url);
          await utility.delay(10);
          this.page.setTimeout(10);
          await this.page.waitForLoadState();
          }

        catch(error)
        {}
      }
      

      async navigateTOURL(baseUrl: string)
      {
        try{
          
          await this.page.goto(baseUrl);
          await this.page.waitForLoadState();
          
        }

        catch(error)
        {}
      }

      async loginApplication(userName:string,password:string)     
          {
           
            await loginPage.enterUserName(userName);  
            await loginPage.enterPassword(password);           
            await loginPage.clickSubmit();
            await this.page.waitForLoadState();
          }

        async VerifyLandingPage()
          {
              let Logout=await loginPage.checkLogout();
             await expect(Logout).toBeTruthy();
                           
          }


}