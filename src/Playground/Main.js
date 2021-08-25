import React, {Component} from 'react';
// import NewPrice from './NewPrice';
import CoinTable from './CoinTable';
import '../App.css';
import '../Stylesheet/styles.css'


class Main extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            coins: props.coins,
            showComb: true
        }
        this.refresh = this.refresh.bind(this)
        this.toggleTab = this.toggleTab.bind(this)
    }

    componentDidMount() {
        this.refresh();
    }

    toggleTab(){
        this.setState((state) => ({
            showComb: !state.showComb
        }))

    }

     refresh() {
        fetch("https://api.binance.com/api/v3/ticker/price")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    coins: this.props.coins.map((coin) => (
                        result.forEach((x) => {
                            {if(coin.symbol === x.symbol){
                                coin.liveprice = x.price
                            }
                            // else{
                            //     return coin
                            // }
                            return coin
                        }
                        })
                    ))
                })
                setTimeout(() => this.refresh(), 1000);
            }
        )
    }

    render(){
        return <div>
            <CoinTable coins = {this.props.coins} showComb = {this.state.showComb}
            onRefresh = {this.refresh} toggleTab = {this.toggleTab}/>
        </div>
    }
}



export default Main