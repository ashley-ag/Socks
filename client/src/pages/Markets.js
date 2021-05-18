import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const Markets = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h2>Markets</h2>
    </motion.div>
  );
};

export default Markets;
