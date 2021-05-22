import React from "react";
import styled from "styled-components";
import StockRow2 from "./StockRow2";

const MarketStocks = () => {
  return (
    <MStocks>
      <StockRow2 ticker="aapl" />
      <StockRow2 ticker="goog" />
      <StockRow2 ticker="tsla" />
      <StockRow2 ticker="msft" />
    </MStocks>
  );
};

const MStocks = styled.div`
  max-height: 25vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
`;

export default MarketStocks;
