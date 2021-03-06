const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Stock.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => console.log(err));
  },
  findById: function (req, res) {
    db.Stock.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => console.log(err));
  },
  create: function (req, res) {
    db.Stock.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => console.log(err));
  },
  remove: function (req, res) {
    db.Stock.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => console.log(err));
  },
};
