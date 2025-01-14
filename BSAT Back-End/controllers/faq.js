import FAQ from "../models/faq.js";
import ErrorHandler from "../utils/utility-class.js";

import { TryCatch } from "../middlewares/error.js";


export const addFAQ = TryCatch(
    async (req, res, next) => {
        const data = req.body;
        const faq = await FAQ.create(data);
        res.status(201).json({
            success: true,
            faq
        })
    }
)

export const getAllFAQs = TryCatch(
    async (req, res, next) => {
        const faqs = await FAQ.find({})
        res.status(201).json({
            success: true,
            faqs
        })
    }
)

export const getFAQbyID = TryCatch(
    async (req, res, next) => {
        const { id } = req.params
        const faq = await FAQ.findById(id)
        if (!faq) return next(new ErrorHandler("Not Found!", 404))
        res.status(201).json({
            success: true,
            faq
        })
    }
)

export const updateFAQbyID = TryCatch(
    async (req, res, next) => {
        const { id } = req.params
        const faq = await FAQ.findByIdAndUpdate(id, req.body, { new: true });
        if (!faq) return next(new ErrorHandler("Not Found!", 404));
        res.status(201).json({
            success: true,
            message: "FAQ updated successfully!",
            faq
        })
    }
)

export const deleteFAQ = TryCatch(
    async (req, res, next) => {
        const { id } = req.params
        const faq = await FAQ.findByIdAndDelete(id)
        if (!faq) return next(new ErrorHandler("Not Found!", 404));
        res.status(201).json({
            success: true,
            message: "FAQ deleted successfully!",
            faq
        })
    }
)
