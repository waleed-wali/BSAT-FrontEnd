import mongoose, { Document, Schema } from "mongoose";

const schema = new Schema(
  {
    name: {
      type: String,
    },
    isActive: {
      type:Boolean
    },
    isPaid: Boolean,
    email: {
      type: String,
      unique: [true, "Email should be unique exist"],
      required: [true, "Email is required"],
    },
    profile: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    role: {
      type: String,
      enum: ["user", "admin", "pro", "enterprise"],
      default: "user",
    },
    phoneNumber: {
      type: String,
    },
    address: {
      country: {
        type: String,
      },
      state: {
        type: String,
      },
      street: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", schema);

export default User;
