import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 100,
    },
    address: {
      type: String,
      required: true,
      maxlength: 200,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
    },
    method: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.models && mongoose.models.Order ? mongoose.models.Order : mongoose.model("Order", OrderSchema);
