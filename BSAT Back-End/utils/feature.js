import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

const sendToken = (user, res, message, statusCode = 200, check) => {
    const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
        expiresIn: "1d",
    });

    const userData = {
        _id: user._id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
        address: user.address,
        profile: user.profile,
    };

    return res.status(statusCode).json({
        success: true,
        message,
        token,
        user: userData,
    });
};

export default sendToken;
