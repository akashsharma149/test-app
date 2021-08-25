import React, {Component} from 'react';

class NewPrice extends Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault();
        const ddl = document.querySelector('#coinList');
        const CoinName = ddl.value;
        const CurrPrice = event.target.elements.currPrice.value;

        this.props.onChangeCurrPrice(CoinName, CurrPrice);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <select id="coinList">
                        <option value="Bitcoin">Bitcoin</option>
                        <option value="Etherum">Etherum</option>
                        <option value="Cardano">Cardano</option>
                        <option value="Polkadot">Polkadot</option>
                        <option value="Chainlink">Chainlink</option>
                    </select>
                    <input type="text" placeholder="Enter Current Price" name ="currPrice"></input>
                    <button>Update</button>
                </form>
            </div>
        )
    }
}

export default NewPrice