const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductbyId,
  addProducts,
  updateProductsById,
  deleteProductById,
} = require("../controllers/product.controller.js");

router.get("/", getAllProducts);

router.get("/:id", getProductbyId);

router.post("/", addProducts);

router.put("/:id", updateProductsById);

router.delete("/:id", deleteProductById);

module.exports = router;
