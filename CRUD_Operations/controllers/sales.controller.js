import mongoose from "mongoose";
import Product from "./../models/product.model.js";
import Sales from "../models/sales.model.js";

export async function truncateSalesCollection(req, res) {
  try {
    await Sales.deleteMany({});
    res
      .status(200)
      .json({ message: "Sales Collection truncated Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function salesByName(req, res) {
  const { productName, totalQuantity } = req.body;

  try {
    const productDoc = await Product.findOne({ name: productName });

    if (productDoc) {
      if (productDoc.quantity >= totalQuantity) {
        let salesDoc;
        const totalAmount = productDoc.price * totalQuantity;

        try {
          salesDoc = await Sales.create({
            productId: productDoc._id,
            productName: productDoc.name,
            totalQuantity,
            totalAmount,
          });
        } catch (error) {
          if (error.code === 11000) {
            salesDoc = await Sales.findOneAndUpdate(
              { productId: productDoc._id },
              {
                $inc: {
                  totalQuantity: totalQuantity,
                  totalAmount: totalAmount,
                },
              },
              { new: true }
            );
          } else {
            throw error;
          }
        }

        // Reduce the product quantity by the quantity sold
        productDoc.quantity -= totalQuantity;
        await productDoc.save();

        return res.status(200).json(salesDoc);
      } else {
        return res.status(400).json({ message: "Out of stock" });
      }
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getAllSales(req, res) {
  try {
    const sales = await Sales.find({});
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

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
