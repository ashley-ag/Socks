import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { stock } from "../resources/stock.js";
import StockRow2 from "./StockRow2";
import API from "../utils/API";

const StockList = () => {
  const [lastTradingDate, setLastTradingDate] = useState({});

  useEffect(() => {
    stock.getLastTradingDate().then((data) => {
      setLastTradingDate({
        lastTradingDate: data[0].date,
      });
    });
  }, []);

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
};

export default StockList;
