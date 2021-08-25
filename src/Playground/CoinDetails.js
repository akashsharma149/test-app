// import React, {Component} from 'react';
import React from 'react'

//class CoinDetails extends Component{
    //row.abbr.toLowerCase()

    //render(){
const CoinDetails = (props) => {
    const row = props.row;
    const profitLoss = ((((row.quantity) * (row.liveprice)) - (row.investedamount))/ (row.investedamount)) * 100;
    const difference = ((row.quantity) * (row.liveprice)) - (row.investedamount)
    const liveprice = parseFloat(row.liveprice);
    const baseIcon =    `https://api.coinicons.net/icon/${row.abbr.toLowerCase()}/32x32`;
    
    return(
        <tr>
            <td>
                <img src={baseIcon} className="icon" /> 
                <div className="flex-column">
                <span><strong>{row.abbr}</strong>  <p className="p-curr p-coin"> / USD</p></span>
                <p className="p-coin">{row.coinname}</p>
                </div>
            </td>
            {/* <td>{row.symbol}</td> */}
            <td>{row.quantity}</td>
            <td>{row.orderprice}</td>
            <td>${parseFloat(row.investedamount).toFixed(2)}</td>
            <td>${((row.quantity) * (row.liveprice)).toFixed(5)}</td>
            <td>
                {profitLoss.toFixed(2)}%
            </td>
            <td>
                ${difference.toFixed(2)}
            </td>
            <td>${liveprice.toFixed(7)}</td>
        </tr>
        
    )
    //}
}

export default CoinDetails