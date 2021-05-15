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
  width: 100%;
  height: 3px;
  background: #a300a3;
  margin: 1rem 0rem;
`;

export default Home;
