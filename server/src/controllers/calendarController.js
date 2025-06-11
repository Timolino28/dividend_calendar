const axios = require("axios");
require("dotenv").config();

exports.getCalendarData = async (req, res) => {
  try {
    const apiKey = process.env.API_KEY;

    const url = `https://financialmodelingprep.com/stable/dividends-calendar?apikey=${apiKey}`;
    const response = await axios.get(url);

    const data = response.data;

    //Finde das neueste Datum in der Liste
    const dates = data.map((item) => new Date(item.date));
    const maxDate = new Date(Math.max(...dates));

    //Berechne das Startdatum (1 Monat zurück)
    const minDate = new Date(maxDate);
    minDate.setMonth(minDate.getMonth() - 1);

    //Filtere Einträge, die im gewünschten Zeitfenster liegen
    const filtered = data.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= minDate && itemDate <= maxDate;
    });

    res.json(filtered);
  } catch (error) {
    console.error("Fehler beim Abrufen der Kalenderdaten", error.message);
    res.status(500).json({ error: "Fehler beim Abrufen der Kalenderdaten" });
  }
};
