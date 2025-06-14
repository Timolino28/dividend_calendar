const express = require("express");
const router = express.Router();
const { getDCFData } = require("../controllers/dcfController");

router.get("/", getDCFData);

module.exports = router;
