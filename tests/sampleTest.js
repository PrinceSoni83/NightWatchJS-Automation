module.exports = {
    'Sample test case': function(browser){
        browser
            .url('https://www.binance.com/en')
            .waitForElementVisible('.gBOGuU', 6000)
            .assert.containsText('.gBOGuU',"View more markets")
            .click('a[class="css-9p6184"]')
    }
}