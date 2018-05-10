const puppeteer = require('puppeteer');

puppeteer.launch({
    headless: false,

}).then(async browser => {
        const page = await browser.newPage();
        await page.goto('https://booking.sauder.ubc.ca/ugr/cwl-login');
        await page.click('input[type="submit"]');
        //await page.screenshot({path: 'pic.png'});
        await page.type('input[id=j_username]', 'gvarsh');
        await page.type('input[id=password]', 'papavarshisthebest2');
        await page.click('input[type="submit"]');

    /*const page = await browser.newPage();
    await page.goto('https://www.google.ca/');
    await page.type('input[name=q]', 'ubc sauder');
    await page.click('input[type="submit"]')*/


    //await browser.close();
});