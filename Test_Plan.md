Write a end-to-end test that

#1
Starts on the landing page
Click the link view more market
Clicks the ETH/BTC button leading to Pair trading view
Verifies that all important information is loaded, e.g. trading chart, limit, market, stop limit input boxes, etc. (leaving this purposefully open to see what you think makes sense to test)

Write a second end-to-end test that

#2
Starts on the Pair trading view
Enters some valid values into the Buy ETH form
Make sure the Total field has the correct value (Total = price * Amount)
Verifies that you can't submit the form since you are not logged in


Write a data last end-to-end (WebSockets) test that

#3
Starts on the Pair trading view
Under the hood, the UI uses WebSockets to fetch tickers
Verifies that the data is loaded in the tickers,
Verifies there is a consistent stream of data.
Verifies the time it takes the socket connection to connect is less than 1 second