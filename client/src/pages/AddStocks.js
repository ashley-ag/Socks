import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const AddStocks = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h2>AddStocks</h2>
    </motion.div>
  );
};

export default AddStocks;
