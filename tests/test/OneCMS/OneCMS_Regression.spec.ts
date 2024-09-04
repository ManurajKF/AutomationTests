import LoginWorkflow from "../../../src/workflow/OneCMS/Login/login.workflow";
import {Browser,Page,BrowserContext,chromium,firefox} from "playwright";
import { Tools } from "../../../src/utilities/tools";
import testData from '../../../src/testdata/testData.json';
import {Logger} from '../../../src/utilities/Logger'

//const testData=JSON.stringify(require("../testData.json"))


let loginworkflow:LoginWorkflow;
let browser:Browser;
let context:BrowserContext;
let page:Page;
let tools=new Tools();


beforeAll(async() => { 
    browser =await tools.SetupBrowser("Chrome"); 
    context=await tools.SetupBrowserContext(browser);
    page =await tools.SetupBrowserPage(context);
    loginworkflow = new LoginWorkflow(page);
  }); 
             

test("Log in to CMS Admin",async()=>
{    
    await Logger.logger.info("Launch the URL");

    console.log("Launch the URL");
    await loginworkflow.launchApplication();    
    console.log("Login Application with UserName and Password");
    await Logger.logger.info("Login Application with UserName and Password")
    await loginworkflow.loginApplication(testData.AppSettingsCMS.Credentials.username,testData.AppSettingsCMS.Credentials.password);
    await loginworkflow.VerifyLandingPage();

})

afterAll(async () => {  
                         
    await page.close();
    await context.close();
    await browser.close();
     
       
  });



