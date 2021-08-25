// import React, {Component} from 'react';
import React from 'react'
import CoinDetails from './CoinDetails';
import CoinDetailsCombined from './CoinDetailsCombined';
import '../Stylesheet/styles.css'

//class CoinTable extends Component{

const Sum = (...arr) => {
    var total = 0;
    arr.forEach((x) => {
        total += parseFloat(x)
    })
    return total.toFixed(2);
};

const CoinTable = (props) => {
    //render(){
        const coins = props.coins;
        const showComb = props.showComb
        const coinComb = [];
        coins.reduce((res,value) => {
            if(!res[value.coinname]){
                res[value.coinname] = {
                    coinname : value.coinname,
                    quantity : 0,
                    investedamount : 0,
                    currentamount : 0,
                    liveprice : value.liveprice,
                    abbr: value.abbr
                }
                coinComb.push(res[value.coinname])
           }
           res[value.coinname].quantity += value.quantity
           res[value.coinname].investedamount += value.investedamount
           res[value.coinname].currentamount += (value.quantity * value.liveprice)
           return res;
       }, {})    

       coinComb.sort((a,b) =>{
           return (((b.currentamount - b.investedamount)/b.investedamount) - (((a.currentamount - a.investedamount)/a.investedamount)))
       })

        const totalInvestedAmount = Sum(...(coins.map((coin) => (coin.investedamount))))
        const totalWalletAmount = Sum(...(coins.map((coin) => (coin.quantity * coin.liveprice))))
        const profitLoss = (((totalWalletAmount - totalInvestedAmount)/totalInvestedAmount)*100)
        const difference = (totalWalletAmount - totalInvestedAmount)


        return (
            <div>
                    <div id="divTotal">
                        <table className = "table table-bordered">
                            <thead>
                                <tr>
                                    <th>Total Investment Amount</th>
                                    <th>Wallet Amount</th>
                                    <th>Profit/Loss</th>
                                    <th>Difference</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>${totalInvestedAmount}</td>
                                    <td>${totalWalletAmount}</td>
                                    <td>{profitLoss.toFixed(2)}%</td>
                                    <td>${difference.toFixed(2)}</td>
                                </tr>
                            
                            </tbody>
                        </table>
                        <div className="d-flex justify-content-between">
                            <button className="btn" onClick= {() => {props.toggleTab()}}>Combined / Segregate</button>
                            {/* <button className="btn" onClick= {() => {this.props.toggleTab()}}>Segregate</button> */}
                            <label className="screen-label">{showComb === true ? 'Combined View' : 'Segregated View'}</label>
                            <button className="btn refresh-btn" onClick = {() => {props.onRefresh()}}>Refresh</button>    
                        </div>
                    </div>

                    <div>
                    {showComb && <div id="divComb">
                    <table className = "table">
                        <thead>
                            <tr>
                                <th>Coin Name</th>
                                <th>Quantity</th>
                                <th>Amt Inv'd</th>
                                <th>Current Value</th>
                                <th>P/L</th>
                                <th>Difference</th>
                                <th>Live Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                coinComb.map((coinc, index) => <CoinDetailsCombined row =  {coinc} key = {index} />)
                            }
                        </tbody>
                    </table>

                    </div>}

                    {!showComb && <div id="divSeg">
                    <table className = "table">
                        <thead>
                            <tr>
                                <th>Coin Name</th>
                                {/* <th>Symbol</th> */}
                                <th>Quantity</th>
                                <th>Order Price</th>
                                <th>Amt Inv'd</th>
                                <th>Current Value</th>
                                <th>P/L</th>
                                <th>Difference</th>
                                <th>Live Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                // coins.map((row, index) => <CoinDetails row =  {row} key = {index} />)
                                coins.map((coin, index) => <CoinDetails row =  {coin} key = {index} />)
                            }
                        </tbody>
                    </table>
                    </div>}
                </div>
            </div>
        )
    //}
}


export default CoinTable
