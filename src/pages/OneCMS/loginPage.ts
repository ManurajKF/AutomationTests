import { Page } from "playwright";


export default class LoginPage{

private page:Page;
constructor(page:Page)
{
    this.page=page;
}
private input_UserName="//input[@id='ContentPlaceHolder2_Login1_UserName']";
private input_Password="//input[@id='ContentPlaceHolder2_Login1_Password']";
private login_Button="//input[@value='Log In']";
private Logout="//a[@class='logOut']";


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
    await this.page.waitForSelector(this.login_Button);
    await this.page.click(this.login_Button);
}

async checkLogout():Promise<boolean>
{
   let getElement:any ="";
   getElement=await (await this.page.waitForSelector(this.Logout)).isEnabled();
   return getElement;
}



}