import LoginWorkflow from "../../../src/workflow/Admin/Login/login.workflow";
import {Browser,Page,BrowserContext,chromium,firefox} from "playwright";
import { Tools } from "../../../src/utilities/tools";
import testData from '../../../src/testdata/testData.json';
import {Logger} from '../../../src/utilities/Logger';



let loginworkflow:LoginWorkflow;
let browser:Browser;
let context:BrowserContext;
let page:Page;
let tools=new Tools();

describe('Admin Tests',() =>{
    beforeAll(async()=>{
        browser =await tools.SetupBrowser("Chrome"); 
        context=await tools.SetupBrowserContext(browser);
        page =await tools.SetupBrowserPage(context);
        loginworkflow = new LoginWorkflow(page);
});

test("Admin Login Page Validation",async()=>
{    
    await Logger.logger.info("Launch the URL");
    await loginworkflow.launchApplication();
    await Logger.logger.info("Login Application with UserName and Password")
    await loginworkflow.loginApplication(testData.AppSettingsAdmin.Credentials.username,testData.AppSettingsAdmin.Credentials.password);
    await loginworkflow.VerifyLandingPage();

})
afterAll(async()=>{
    await page.close();
    await context.close();
    await browser.close();
});
})


