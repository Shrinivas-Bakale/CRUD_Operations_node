const Product = require("./../models/product.model.js");

const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

const getProductbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findById(id);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addProducts = async (req, res) => {
  try {
    const product = Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProductsById = async (req, res) => {
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
};

const deleteProductById = async (req, res) => {
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
};

module.exports = {
  getAllProducts,
  getProductbyId,
  addProducts,
  updateProductsById,
  deleteProductById
};
