import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";
import MarketChart from "../components/MarketChart";
import MarketStocks from "../components/MarketStocks";

const Markets = () => {
  return (
    <StyledTitle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h2>Popular Market Stocks</h2>
      <MarketChart />
      <Line id="line"></Line>
      <MarketStocks />
    </StyledTitle>
  );
};

const Line = styled.div`
  width: 80%;
  height: 2px;
  background: #a300a3;
  margin: 1rem auto;
`;

const StyledTitle = styled(motion.div)`
  h2 {
    color: white;
    min-height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Markets;
