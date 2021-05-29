import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PeronalStocks from "../components/PersonalStocks";
import API from "../utils/API";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddStocks = () => {
  const [stocks, setStocks] = useState([]);
  const [formObject, setFormObject] = useState({
    name: "",
    units: 0,
  });

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

  function deleteStock(id) {
    API.deleteStock(id)
      .then((res) => loadStocks())
      .catch((err) => console.log(err));
  }

  //Updates component state when user types in the input.
  function handleNameChange(e) {
    const input = e.target.value.toUpperCase();
    setFormObject({ ...formObject, name: input });
  }

  function handleUnitsChange(e) {
    const input = e.target.value;
    setFormObject({ ...formObject, units: input });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (formObject.name && formObject.units) {
      API.saveStock({
        name: formObject.name,
        units: formObject.units,
      })
        .then(() =>
          setFormObject({
            name: "",
            units: 0,
          })
        )
        .then(() => loadStocks())
        .catch((err) => console.log(err));
    }
  }

  console.log(formObject);
  console.log(stocks);

  return (
    <AddStockStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h2 id="title">Add personal stocks by inputing them below.</h2>
      <div className="input">
        <form>
          <input
            type="text"
            required
            placeholder="Company Name"
            onChange={handleNameChange}
          />
          <input
            id="units"
            type="number"
            required
            placeholder="Units"
            onChange={handleUnitsChange}
          />

          <button onClick={(e) => handleFormSubmit(e)}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </form>
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
    form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }

    input {
      padding: 1rem 2rem;
      border-radius: 15px;
      margin: 1rem;
      border: none;
    }
    #units {
      width: 25%;
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
  @media (max-width: 1300px) {
    #title {
      text-align: center;
    }
    .input {
      flex-direction: column;
    }
  }
  @media (max-width: 320px) {
    input {
      margin: 0.5rem;
    }
  }
`;

export default AddStocks;
