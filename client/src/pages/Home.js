import React, { useState, useEffect } from "react";
import HomeChart from "../components/HomeChart";
import PersonalStocks from "../components/PersonalStocks";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";
import API from "../utils/API";
import NoStocks from "../components/NoStocks";

const Home = () => {
  const [stocks, setStocks] = useState([]);

  //Load all stocks and store them with setStocks
  useEffect(() => {
    loadStocks();
  }, []);

  // load all stocks and set them to stocks
  function loadStocks() {
    API.getStocks()
      .then((res) => setStocks(res.data))
      .catch((err) => console.log(err));
  }
  console.log(stocks);
  return (
    <HomePage
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h2>Personal Stocks</h2>
      {stocks.length === 0 ? <NoStocks /> : <HomeChart />}
      <Line id="line"></Line>
      <PersonalStocks />
    </HomePage>
  );
};

const HomePage = styled(motion.div)`
  h2 {
    color: white;
    min-height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
