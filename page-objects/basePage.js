module.exports = { 
    url: 'https://www.binance.com/en',
    elements: {
        viewMoreMarketsLink: '.gBOGuU',
        loginLink: {
            selector: '//a[contains(@href,"/login")]',
            locateStrategy: 'xpath'
        },
        registerButton: {
            selector: './/button/span[text()="Register"]',
            locateStrategy: 'xpath'
        },
        ethButton: {
            selector: '//div/strong[text()="ETH"]',
            locateStrategy: 'xpath'
        },
        etheremLink: {
            selector: '//a[text()="Ethereum"]',
            locateStrategy: 'xpath'
        },
        contractTriggerTable: {
            selector: '//div[@class="contract-trigger"]',
            locateStrategy: 'xpath'
        },
        tradeViewChartMenu: {
            selector: '//div[@role="menu"]',
            locateStrategy: 'xpath'
        },
        tradeViewButton: {
            selector: '//li[@role="menuitem" and text() = "TradingView"]',
            locateStrategy: 'xpath'
        },
        tradingChart: {
            selector: '//div[contains(@class,"chartContainer")]/canvas',
            locateStrategy: 'xpath'
        },
        exchangeTab: {
            selector: '//*[@id="TabbedOrderFormsMargin-a-exchange"]',
            locateStrategy: 'xpath'
        },
        marginTab: {
            selector: '//*[@id="TabbedOrderFormsMargin-a-margin"]',
            locateStrategy: 'xpath'
        },
        limitLabel: {
            selector: '//*[@id="TabbedOrderFormsMargin-a-exchangeLimit"]',
            locateStrategy: 'xpath'
        },
        marketLabel: {
            selector: '//*[@id="TabbedOrderFormsMargin-a-exchangeMarket"]',
            locateStrategy: 'xpath'
        },
        stopLimitList: {
            selector: '//li[@data-name="oco"]',
            locateStrategy: 'xpath'
        },
        ocoListItem: {
            selector: '//li[@data-name="oco"][@mode="vertical"]',
            locateStrategy: 'xpath'
        },
        stopLimitItem: {
            selector: '//li[@data-name="stop-limit"][@mode="vertical"]',
            locateStrategy: 'xpath'
        },
        buyPriceInput: {
            selector: '//*[@id="FormRow-BUY-price"]',
            locateStrategy: 'xpath'
        },
        sellPriceInput: {
            selector: '//*[@id="FormRow-SELL-price"]',
            locateStrategy: 'xpath'
        },
        amountInput: {
            selector: '//*[@id="FormRow-BUY-quantity"]',
            locateStrategy: 'xpath'
        },
        totalInput: {
            selector: '//*[@id="FormRow-BUY-total"]',
            locateStrategy: 'xpath'
        },
        loginOrRegisterToTradeButton: '#trade-orderForm-a-BUYregister',
        createAfreeAccLbl: {
            selector: '//h2[text()="Create a free account"]',
            locateStrategy: 'xpath'
        }
        }
        
    }
    commands: [{
        enterText(selector,value,callback){
            return this
                .setValue(selector,value,callback);
        },
        
    }]
