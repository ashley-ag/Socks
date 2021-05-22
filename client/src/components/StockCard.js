import React from "react";
import styled from "styled-components";

const StockCard = () => {
  return (
    <StyleDiv>
      <div>
        <h2>Nike</h2>
        <h2>$411.94</h2>
      </div>
      <p>-1.01% (-$3.29)</p>
    </StyleDiv>
  );
};

const StyleDiv = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 200px;
  height: 100px;
  border-radius: 15px;
  margin: 1rem 2rem;
  div {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`;

export default StockCard;
