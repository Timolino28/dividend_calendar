const express = require("express");
const router = express.Router();
const { getValuationData } = require("../controllers/valuationController");

router.get("/", getValuationData);

module.exports = router;
