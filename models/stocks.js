const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personalStockSchema = new Schema({
  id: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a ticker",
  },
  units: {
    type: Number,
    required: "Enter unit amount",
  },
});

const Stock = mongoose.model("Stock", personalStockSchema);

module.exports = Stock;
