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

//Routen registrieren
app.use("/api/calendar", calendarRoute);
app.use("/api/stock", stockRoute);

app.listen(PORT, () => {
  console.log(`Server läuft auf PORT: ${PORT}`);
});
