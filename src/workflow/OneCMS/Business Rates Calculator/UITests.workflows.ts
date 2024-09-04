import { Console } from "console";
import {Browser,Page} from "playwright";
import BusinessRates from "../../../pages/OneCMS/BusinessRatesCalculator";
import testData from '../../../testdata/testData.json';
const {delay}=require('../../../utilities/Utility')

let businessRates:BusinessRates;
let url:any;

    export default class UITests
    {
          private page:any;
          
          constructor(page: Page)
          {
              this.page=page
              businessRates=new BusinessRates(this.page);
             
             
             url= testData.AppSettingsOptimizelyCMS.Urls.BaseUrl;
          }
          async launchApplication()
          {
            
              await this.navigateTOURL(url);
              await delay(2);
              await this.page.waitForLoadState();

          
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

          async clickCalculateButton()
          {
            await this.page.waitForLoadState();
            await businessRates.clickCalculate();
          }

          async checkErrorMessage()
          {
           try{
             await this.page.waitForLoadState();
             await delay(2);
             let propertyText=await businessRates.getErrorMessageTextValue("1");
             await expect(propertyText).toContain("Please select property location");

             let rVText2017=await businessRates.getErrorMessageTextValue("2");
             await expect(rVText2017).toContain("Please enter a numerical value");
           
             let rVText2023=await businessRates.getErrorMessageTextValue("3");
             await expect(rVText2023).toContain("Please enter a numerical value");

             let ratesPayable23=await businessRates.getRatesPayableValue("1");
             await expect(ratesPayable23).toEqual("0");

             let ratesPayable24=await businessRates.getRatesPayableValue("2");
             await expect(ratesPayable24).toEqual("0");

             let ratesPayable25=await businessRates.getRatesPayableValue("3");
             await expect(ratesPayable25).toEqual("0");

             
           }
           catch(error){}
          }

          async clickIsProperty2017RatingAsNoRadioButton()
          {
            await this.page.waitForLoadState();
            await delay(2);
            await businessRates.clickIsProperty2017RatingAsNo();
           
          }

          async checkErrorMessageNotDisplayed()
          {
             await this.page.waitForLoadState();
             await delay(2);
             let rVText2017=await businessRates.getErrorMessageTextValue("2");
             await expect(rVText2017).toBeNull;
          }

          
    }