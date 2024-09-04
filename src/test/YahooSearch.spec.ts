import { test, expect, Page} from '@playwright/test'


//any variable can be defined with let or const
let page: Page   //setting up webdriver driver

//create beforeAll function to define only one instance of the page
test.beforeAll(async({browser}) =>{
    page = await browser.newPage()
}) //end of before all function

//search for bmw
test("Search for BMW on search field @smoke",async() => {
    //nav to google
    await page.goto("https://www.Yahoo.com")
    //wait few seconds
    await page.waitForTimeout(3000)
    //type bmw into search field
    await page.locator("xpath=//*[@id='ybar-sbq']").fill("BMW")
    //click on google search button
    await page.locator("xpath=//*[@id='ybar-search']").click()
})//end of test 1

//capture the search result
test("Capture search result number for BMW @smoke",async() => {
    //wait few seconds
    await page.waitForTimeout(3000)
    //store search results text into a variable
    let result = await page.locator("xpath=//*[@style='color:inherit;']").textContent()
    //capture the search number and print it out
    let arrayResult = result?.split(" ")
    console.log("BMW search number is " + arrayResult[1])   

})//end of test 2