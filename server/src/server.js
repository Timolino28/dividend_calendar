require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

//Middleware
app.use(cors());

//Routen importieren
const calendarRoute = require("./routes/calendarRoute");
const stockRoute = require("./routes/stockRoute");
const valuationRoute = require("./routes/valuationRoute");

//Routen registrieren
app.use("/api/calendar", calendarRoute);
app.use("/api/stock", stockRoute);
app.use("/api/valuation", valuationRoute);

app.listen(PORT, () => {
  console.log(`Server läuft auf PORT: ${PORT}`);
});
