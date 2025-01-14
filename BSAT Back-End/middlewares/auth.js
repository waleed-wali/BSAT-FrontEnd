import express from "express"; // Import express as a default import
const { NextFunction, Request, Response } = express;

import jwt from "jsonwebtoken";
import User from "../models/user.js";
import ErrorHandler from "../utils/utility-class.js";

export const isAuthenticated = async (req, res, next) => {
    const token = req?.headers.authorization?.split(" ")[1];
    if (!token) return next(new ErrorHandler("Login first!", 403));

    const decodedData = jwt.verify(token, "BSAT"); 

    const user = await User.findById(decodedData._id);

    if (!user) return next(new ErrorHandler("Invalid Token! User not found", 401));

    req.user = user;

    next();
};

export const isAdmin = async (req, res, next) => {
    if (!(req.user.role == "admin"))
        return next(new ErrorHandler("Only admin have access to this functionality!", 401));

    next();
};
