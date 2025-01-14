// error.js
// import { TryCatch } from "../middlewares/error.js";

export const errorMiddleware = (err, req, res, next) => {
    // Set default values if err.message or err.statusCode are undefined
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    return res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
};

export const TryCatch = (func) => {
    return (req, res, next) => {
        return Promise.resolve(func(req, res, next)).catch(next);
    };
};
