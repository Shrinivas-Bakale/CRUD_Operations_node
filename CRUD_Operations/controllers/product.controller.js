import Product from "./../models/product.model.js";

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
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    if (error.code === 1100) {
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
