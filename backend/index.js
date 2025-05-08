const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const moodRoutes = require("./routes/playlist"); // adjust path as needed

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());

app.use("/api/mood", moodRoutes);

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
