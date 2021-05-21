import React, { Component } from 'react';
import { iex } from '../config/iex.js';
import { stock } from '../resources/stock.js';
import StockRow from './StockRow';

class StockList extends Component {

    constructor(props) {
        super (props)
        this.state = {
           
        }
    }

    componentDidMount(){
        stock.getLastTradingDate().then((data) => {
            this.setState({
                lastTradingDate: data[0].date
            })
        })
    }

    render() {
        const lastTradingDate = this.state.lastTradingDate
        return (
            <ul className='list-group list-group-flush'>
                <StockRow ticker="aapl" lastTradingDate={lastTradingDate} />
                <StockRow ticker="goog" lastTradingDate={lastTradingDate} />
                <StockRow ticker="goog" lastTradingDate={lastTradingDate} />
                <StockRow ticker="msft" lastTradingDate={lastTradingDate} />
                <StockRow ticker="tsla" lastTradingDate={lastTradingDate} />
                <StockRow ticker="bdtx" lastTradingDate={lastTradingDate} />
            </ul>
            
        )
    }
}

export default StockList;