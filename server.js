const express = require("express");
const path = require("path");
const bodyPaprser = require("body-parser");

const app = express();

app.use(bodyPaprser.json());

app.use(express.static(path.join(__dirname, "client", "index.html")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server is listening on PORT ", PORT));
