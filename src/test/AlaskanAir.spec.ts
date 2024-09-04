import { test, expect, Page } from "@playwright/test";

let page: Page

//create beforeAll function to define only one instance of the page 
test.beforeAll(async({browser}) =>{

    page = await browser.newPage()
}) //end of before all function

//navigate to alaskan air
test("Arraylist Forloop @smoke",async() => {
    //declare arraylist
    let origin = Array<string>()
    origin.push("NYC")
    origin.push("CHI")
    origin.push("HOU")

    for(let i = 0; i < origin.length; i++){
        //nav to alaskanair
        await page.goto('https://www.alaskanair.com')
    }//end of for loop
})//end of test 1