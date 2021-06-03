import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StockRow2 from "./StockRow2";
import API from "../utils/API";

const PersonalStocks = () => {
  const [homeStocks, setHomeStocks] = useState([]);

  // load all stocks and set them to stocks
  useEffect(() => {
    loadStocks();
  }, []);

  function loadStocks() {
    API.getStocks()
      .then((res) => setHomeStocks(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    homeStocks.map((stock) => console.log(stock));
  });

  return (
    <PStocks>
      {homeStocks.map((stock) => (
        <StockRow2 key={stock._id} ticker={stock.name} />
      ))}
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
