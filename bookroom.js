const puppeteer = require('puppeteer');
const argv = require('yargs').argv;

const LOGIN = async (page) => {
    const USER = {
        username : "",
        password : "",
        weekOfTheMonth : argv.mt || "2",
        day : argv.d || "1",

        date : "02/28/2018"
    }

    try {

        const emailField = await page.$('input[name=j_username]');
        await emailField.click({delay: 10});
        await emailField.type(USER.username, {delay: 10});
        await emailField.dispose();

        const passwordField = await page.$('input[name=j_password]');
        await passwordField.click({delay: 10});
        await passwordField.type(USER.password, {delay: 10});
        await passwordField.dispose();

        const loginButton = await page.$('input[type=submit]');
        await loginButton.focus();
        await loginButton.click({ delay: 10 });
        await loginButton.dispose();

        await page.click('#datepicker');
    

        /*const dateSelect = await page.$('input[id=datepicker]');
        await dateSelect.focus();
        await dateSelect.click({delay: 100});
        await dateSelect.type(USER.date, {delay: 100});*/
        
        /*await page.click('#day_main > tbody > tr:nth-child(31) > td:nth-child(15) > div > a');
        await page.waitForNavigation();*/

        //const theDaySelector = '#cal_this > table > tbody > tr:nth-child(5) > td:nth-child(4) > a';
        //await page.waitForSelector(theDaySelector);

    }
    catch(err){
        console.log('whoops');
    }
};

async function run() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://booking.sauder.ubc.ca/ugr/cwl-login');
    await LOGIN(page);
}

run();
