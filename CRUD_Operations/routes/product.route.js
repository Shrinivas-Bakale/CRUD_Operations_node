import express from "express";
import {
  getAllProducts,
  getProductbyId,
  addProducts,
  updateProductsById,
  deleteProductById,
} from "./../controllers/product.controller.js";

const router = express.Router();
router.get("/", getAllProducts);

router.get("/:id", getProductbyId);

router.post("/", addProducts);

router.put("/:id", updateProductsById);

router.delete("/:id", deleteProductById);


export default router;
