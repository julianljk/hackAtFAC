import React, { Component } from 'react';

class CryptoList extends Component {
    constructor() {
        super();
        this.state = {
            cryptos: null 
        }
    }
    componentWillMount() {
        fetch("https://api.coinmarketcap.com/v1/ticker/")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    cryptos: json
                })
            })
    }
    render() {
        let {
            cryptos
        } = this.state; 
        return (
            cryptos && <div> 
                <ul>   
                { 
                    cryptos.map(x => (
                        <li>{`${x.name} - ${x.price_usd}`}</li> 
                    ))
                }
                </ul> 
            </div>
        );
    }
}

export default CryptoList;
