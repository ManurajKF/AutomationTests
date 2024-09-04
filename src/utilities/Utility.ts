import {Page} from "playwright";



export class Utility
{
private page:Page;
constructor(page:Page)
{
    this.page=page;
}



}

export function delay(second: number):Promise<void>
{
  
return new Promise(resolve => setTimeout(resolve,second*1000));

 

}