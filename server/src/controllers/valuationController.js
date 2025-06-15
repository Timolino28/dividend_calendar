const axios = require("axios");
require("dotenv").config();

exports.getValuationData = async (req, res) => {
  try {
    const apiKey = process.env.API_KEY;
    const symbol = req.query.symbol || "AAPL";

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
      date: financialRatioData[0].date,
      year: financialRatioData[0].fiscalYear,
      period: financialRatioData[0].period,
      dcf: dcfData[0].dcf.toFixed(2),
      priceToEarningsRatio:
        financialRatioData[0].priceToEarningsRatio.toFixed(2),
      priceToBookRatio: financialRatioData[0].priceToBookRatio.toFixed(2),
      debtToEquityRatio: financialRatioData[0].debtToEquityRatio.toFixed(2),
    };

    res.json(result);
  } catch (error) {
    console.error("Fehler beim Abrufen der DCF-Daten", error.message);
    res.status(500).json({ error: "Fehler beim Abrufen der DCF-Daten" });
  }
};
