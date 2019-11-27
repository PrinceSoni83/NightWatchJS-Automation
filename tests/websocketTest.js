module.exports = {
    '@tags': ['api'],
    'Binance WebSocket API test': function (browser) {

        const api = require('binance');
        const binanceWS = new api.BinanceWS(true);

        // binanceWS.onDepthUpdate('ETHBTC', (data) => {
        //     console.log(data);
        // });


        //Asynchronous API expample to get the data
        // var baseUrl = "https://api.binance.com";
        // var query = 'GET /api/v3/ping';
        // var url = baseUrl + query;
        // var ourRequest = new XMLHttpRequest();
        // ourRequest.open('GET',url,true);
        // ourRequest.onload = function(){
        //     console.log(ourRequest.responseText)
        // }
        // ourRequest.send();
    }
}
