module.exports = {
    //'@tags': ['submitForm'],
    'Submit Form Page': function (browser) {

        const basepage = browser.page.basePage();

        basepage
            .navigate()
            .maximizeWindow()
            .waitForElementVisible('@viewMoreMarketsLink') // Wait for screen to load
            .click('@viewMoreMarketsLink', function (result) {
                console.log('Click result', result);
            });
        
        basepage.click('@ethButton'); //click on ETH/BTC button
        basepage.waitForElementVisible('@buyPriceInput') // Wait for screen to load
        // Calcultate the total price
        
        var expTotal;
        var total;
        basepage.getValue('@buyPriceInput', function(result){
            expTotal = result.value*100; // get the price value and multiply it with amount which is 100
            console.log("ExpTotal: ", expTotal);
          });
        basepage.setValue('@amountInput','100',browser.Keys.TAB);
        basepage.click('@totalInput');
        basepage.getValue('@totalInput', function(result){
            total = result.value;
            console.log("Total: ", total);
          });  
        var assert = require("assert");
        assert.equal(total, expTotal);

        basepage.click('@loginOrRegisterToTradeButton');
        basepage.pause(2000)
        basepage.assert.containsText('@createAfreeAccLbl', 'Create a free accoun'); // Since there is no submit button
        basepage.saveScreenshot('tests_output/screenshots/submit_formpng');
    }
}