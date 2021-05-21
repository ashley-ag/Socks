import React, { Component } from 'react';
import { stock } from '../resources/stock2.js';

class StockRow2 extends Component {

    constructor(props) {
        super (props)
        this.state = {
            data: {}
        }
    }

    changeStyle() {
        return {
            color: (this.state.dollar_change > 0) ? 'green' : 'red',
            fontSize: '0.8rem',
            marginLeft: '5px'
        }
   
    }

    applyData(data) {
        
        this.setState({
            
            data:data
        });
        
    }

    componentDidMount(){
        stock.latestPrice(this.props.ticker, this.applyData.bind(this))
        
    }

    render() {
        return (
            <li className='list-group-item'>
                <b>{this.props.ticker}</b> ${this.state.data.price}
                <span className='change' style={this.changeStyle()}>

                    {this.state.dollar_change}
                    {this.state.percent_change}
                </span>
            </li>
            
        )
    }
}

export default StockRow2;