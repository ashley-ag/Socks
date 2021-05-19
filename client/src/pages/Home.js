import React from "react";
import HomeChart from "../components/HomeChart";
import PersonalStocks from "../components/PersonalStocks";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const Home = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <HomeChart />
      <Line id="line"></Line>
      <PersonalStocks />
    </motion.div>
  );
};

const Line = styled.div`
  width: 80%;
  height: 2px;
  background: #a300a3;
  margin: 1rem auto;
`;

export default Home;
