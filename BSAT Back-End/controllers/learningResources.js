import FAQ from "../models/faq.js";
import ErrorHandler from "../utils/utility-class.js";

import { TryCatch } from "../middlewares/error.js";
import LR from "../models/learningResources.js";

export const addLR = TryCatch(async (req, res, next) => {
  const data = req.body;
  const faq = await LR.create(data);
  res.status(201).json({
    success: true,
    faq,
  });
});

export const getAllLRs = TryCatch(async (req, res, next) => {
  const faqs = await LR.find({});
  res.status(201).json({
    success: true,
    faqs,
  });
});

export const getLRbyID = TryCatch(async (req, res, next) => {
  const { id } = req.params;
  const faq = await LR.findById(id);
  if (!faq) return next(new ErrorHandler("Not Found!", 404));
  res.status(201).json({
    success: true,
    faq,
  });
});

export const updateLRbyID = TryCatch(async (req, res, next) => {
  const { id } = req.params;
  const faq = await LR.findByIdAndUpdate(id, req.body, { new: true });
  if (!faq) return next(new ErrorHandler("Not Found!", 404));
  res.status(201).json({
    success: true,
    message: "LR updated successfully!",
    faq,
  });
});

export const deleteLR = TryCatch(async (req, res, next) => {
  const { id } = req.params;
  const faq = await LR.findByIdAndDelete(id);
  if (!faq) return next(new ErrorHandler("Not Found!", 404));
  res.status(201).json({
    success: true,
    message: "LR deleted successfully!",
    faq,
  });
});

export const addComment = TryCatch(async (req, res, next) => {
  const { id } = req.params;
  const { comment } = req.body;

  const lr = await LR.findByIdAndUpdate(
    id,
    { $push: { comments: comment } },
    { new: true }
  );

  if (!lr) return next(new ErrorHandler("Not Found!", 404));

  res.status(201).json({
    success: true,
    message: "Comment added successfully!",
    lr,
  });
});

export const likePost = TryCatch(async (req, res, next) => {
  const { id } = req.params;

  const lr = await LR.findByIdAndUpdate(
    id,
    { $inc: { likesCount: 1 } },
    { new: true }
  );
  if (!lr) return next(new ErrorHandler("Not Found!", 404));
  res.status(201).json({
    success: true,
    message: "LR deleted successfully!",
    lr,
  });
});
