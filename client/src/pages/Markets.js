import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";
import MarketChart from "../components/MarketChart";
import MarketStocks from "../components/MarketStocks";

const Markets = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <MarketChart />
      <Line id="line"></Line>
      <MarketStocks />
    </motion.div>
  );
};

const Line = styled.div`
  width: 80%;
  height: 2px;
  background: #a300a3;
  margin: 1rem auto;
`;

export default Markets;
