// import React, {Component} from 'react';
import React from 'react'

// class CoinDetailsCombined extends Component{
    
    // render(){

const CoinDetailsCombined = (props) => {
    const row = props.row;
    const profitLoss = (((row.currentamount) - (row.investedamount))/ (row.investedamount)) * 100;
    const difference = ((row.currentamount)  - (row.investedamount))
    const liveprice = parseFloat(row.liveprice);
    const baseIcon =    `https://api.coinicons.net/icon/${row.abbr.toLowerCase()}/32x32`;

    return(
        <tr>
            <td>
                <img src={baseIcon} className="icon" /> 
                <div className="flex-column-">
                <span><strong>{row.abbr}</strong>  <p className="p-curr p-coin"> / USD</p></span>
                <p className="p-coin">{row.coinname}</p>
                </div>
            </td>
            <td>{parseFloat(row.quantity).toFixed(5)}</td>
            <td>${parseFloat(row.investedamount).toFixed(2)}</td>
            <td>${parseFloat(row.currentamount).toFixed(2)}</td>
            <td>
                {profitLoss.toFixed(2)}%
            </td>
            <td>
                ${difference.toFixed(2)}
            </td>
            <td><span>${liveprice.toFixed(7)}</span></td>
        </tr>
        
    )
}
//}

export default CoinDetailsCombined