import mongoose from "mongoose";

const SalesSchema = mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    productName: {
      type: String,
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
