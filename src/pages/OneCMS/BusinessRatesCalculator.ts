import { Page } from "playwright";
import { delay, Utility } from "../../utilities/Utility";


export default class BusinessRatesCalculator{

private page:Page;
public business_RateTable :string | any;
constructor(page:Page)
{
    this.page=page;
}
private calculateButton="(//button[contains(@class,'kf-a-button') and contains(text(),'Calculate')])[1]";
private isProperty2017RatingNo = "(//span[@class='kf-a-radio-button__checkmark'])[2]";

private errorMessage(data:string):string{ return `(//div[contains(@class,'__error')])[${data}]`;}
private ratesPayable(data:string):string{ return `(//div[@class='kf-o-business-calculator-result__year-result__value'])[${data}]`;}


async clickCalculate()
{
    await this.page.waitForSelector(this.calculateButton);
    await this.page.click(this.calculateButton);
}

async getErrorMessageTextValue(index:string):Promise<string>
{
    let textvalue:any="";
    textvalue=await this.page.locator(this.errorMessage(index)).textContent();
    return textvalue
}

async getRatesPayableValue(index:string):Promise<string>
{
    let textvalue:any="";
    textvalue=await this.page.locator(this.ratesPayable(index)).textContent();
    return textvalue;
}

async clickIsProperty2017RatingAsNo()
{
    await this.page.waitForSelector(this.isProperty2017RatingNo);
    await this.page.click(this.isProperty2017RatingNo);
}



}