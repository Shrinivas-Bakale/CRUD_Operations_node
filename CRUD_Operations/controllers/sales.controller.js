import mongoose from "mongoose";
import Product from "./../models/product.model.js";
import Sales from "../models/sales.model.js";

export async function getTotalSalesByProductId(req, res) {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
