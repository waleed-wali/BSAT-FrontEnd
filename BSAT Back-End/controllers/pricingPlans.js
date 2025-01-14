import mongoose, { Document, Schema } from "mongoose";
import { TryCatch } from "../middlewares/error.js";
import PricingPlans from "../models/pricingPlans.js";
import User from "../models/user.js";
import ErrorHandler from "../utils/utility-class.js";

export const addMyPlan = TryCatch(async (req, res, next) => {
  let plan = await PricingPlans.findOne({ planName: req.body.planName });

  if (plan)
    return next(new ErrorHandler("Plan with this name already exists", 400));

  plan = await PricingPlans.create({ ...req.body });

  res.status(201).json({
    success: true,
    message: "Plan added successfully!",
    plan,
  });
});

export const updateMyPlans = TryCatch(async (req, res, next) => {
  const { id } = req.params;

  let plan = await PricingPlans.findById(id);

  // if (plan) return next(new ErrorHandler("Plan with this name already exists", 400));

  plan = await PricingPlans.findByIdAndUpdate(id, req.body, { new: true });

  res.status(200).json({
    success: true,
    message: "Plan updated successfully!",
    plan,
  });
});

export const removePlan = TryCatch(async (req, res, next) => {
  const { planId } = req.params;
  const plan = await PricingPlans.findById(planId);
  if (!plan) return next(new ErrorHandler("Card not found", 404));

  await PricingPlans.findByIdAndDelete(planId);

  res.status(200).json({
    success: true,
    message: "Plan removed successfully!",
  });
});

export const getAllPlans = TryCatch(async (req, res, next) => {
  const plans = await PricingPlans.find({});

  res.status(200).json({
    success: true,
    plans,
  });
});

export const getPlan = TryCatch(async (req, res, next) => {
  const plan = await PricingPlans.findOne({ planName: req.body.name });

  res.status(200).json({
    success: true,
    plan,
  });
});
