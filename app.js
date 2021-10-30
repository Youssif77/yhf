const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Holla");
});

app.get("/demo", (req, res) => {
  res
    .set("X-CUSTOM-HEADER", "Bang Bang!")
    .status(418)
    .send("LOOK AT NETWORK TAP");
});

app.listen(PORT, () => console.log(`running on port${PORT}...`));
