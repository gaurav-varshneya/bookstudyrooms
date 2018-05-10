const puppeteer = require('puppeteer');
const argv = require('yargs').argv;

const LOGIN = async (page) => {
    const USER = {
        username : "USERNAME GOES HERE",
        password : "PASSWORD GOES HERE",

        date : argv.d || "05/16/2018",
        name : argv.n || "automated booking TEST"
    }

    try {

        const emailField = await page.$('input[name=j_username]');
        await emailField.click();
        await emailField.type(USER.username);
        await emailField.dispose();

        const passwordField = await page.$('input[name=j_password]');
        await passwordField.click();
        await passwordField.type(USER.password);
        await passwordField.dispose();

        const loginButton = await page.$('input[type=submit]');
        await loginButton.focus();
        await loginButton.click();
        await loginButton.dispose();
        

        const dateSelect = await page.waitForSelector('input[id=datepicker]');
        await dateSelect.focus();
        for (let i = 0; i < 10; i++){
            await page.keyboard.press('Backspace');
        }
        await dateSelect.type(USER.date, {delay: 2});

        const goToButton = await page.$('input[type=submit]');
        await goToButton.focus();
        await goToButton.click();
        await goToButton.dispose();
       
        const booking = await page.waitForSelector('#day_main > tbody > tr:nth-child(1) > td:nth-child(2) > div > a');
        await booking.focus();
        await booking.click();
        await booking.dispose();

        const theRoom = await page.waitForSelector('input[type=text]');
        await theRoom.click();
        await theRoom.type(USER.name);

        const saveBooking = await page.$('input[name=save_button]');
        await saveBooking.focus();
        await saveBooking.click();
        await saveBooking.dispose();

        console.log('Room Booked!');

        process.exit();
        

    }
    catch(err){
        console.log('error');
    }
};

async function run() {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto('https://booking.sauder.ubc.ca/ugr/cwl-login');
    await LOGIN(page);
}

run();