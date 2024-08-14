import mongoose from "mongoose";

const SalesSchema = mongoose.Schema(
  {
    productId: {
      type: Number,
      required: true,
    },
    productName: {
      type: String,
      unique: true,
    },
    totalQuantity: {
      type: Number,
    },
    totalAmount: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Sales = mongoose.model("Sales", SalesSchema);

export default Sales;
