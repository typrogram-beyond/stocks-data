const apiKey = 'ask-your-tech-lead-for-the-API-key'
// Set the stock exchange we want to see
let exchange = 'US'
// The current stock symbol we want metrics for
let currentSymbol = 'AAPL'

function getMarketStatus() {

    fetch('https://finnhub.io/api/v1/stock/market-status?exchange='
        + encodeURI(exchange) + '&token=' + encodeURI(apiKey))
      .then(response => response.json())
      .then(response => {
          // This is where you populate the html elements and
          // element attributes with values from the result;
          
      })
      .catch(err => console.error(err));
}

function getListOfCompanyStockSymbols() {
    
    fetch('https://finnhub.io/api/v1/stock/symbol?exchange='
        + encodeURI(exchange) + '&token=' + encodeURI(apiKey))
      .then(response => response.json())
      .then(response => {
          // This is where you populate the html elements and
          // element attributes with values from the result;
          
      })
      .catch(err => console.error(err));
}

function getMetricsForSymbol() {

    fetch('https://finnhub.io/api/v1/stock/metric?symbol='
        + encodeURI(currentSymbol) + '&metric=all' + '&token=' + encodeURI(apiKey))
      .then(response => response.json())
      .then(response => {
          // This is where you populate the html elements and
          // element attributes with values from the result;
          
      })
      .catch(err => console.error(err));
}

function getQuoteForSymbol() {
    // Documentation: https://finnhub.io/docs/api/quote

    fetch('https://finnhub.io/api/v1/quote?symbol='
        + encodeURI(currentSymbol) + '&token=' + encodeURI(apiKey))
      .then(response => response.json())
      .then(response => {
          // This is where you populate the html elements and
          // element attributes with values from the result;
          
      })
      .catch(err => console.error(err));
}