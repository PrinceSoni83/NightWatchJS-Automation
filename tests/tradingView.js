module.exports = {
    'Landing Page': function (browser) {
        browser
            .url('https://www.binance.com/en')
            .maximizeWindow()
            .waitForElementVisible('.gBOGuU') // Wait for screen to load
            .assert.containsText('.gBOGuU', 'View more markets'); //// Verify the desired text on the link 

        browser
            .waitForElementVisible('.css-16c137o', "login button") //Verify that login button is present
            .expect.element('a.css-ciasso').to.be.enabled; //Verify that login link is present and enabled

        browser
            .useXpath() //allows nightwatch to use Xpath
            .assert.containsText('.//button/span[text()="Register"]', "Register", "Verify Register Button on landing page"); // Verify that Register button is present               
    },

    'Pair Trading View Page': function (browser) {
        browser
            .useCss() //allows nightwathc to use Css
            .click('.gBOGuU', function (result) {
                console.log('Click result', result);
            });
        browser.assert.urlContains('markets', 'URL for the Market View Page'); //Verify page navigation
        browser
            .useXpath()
            .click('//div/strong[text()="ETH"]'); //click on ETH/BTC button
        browser.assert.urlContains('trade/ETH_BTC', 'URL for the Pair Trading View Page'); //Verify page navigation
        browser.assert.visible('//a[text()="Ethereum"]', "Ethereum link near the Ticker area"); //Verify Ethereum link is present
        browser.assert.elementPresent('//div[@class="contract-trigger"]', "Contract Trigger Table"); // Verify Contract Trigger table on left side of screen
        browser.assert.elementPresent('//div[@role="menu"]', "Trading View chart menu"); // Verify Trading View chart menu is present on Pair trading view screeb
        browser.assert.elementPresent('//li[@role="menuitem" and text() = "TradingView"]', "Trading View button"); // Verify Trading View button is present on Pair trading view
        browser.assert.elementPresent('//div[contains(@class,"chartContainer")]/canvas', "Trading Chart"); //Verify Trading chart
        browser.assert.visible('//*[@id="TabbedOrderFormsMargin-a-exchange"]', "Exchange Tab"); //Verify Exchange Tab
        browser.assert.visible('//*[@id="TabbedOrderFormsMargin-a-margin"]', "Margin Tab"); //Verify Margin Tab
        browser.assert.visible('//*[@id="TabbedOrderFormsMargin-a-exchangeLimit"]', "Limit Label"); //Verify limit tab
        browser.assert.visible('//*[@id="TabbedOrderFormsMargin-a-exchangeMarket"]', "Market Label"); //Verify Market tab
        browser.assert.visible('//li[@data-name="oco"]', "Stop limit list").click();// Verify stop limit list items
        browser.assert.visible('//li[@data-name="oco"][@mode="vertical"]', "Stop limit list items");
        browser.assert.visible('//li[@data-name="stop-limit"][@mode="vertical"]', "Stop limit list items");
        const value1 = browser.getValue('//*[@id="FormRow-BUY-price"]', "Buy Price limit input default value");  //Buy Price limit input boxes
        const value2 = browser.getValue('//*[@id="FormRow-SELL-price"]', "Sell Price limit input default value");  //Sell Price limit input boxes
        var assert = require("assert");
        assert.equal(value1, value2);
        browser.assert.visible('//*[@id="FormRow-BUY-quantity"]', "Amount input box"); //Amount input box
    }
}