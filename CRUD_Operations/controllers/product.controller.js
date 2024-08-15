import Product from "./../models/product.model.js";
import Sales from "../models/sales.model.js";

export async function getAllProducts(req, res) {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getProductbyId(req, res) {
  try {
    const { id } = req.params;
    const products = await Product.findById(id);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}



export async function addProducts(req, res) {
  const { name, quantity, price } = req.body;

  try {
    const productDoc = await Product.findOne({ name });
    console.log(productDoc, "product doc");
    if (productDoc) {
      return res.status(400).json({
        success: false,
        msg: "Product already available",
        productDoc,
      });
    }

    const np = new Product();
    np.name = name;
    np.quantity = quantity;
    np.price = price;

    let newProductDoc = await np.save();

    // const product = await Product.create({
    //     name,
    //     quantity,
    //     price
    // });
    res.status(200).json(newProductDoc);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Product name must be unique" });
    }
    res.status(500).json({ message: error.message });
  }
}

export async function updateProductsById(req, res) {
  try {
    const { id } = req.params;
    const products = await Product.findByIdAndUpdate(id, req.body);

    if (!products) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteProductById(req, res) {
  try {
    const { id } = req.params;
    const products = await Product.findByIdAndDelete(id, req.body);

    if (!products) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
