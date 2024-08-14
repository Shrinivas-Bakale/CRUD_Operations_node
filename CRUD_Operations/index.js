const express = require("express");
const app = express();
const Product = require("./models/product.model.js");
const mongoose = require("mongoose");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from node API Helloo");
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.delete("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({message:"Product Deleted successfully"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
