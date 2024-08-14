import { getTotalSalesByProductId } from "../controllers/sales.controller.js";
import express from "express";

const router = express.Router();

router.get("/getTotalSalesByProductId/:id", getTotalSalesByProductId);

export default router;
