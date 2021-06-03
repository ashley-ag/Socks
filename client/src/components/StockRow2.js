import React, { Component } from "react";
import { stock } from "../resources/stock2.js";
import styled from "styled-components";
import { motion } from "framer-motion";

import API from "../utils/API";

class StockRow2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        price: null,
        date: null,
        time: null,
        data: null,
        dollar_change: null,
        percent_change: null,
      },
      stocks: [],
    };
  }

  changeStyle() {
    return {
      color: this.state.data.dollar_change > 0 ? "green" : "red",
    };
  }

  applyData(data) {
    this.setState({
      data: data,
    });
  }

  componentDidMount() {
    stock.latestPrice(this.props.ticker, this.applyData.bind(this));
  }

  loadStocks() {
    API.getStocks().then((res) =>
      res
        .json()
        .then((data) => this.setState({ stocks: data }))
        .catch((err) => console.log(err))
    );
  }

  //Commenting out deletestock for now trying to use it on personalstocks.js instead

  // deleteStock(id) {
  //   API.deleteStock(id)
  //     .then((res) => this.loadStocks())
  //     .catch((err) => console.log(err));
  // }

  render() {
    return (
      <StyledDiv>
        <li className="list-group-item">
          <b>{this.props.ticker}</b> ${this.state.data.price}
          <span className="change" style={this.changeStyle()}>
            {this.state.data.dollar_change}
            {this.state.data.percent_change}
          </span>
        </li>
      </StyledDiv>
    );
  }
}

const StyledDiv = styled(motion.div)`
  background: white;
  border-radius: 15px;
  width: 200px;
  height: 100px;
  margin: 1rem;
  font-size: 1.4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  li {
    list-style: none;
  }
`;

export default StockRow2;
