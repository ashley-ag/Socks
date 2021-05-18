import React from "react";
import HomeChart from "../components/HomeChart";
import PersonalStocks from "../components/PersonalStocks";
import styled from "styled-components";

const Home = () => {
  return (
    <div>
      <HomeChart />
      <Line id="line"></Line>
      <PersonalStocks />
    </div>
  );
};

const Line = styled.div`
  width: 80%;
  height: 2px;
  background: #a300a3;
  margin: 1rem auto;
`;

export default Home;
