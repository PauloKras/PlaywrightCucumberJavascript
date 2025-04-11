const {Given, When, Then, setDefaultTimeout, Before, BeforeStep, BeforeAll, After, AfterAll, AfterStep} = require("@cucumber/cucumber");
const {chromium} = require('@playwright/test')

let browser;
let page;
let teste = 666;

BeforeStep({tags: "@smoke"},async()=>{
    console.log("beforeStep Hooks ==================================")
})

//BeforeAll(async()=>{
//   console.log("beforeAll Hooks <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
//})

//Before(async()=>{
//    console.log("before Hooks ..............................................")
//})

//After(async()=>{
//    console.log("After Hooks")
//})

AfterStep({tags: "@smoke"},async()=>{
    //console.log("AfterStep Hooks")
})

//AfterAll(async()=>{
//    console.log("AfterAll Hooks")
//})

Given('providing valid url', async function () {
    browser = await chromium.launch({headless: false})
    page = await browser.newPage()
    setDefaultTimeout(20000)
    await page.goto("https://demo.guru99.com/test/newtours/")
})


When('providing valid username an password', async function () {
    setDefaultTimeout(10000)
    if(teste == 666){
        teste = "Paulo";
        console.log(teste);
    }
    await page.locator("//input[@name='userName']").fill('mercury')
    await page.locator("//input[@name='password']").fill('mercury')
})

When('providing valid username as {string} an password as {string}', async function (name, password) {
    setDefaultTimeout(10000)
    await page.locator("//input[@name='userName']").fill(name)
    await page.locator("//input[@name='password']").fill(password)
})

Then('click login button', async function () {
    await page.locator("//input[@name='submit']").click()
    await page.close()
    await browser.close()
})

