const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Hello world");
});

app.get("/", (req, res) => {
  res.send("Hello from node API");
});
