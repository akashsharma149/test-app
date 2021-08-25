import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './Playground/Main';

const Coins = [
  {"coinname": "Bitcoin", "abbr": "BTC", "symbol": "BTCUSDT", "quantity" : 0.001880, "orderprice" : 34300, "investedamount" : 65.00, "liveprice" : 0.00, "up" : false},
  {"coinname": "Etherum", "abbr": "ETH", "symbol": "ETHUSDT","quantity" : 0.02564, "orderprice" : 1950, "investedamount" : 50.00, "liveprice" : 0.00, "up" : false},
  {"coinname": "Etherum", "abbr": "ETH", "symbol": "ETHUSDT","quantity" : 0.04878, "orderprice" : 2050, "investedamount" : 100.00, "liveprice" : 0.00, "up" : false},
  {"coinname": "Etherum", "abbr": "ETH", "symbol": "ETHUSDT","quantity" : 0.02380, "orderprice" : 2100, "investedamount" : 50.00, "liveprice" : 0.00, "up" : false},
  {"coinname": "Etherum", "abbr": "ETH", "symbol": "ETHUSDT","quantity" : 0.0264, "orderprice" : 1920, "investedamount" : 50.00, "liveprice" : 0.00, "up" : false},
  {"coinname": "Etherum", "abbr": "ETH", "symbol": "ETHUSDT","quantity" : 0.0285, "orderprice" : 1750, "investedamount" : 50.00, "liveprice" : 0.00, "up" : false},
  {"coinname": "Etherum", "abbr": "ETH", "symbol": "ETHUSDT","quantity" : 0.01513, "orderprice" : 1750, "investedamount" : 35.00, "liveprice" : 0.00, "up" : false},
  {"coinname": "Etherum", "abbr": "ETH", "symbol": "ETHUSDT","quantity" : 0.0238, "orderprice" : 1750, "investedamount" : 65.00, "liveprice" : 0.00, "up" : false},
  {"coinname": "Cardano", "abbr": "ADA", "symbol": "ADAUSDT","quantity" : 40.65, "orderprice" : 1.23, "investedamount" : 50.00, "liveprice" : 0.00, "up" : false},
  {"coinname": "Cardano", "abbr": "ADA", "symbol": "ADAUSDT","quantity" : 23.27, "orderprice" : 1.48, "investedamount" : 35.00, "liveprice" : 0.00, "up" : false},
  {"coinname": "Cardano", "abbr": "ADA", "symbol": "ADAUSDT","quantity" : 9.5, "orderprice" : 1.37, "investedamount" : 13.50, "liveprice" : 0.00, "up" : false},
  {"coinname": "Cardano", "abbr": "ADA", "symbol": "ADAUSDT","quantity" : 16.6, "orderprice" : 1.61, "investedamount" : 27.00, "liveprice" : 0.00, "up" : false},
  {"coinname": "Polkadot", "abbr": "DOT", "symbol": "DOTUSDT","quantity" : 2.325, "orderprice" : 21.5, "investedamount" : 50.00, "liveprice" : 0.00, "up" : false},
  {"coinname": "Polkadot", "abbr": "DOT", "symbol": "DOTUSDT","quantity" : 1.612, "orderprice" : 18.6, "investedamount" : 30.00, "liveprice" : 0.00, "up" : false},
  {"coinname": "Polkadot", "abbr": "DOT", "symbol": "DOTUSDT","quantity" : 2.53, "orderprice" : 19.70, "investedamount" : 50.00, "liveprice" : 0.00, "up" : false},
  {"coinname": "Polkadot", "abbr": "DOT", "symbol": "DOTUSDT","quantity" : 2.94, "orderprice" : 17.00, "investedamount" : 50.00, "liveprice" : 0.00, "up" : false},
  {"coinname": "Chainlink", "abbr": "LINK", "symbol": "LINKUSDT","quantity" : 2.824, "orderprice" : 17.70, "investedamount" : 50.00, "liveprice" : 0.00, "up" : false},
  {"coinname": "Binance", "abbr": "BNB", "symbol": "BNBUSDT","quantity" : 0.567, "orderprice" : 308.53, "investedamount" : 175.00, "liveprice" : 0.00, "up" : false},
  {"coinname": "Ripple", "abbr": "XRP", "symbol": "XRPUSDT","quantity" : 36.9, "orderprice" : 0.95, "investedamount" : 35.00, "liveprice" : 0.00, "up" : false},
  {"coinname": "Ripple", "abbr": "XRP", "symbol": "XRPUSDT","quantity" : 21.5, "orderprice" : 1.25, "investedamount" : 27.00 , "liveprice" : 0.00, "up" : false},
  {"coinname": "Shiba Inu", "abbr": "SHIB", "symbol": "SHIBUSDT","quantity" : 1126126, "orderprice" : .000012, "investedamount" : 13.50 , "liveprice" : 0.00, "up" : false}
]

ReactDOM.render(
  <React.StrictMode>
    <Main coins={Coins}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
