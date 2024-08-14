const express = require("express");
const app = express();
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from node API Helloo");
});

mongoose
  .connect(
    "mongodb+srv://admin:admin%40123@backenddb.b1dmm.mongodb.net/CRUD_Operations?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to Database!");
    app.listen(3000, () => {});
  })
  .catch(() => {
    console.log("Connection Failed!");
  });
