import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from './Playground/Main';

const Coins = [
  {"coinname": "Bitcoin", "abbr": "BTC", "symbol": "BTCUSDT", "quantity" : 0.001880, "orderprice" : 34300, "investedamount" : 65.00, "liveprice" : 0.00, "up" : false},
  {"coinname": "Etherum", "abbr": "ETH", "symbol": "ETHUSDT","quantity" : 0.02564, "orderprice" : 1950, "investedamount" : 50.00, "liveprice" : 0.00, "up" : false},
]

ReactDOM.render(
  
    <Main coins={Coins}/>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
