module.exports = {
    '@tags': ['landing'],
    'Landing Page': function (browser) {

        const basepage = browser.page.basePage();

        basepage
            .navigate()
            .maximizeWindow()
            .waitForElementVisible('@viewMoreMarketsLink') // Wait for screen to load
            .assert.containsText('@viewMoreMarketsLink', 'View more markets'); //// Verify the desired text on the link 

        basepage
            .isVisible('@loginLink'); //Verify that login link is present and enabled

        basepage
            .assert.containsText('@registerButton', "Register", "Verify Register Button on landing page"); // Verify that Register button is present

        basepage.saveScreenshot('tests_output/screenshots/landing_page.png');

    }
}

