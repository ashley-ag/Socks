const router = require("express").Router();
const stockController = require("../../controllers/stockController");

router.route("/").get(stockController.findAll).post(stockController.create);

// router
//   .route("/addstocks")
//   .get(stockController.findAll)
//   .post(stockController.create);

router
  .route("/:id")
  .get(stockController.findById)
  .delete(stockController.remove);

module.exports = router;

// router.post("/api/stocks", ({ body }, res) => {
//   Stock.create(body)
//     .then(dbStock => {
//       res.json(dbStock);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.get("/api/stocks", (req, res) => {
//   Stock.find({})
//     .then(dbStock => {
//       res.json(dbStock);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// module.exports = router;
