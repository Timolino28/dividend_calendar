const axios = require("axios");
require("dotenv").config();

exports.getValuationData = async (req, res) => {
  try {
    const apiKey = process.env.API_KEY;
    const symbol = req.query.symbol || "NVDA";

    //URLs vorbereiten
    const dcfURL = `https://financialmodelingprep.com/stable/discounted-cash-flow?symbol=${symbol}&apikey=${apiKey}`;
    const financialRatiosURL = `https://financialmodelingprep.com/stable/ratios?symbol=${symbol}&apikey=${apiKey}`;

    // Beide API-Calls parallel ausführen
    const [dcfRes, financialRatioRes] = await Promise.all([
      axios.get(dcfURL),
      axios.get(financialRatiosURL),
    ]);

    const dcfData = dcfRes.data;
    const financialRatioData = financialRatioRes.data;

    if (!dcfData || !financialRatioData) {
      return res.status(500).json({ error: "Ungültige Daten von der API" });
    }

    //Response zusammenbauen
    const result = {
      stockPrice: dcfData[0]["Stock Price"],
      dcf: dcfData[0].dcf,
      priceToEarningsRatio: financialRatioData[0].priceToEarningsRatio,
      priceToBookRatio: financialRatioData[0].priceToBookRatio,
      debtToEquityRatio: financialRatioData[0].debtToEquityRatio,
    };

    res.json(result);
  } catch (error) {
    console.error("Fehler beim Abrufen der DCF-Daten", error.message);
    res.status(500).json({ error: "Fehler beim Abrufen der DCF-Daten" });
  }
};
