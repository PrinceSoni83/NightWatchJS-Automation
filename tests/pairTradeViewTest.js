module.exports = {
    //'@tags': ['pairTradeView'],
    'Pair Trade View Page': function (browser) {

        // ##########################  Test Case 1 ################################
        const basepage = browser.page.basePage();
        basepage
            .navigate()
            .maximizeWindow()
            .waitForElementVisible('@viewMoreMarketsLink') // Wait for screen to load
            .click('@viewMoreMarketsLink', function (result) {
                console.log('Click result', result);
            });
        basepage.assert.urlContains('markets', 'URL for the Market View Page'); //Verify page navigation
        basepage.click('@ethButton'); //click on ETH/BTC button
        basepage.assert.urlContains('trade/ETH_BTC', 'URL for the Pair Trading View Page'); //Verify page navigation
        basepage.assert.visible('@etheremLink', "Ethereum link near the Ticker area"); //Verify Ethereum link is present
        basepage.assert.elementPresent('@contractTriggerTable', "Contract Trigger Table"); // Verify Contract Trigger table on left side of screen
        basepage.assert.elementPresent('@tradeViewChartMenu', "Trading View chart menu"); // Verify Trading View chart menu is present on Pair trading view screeb
        basepage.assert.elementPresent('@tradeViewButton', "Trading View button"); // Verify Trading View button is present on Pair trading view
        basepage.assert.elementPresent('@tradingChart', "Trading Chart"); //Verify Trading chart
        basepage.assert.visible('@exchangeTab', "Exchange Tab"); //Verify Exchange Tab
        basepage.assert.visible('@marginTab', "Margin Tab"); //Verify Margin Tab
        basepage.assert.visible('@limitLabel', "Limit Label"); //Verify limit tab
        basepage.assert.visible('@marketLabel', "Market Label"); //Verify Market tab
        basepage.assert.visible('@stopLimitList', "Stop limit list").click();// Verify stop limit list items
        basepage.assert.visible('@ocoListItem', "Stop limit list items");
        basepage.assert.visible('@stopLimitItem', "Stop limit list items");
        const value1 = basepage.getValue('@buyPriceInput', "Buy Price limit input default value");  //Buy Price limit input boxes
        const value2 = basepage.getValue('@sellPriceInput', "Sell Price limit input default value");  //Sell Price limit input boxes
        var assert = require("assert");
        assert.equal(value1, value2);
        basepage.assert.visible('@amountInput', "Amount input box"); //Amount input box
        basepage.saveScreenshot('tests_output/screenshots/trade_view_page.png');

        
    }

}
