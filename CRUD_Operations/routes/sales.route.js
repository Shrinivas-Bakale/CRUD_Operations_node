import {
  getAllSales,
  getTotalSalesByProductId,
  salesByName,
  truncateSalesCollection,
} from "../controllers/sales.controller.js";
import express from "express";

const router = express.Router();

router.get("/", getAllSales);

router.get("/getTotalSalesByProductId/:id", getTotalSalesByProductId);

router.post("/salesByName", salesByName);

router.delete("/truncateSalesCollection", truncateSalesCollection);

export default router;
