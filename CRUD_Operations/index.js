const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("Hello from node API Helloo");
});

app.post("/api/products", (req, res) => {
  res.send("Data Received");
});

mongoose
  .connect(
    "mongodb+srv://admin:admin%40123@backenddb.b1dmm.mongodb.net/CRUD_Operations?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to Database!");
    app.listen(3000, () => {
      console.log("Hello world");
    });
  })
  .catch(() => {
    console.log("Connection Failed!");
  });
