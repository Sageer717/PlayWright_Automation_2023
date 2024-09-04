import { test, expect, Page} from '@playwright/test';


//any variable can be defined with let or const
//same concept as defining driver
let page: Page

//create beforeAll function to define only one instance of the page 
test.beforeAll(async({browser}) =>{

    page = await browser.newPage()
}) //end of before all function

//search for bmw
test("Search for bmw on Search Field @smoke",async() => {
    //navigate to googe
    await page.goto("https://www.google.com")
    //wait few seconds
    await page.waitForTimeout(3000)
    //type bmw on your search field
    await page.locator("xpath=//*[@name='q']").fill("BMW")
    //click on google search button
    await page.locator("xpath=//*[@name='btnK']").nth(1).click()
})//end of test 1

//capture the search result
test("Capture the Seach Number for BMW @smoke",async() => {
    //wait few seconds
    await page.waitForTimeout(3000)
    //store the search results text in a variable
    let result = await page.locator("xpath=//*[@id='extabar']").textContent()
    //print using console.log
    console.log("Result: " + result)
    //split the number
    let arrayResult = result.split(" ")
    console.log("BMW search number is " + arrayResult[1])
})//end of test 2