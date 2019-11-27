# NightWatchJS
    Repo for NightWatchJS Test Automation

# Highlights
    End to End testing for web application using NightWatchJS
    Page Objects Design Pattern
    Continuous Testing by continuous code integration using CI tools
    HTML Reporting with Screenshot of test results

# Tool Used:
    VSCode
    NightWatchJS
    Selenium Server
    Jenkins
    ESLint
    Binance API

# Installation
    npm install nightwatch
    npm install chromedriver --save-dev
    npm install selenium-server --save-dev

# Configuration
    Please refer nightwatch.conf.json and package.json

# Run the tests
    npm test
    npm test -- --tag @customtags
    
# Genrate the HTML Report
    npm install nightwatch-html-reporter
    run the below cammand:
    nightwatch-html-reporter -d ~/NightWatchPageObjects/tests_output/reports

# CI Pipeline with Jenkins
    #Pipeline Script (select the definition in the pipeline configure section)

    node('master'){
        git 'https://github.com/PrinceSoni83/NightWatchJS-Automation'

        bat label: 'Install NPM Package', script: 'npm install'

        bat label: 'Run test', script: 'npm test'
    }

    }