import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fade } from "../animations";

const NoStocks = () => {
  return (
    <StyledDiv variants={fade}>
      <h2>Looks like you don't have any stocks added to your account!</h2>
      <p>Visit the "Add Stocks" page to add your first stock!</p>
      <Link to="/addstocks">
        <button>Add Stocks</button>
      </Link>
    </StyledDiv>
  );
};

const StyledDiv = styled(motion.div)`
  min-height: 60vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  flex-direction: column;
  button {
    margin-top: 25px;
    color: #a300a3;
    background: white;
    transition: all ease 0.5s;
    padding: 1rem 2rem;
    cursor: pointer;
    border-radius: 15px;
    border: none;
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    &:hover {
      color: white;
      background: purple;
    }
  }
  @media (max-width: 414px) {
    text-align: center;
  }
`;

export default NoStocks;
