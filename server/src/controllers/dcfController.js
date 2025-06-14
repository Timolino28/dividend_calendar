const axios = require("axios");
require("dotenv").config();

exports.getDCFData = async (req, res) => {
  try {
    const apiKey = process.env.API_KEY;
    const symbol = req.query.symbol || "NVDA";

    const dcfURL = `https://financialmodelingprep.com/stable/discounted-cash-flow?symbol=${symbol}&apikey=${apiKey}`;
    const response = await axios.get(dcfURL);

    res.json(response.data);
  } catch (error) {
    console.error("Fehler beim Abrufen der DCF-Daten", error.message);
    res.status(500).json({ error: "Fehler beim Abrufen der DCF-Daten" });
  }
};
