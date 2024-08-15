import express from "express";
import {
  getAllProducts,
  getProductbyId,
  addProducts,
  updateProductsById,
  deleteProductById,
} from "./../controllers/product.controller.js";

const router = express.Router();
router.get("/getAllProducts", getAllProducts);

router.get("/getProductbyId/:id", getProductbyId);

router.post("/addProducts", addProducts);

router.put("/updateProductById/:id", updateProductsById); 

router.delete("/deleteProductById/:id", deleteProductById);

export default router;
