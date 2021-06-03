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

  function deleteStock(id) {
    API.deleteStock(id)
      .then((res) => loadStocks())
      .catch((err) => console.log(err));
  }

  return (
    <PStocks>
      {homeStocks.map((stock) => (
        <div>
          <StockRow2 key={stock._id} ticker={stock.name} />
          <button onClick={() => deleteStock(stock._id)}>X</button>
        </div>
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
  div {
    position: relative;
  }
  button {
    position: absolute;
    top: 16px;
    right: 16px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    padding: 0.4rem;
    border: none;
    background: red;
    color: white;
    cursor: pointer;
    transition: all ease 0.5s;
    border: solid 1px red;
    &:hover {
      background: white;
      color: red;
    }
  }
`;

export default PersonalStocks;
