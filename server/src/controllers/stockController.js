const axios = require("axios");
require("dotenv").config();

exports.getStockData = async (req, res) => {
  try {
    const apiKey = process.env.API_KEY;
    const symbol = req.query.symbol || "AAPL";

    const overviewUrl = `https://financialmodelingprep.com/stable/profile?symbol=${symbol}&apikey=${apiKey}`;
    const response = await axios.get(overviewUrl);

    res.json(response.data);
  } catch (error) {
    console.error("Fehler beim Abrufen der Kalenderdaten", error.message);
    res.status(500).json({ error: "Fehler beim Abrufen der Kalenderdaten" });
  }
};
