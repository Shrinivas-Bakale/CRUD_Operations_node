import express from "express";
import productRoute from "./routes/product.route.js";
import salesRoute from "./routes/sales.route.js";

import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);
app.use("/api/sales", salesRoute);

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
