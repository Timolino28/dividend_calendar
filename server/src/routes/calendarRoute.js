const express = require("express");
const router = express.Router();
const { getCalendarData } = require("../controllers/calendarController");

router.get("/", getCalendarData);

module.exports = router;
