import {Browser,BrowserContext,Page,chromium,firefox,webkit} from "playwright";
import {Context} from "vm";

enum Browsers
{
Chrome ="chrome",
Firefox ="firefox",
MsEdge ="msedge",

}
let browser:Browser;
let context:BrowserContext;
let page:Page;

export class Tools{

async SetupBrowser(browserName:string):Promise<Browser>
{
    console.log(browserName);
    console.log("Inside Browser");
     if(browserName="Chrome")
        {
            console.log("Inside Chrome");
            browser =await chromium.launch({            
                headless:false,
                slowMo:1000 ,             
            });    

        }
   return browser;
}

 async SetupBrowserContext(browser:Browser):Promise<BrowserContext>{
   console.log("Set up browsercontext");
    context = await browser.newContext({permissions:['microphone','camera'],acceptDownloads:true});
    context.clearCookies();
    return context;
 }

 async SetupBrowserPage(context:Context) :Promise<Page>{
   console.log("inside BrowserPage");
    page=await context.newPage();
    return page;

 }


}