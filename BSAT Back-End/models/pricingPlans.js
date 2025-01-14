import mongoose, { Document, Schema } from "mongoose";


const schema = new Schema(
  {
    planName: {
      type: String,
      required: [true, "Plan Name is required"],
    },
    description: {
      type: String,
      required: [true, "Plan Name is required"],
    },
    price: {
      type: Number,
    },

    planType: {
      type: String,
      enum: ["pro", "enterprise", "community"],
    },
    features: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const PricingPlan = mongoose.model("PricingPlan", schema);

export default PricingPlan;
