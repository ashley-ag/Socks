import React, { Component } from "react";
import { iex } from "../config/iex.js";
import { stock } from "../resources/stock.js";
import StockRow2 from "./StockRow2";

class StockList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    stock.getLastTradingDate().then((data) => {
      this.setState({
        lastTradingDate: data[0].date,
      });
    });
  }

  render() {
    const lastTradingDate = this.state.lastTradingDate;
    return (
      <ul className="list-group list-group-flush">
        <StockRow2 ticker="aapl" lastTradingDate={lastTradingDate} />
        <StockRow2 ticker="goog" lastTradingDate={lastTradingDate} />
        <StockRow2 ticker="goog" lastTradingDate={lastTradingDate} />
        <StockRow2 ticker="msft" lastTradingDate={lastTradingDate} />
        <StockRow2 ticker="tsla" lastTradingDate={lastTradingDate} />
        <StockRow2 ticker="bdtx" lastTradingDate={lastTradingDate} />
      </ul>
    );
  }
}

export default StockList;
