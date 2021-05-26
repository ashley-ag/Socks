const router = require("express").Router();
const stockRoutes = require("./api");

router.use("/api", stockRoutes);

module.exports = router;
