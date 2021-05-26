const router = require("express").Router();
const Stock = require("../models/stocks.js");

router.post("/api/stocks", ({ body }, res) => {
  Stock.create(body)
    .then(dbStock => {
      res.json(dbStock);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/stocks", (req, res) => {
  Stock.find({})
    .then(dbStock => {
      res.json(dbStock);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;