import { Page } from "playwright";


export default class LoginPage{

private page:Page;
constructor(page:Page)
{
    this.page=page;
}
private input_UserName="//input[@id='txtUsername']";
private input_Password="//input[@id='txtPassword']";
private submit_Button="//input[@id='btnSubmit']";
private AdmissionSelectionValue="//li[@id='ctl00_ctl00_pa_btn']/a";


async enterUserName(name:string)
{
  await this.page.waitForSelector(this.input_UserName);
  await this.page.fill(this.input_UserName,name);
}

async enterPassword(password:string)
{
    await this.page.waitForSelector(this.input_Password);
    await this.page.fill(this.input_Password,password);
}

async clickSubmit()
{
    await this.page.waitForSelector(this.submit_Button);
    await this.page.click(this.submit_Button);
}

async getHrefValue():Promise<string>
{
   let hrefvalue:any ="";
   hrefvalue=await this.page.getAttribute(this.AdmissionSelectionValue,"href");
   return hrefvalue;
}

async getClassValue():Promise<string>
{
    let classvalue:any="";
     classvalue=await this.page.getAttribute(this.AdmissionSelectionValue,"class");
    return classvalue

}

}