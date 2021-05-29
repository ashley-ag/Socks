import React, { useState, useEffect } from "react";
import HomeChart from "../components/HomeChart";
import PersonalStocks from "../components/PersonalStocks";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const Home = () => {
  return (
    <HomePage
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <HomeChart />
      <Line id="line"></Line>
      <PersonalStocks />
    </HomePage>
  );
};

const HomePage = styled(motion.div)`
  *::-webkit-scrollbar {
    width: 5px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
  }
`;

const Line = styled.div`
  width: 80%;
  height: 2px;
  background: #a300a3;
  margin: 1rem auto;
`;

export default Home;
