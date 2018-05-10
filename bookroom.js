const puppeteer = require('puppeteer');
const argv = require('yargs').argv;

let rTime = '63000';

const LOGIN = async (page) => {
    const USER = {
        username : "CWL USERNAME GOES HERE",
        password : "PASSWORD GOES HERE",

        date : argv.d || "05/16/2018",
        name : argv.n || "Gaurav's automated booking TEST",
        time : argv.t || '7'
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

        if (argv.t == 7){
            rTime = '25200'
        } else if (argv.t == 730){
            rTime = '27000'
        } else if (argv.t == 8){
            rTime = '28800'
        } else if (argv.t == 830){
            rTime = '30600'
        } else if (argv.t == 9){
            rTime = '32400'
        } else if (argv.t == 930){
            rTime = '34200'
        } else if (argv.t == 10){
            rTime = '36000'
        } else if (argv.t == 1030){
            rTime = '37800'
        } else if (argv.t == 11){
            rTime = '39600'
        } else if (argv.t == 1130){
            rTime = '41400'
        } else if (argv.t == 12){
            rTime = '43200'
        } else if (argv.t == 1230){
            rTime = '45000'
        } else if (argv.t == 13){
            rTime = '46800'
        } else if (argv.t == 1330){
            rTime = '48600'
        } else if (argv.t == 14){
            rTime = '50400'
        } else if (argv.t == 1430){
            rTime = '52200'
        } else if (argv.t == 15){
            rTime = '54000'
        } else if (argv.t == 1530){
            rTime = '55800'
        } else if (argv.t == 16){
            rTime = '57600'
        } else if (argv.t == 1630){
            rTime = '59400'
        } else if (argv.t == 17){
            rTime = '61200'
        } else if (argv.t == 1730){
            rTime = '63000'
        } else if (argv.t == 18){
            rTime = '64800'
        } else if (argv.t == 1830){
            rTime = '66600'
        } else if (argv.t == 19){
            rTime = '68400'
        } else if (argv.t == 1930){
            rTime = '70200'
        } else if (argv.t == 20){
            rTime = '72000'
        } else if (argv.t == 2030){
            rTime = '73800'
        } else if (argv.t == 21){
            rTime = '75600'
        } else if (argv.t == 2130){
            rTime = '77400'
        } else if (argv.t == 22){
            rTime = '79200'
        }

        const startTime = await page.select('#start_seconds', rTime);

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