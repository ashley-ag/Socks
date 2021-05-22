import React from "react";
import styled from "styled-components";
import PeronalStocks from "../components/PersonalStocks";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddStocks = () => {
  return (
    <AddStockStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h2 id="title">Add personal stocks by inputing them below.</h2>
      <div className="input">
        <input type="text" required placeholder="Add Stock" />
        <button>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <PeronalStocks />
    </AddStockStyle>
  );
};

const AddStockStyle = styled(motion.div)`
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #title {
    color: white;
    margin-top: 3rem;
  }
  .input {
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      padding: 1rem 2rem;
      border-radius: 15px;
      margin: 1rem;
      border: none;
    }
    button {
      font-family: "Roboto", sans-serif;
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
      background: white;
      border: none;
      border-radius: 15px;
      color: #a300a3;
      transition: all ease 0.5s;
      cursor: pointer;
      margin: 1rem;
      &:hover {
        background: #a300a3;
        color: white;
      }
    }
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

export default AddStocks;
