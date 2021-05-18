import React from "react";
import styled from "styled-components";
import Line from "./Line";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSocks } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const Hero = ({ handleLogout }) => {
  return (
    <StyledSec
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="hero"
    >
      <nav>
        <h2>
          Socks <FontAwesomeIcon icon={faSocks} />
        </h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <Line />
    </StyledSec>
  );
};

const StyledSec = styled(motion.section)`
  min-height: 63vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  overflow: hidden;
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      margin: 3rem;
    }
    button {
      font-family: "Roboto", sans-serif;
      font-size: 1.2rem;
      padding: 1rem 2rem;
      background: white;
      border: none;
      border-radius: 15px;
      color: #a300a3;
      transition: all ease 0.5s;
      cursor: pointer;
      &:hover {
        background: #a300a3;
        color: white;
      }
    }
  }
`;

export default Hero;
