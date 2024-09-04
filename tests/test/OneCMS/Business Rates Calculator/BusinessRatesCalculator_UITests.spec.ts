import UITests from "..//../../..//src/workflow/OneCMS/Business Rates Calculator/UITests.workflows";
import {Browser,Page,BrowserContext,chromium,firefox} from "playwright";
import { Tools } from "..//../../..//src/utilities/tools";
import testData from '..//../../..//src/testdata/testData.json';
import {Logger} from '../../../../src/utilities/Logger';




let uitestworkflow:UITests;
let browser:Browser;
let context:BrowserContext;
let page:Page;
let tools=new Tools();

describe('Business Rates Calculator Front End UI Tests',()=>{
beforeAll(async()=>{
   browser =await tools.SetupBrowser("Chrome"); 
   context=await tools.SetupBrowserContext(browser);
   page =await tools.SetupBrowserPage(context);
   uitestworkflow = new UITests(page);
});

test("Mandatory field validation",async()=>
{    
    await Logger.logger.info("Launch the URL");
    await uitestworkflow.launchApplication();

    await Logger.logger.info("Click Calculate Button without filling any fields");
    await uitestworkflow.clickCalculateButton();

    await uitestworkflow.checkErrorMessage();
    await Logger.logger.info("Change 'Is the property in the 2017 rating list'? Button as 'No'");
    await uitestworkflow.clickIsProperty2017RatingAsNoRadioButton();
    
    await Logger.logger.info("Check Error Message is Not Displayed");
    await uitestworkflow.checkErrorMessageNotDisplayed();
})



afterAll(async()=>{
    await page.close();
    await context.close();
    await browser.close();
})



})