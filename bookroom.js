const puppeteer = require('puppeteer');
const argv = require('yargs').argv;

const LOGIN = async (page) => {
    const USER = {
        username : "xXUSERNAMEXx",
        password : "*************",  
        month : argv.mt || "2",
        day : argv.d || "1"
    }

    try {

        const emailField = await page.$('input[name=j_username]');
        await emailField.click({delay: 50});
        await emailField.type(USER.username, {delay: 50});
        await emailField.dispose();

        const passwordField = await page.$('input[name=j_password]');
        await passwordField.click({delay: 50});
        await passwordField.type(USER.password, {delay: 50});
        await passwordField.dispose();

        const loginButton = await page.$('input[type=submit]');
        await loginButton.focus();
        await loginButton.click({ delay: 100 });
        await loginButton.dispose();
        await page.waitForNavigation();

    }
    catch(err){
        console.log('lol whoops');
    }
};

async function run() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.facebook.com/'); //Not the actual site I used
    await LOGIN(page);
}

run();