import axios from "axios";

export default {
  // Gets all stocks
  getStocks: function () {
    return axios.get("/api/api");
  },
  // Deletes the stock with the given id
  deleteStock: function (id) {
    return axios.delete("/api/api/" + id);
  },
  // Saves a stock to the database
  saveStock: function (stockData) {
    return axios.post("/api/api", stockData);
  },
};
