import React from "react";
import styled from "styled-components";
import StockCard from "./StockCard";

const PersonalStocks = () => {
  return (
    <PStocks>
      <StockCard />
      <StockCard />
      <StockCard />
      <StockCard />
      <StockCard />
      <StockCard />
      <StockCard />
      <StockCard />
      <StockCard />
      <StockCard />
      <StockCard />
      <StockCard />
      <StockCard />
      <StockCard />
      <StockCard />
    </PStocks>
  );
};

const PStocks = styled.div`
  max-height: 25vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
  overflow: scroll;
`;

export default PersonalStocks;
