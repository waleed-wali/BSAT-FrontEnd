import fs from "fs";
import jade from "jade";
import path from "path";
import bcrypt from "bcrypt";
import User from "../models/user.js";
import nodemailer from "nodemailer";
import ErrorHandler from "../utils/utility-class.js";
import VerficationCode from "../models/verificationCode.js";

// import { sendToken } from "../utils/feature.js";
import  sendToken  from "../utils/feature.js";

import { TryCatch } from "../middlewares/error.js";


export const registerUser = TryCatch(async (req, res, next) => {
  const { role, password, email, ...userData } = req.body;

  let user = await User.findOne({ email });
  if (user) return next(new ErrorHandler("User already exists!", 400));

  const hashedPassword = await bcrypt.hash(password, 10);

  user = await User.create({
    password: hashedPassword,
    role,
    email,
    ...userData,
  });
  sendToken(user, res, "Registered successfully", 201, true);
});

export const activateUser = TryCatch(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, {isActive: true}, {new : true});
  if (!user) return next(new ErrorHandler("User Not Found!", 200));
  res.status(201).json({
    success: true,
    message: "User Activated Successfully!",
    user,
  });
});

export const deActivateUser = TryCatch(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, {isActive: false}, {new : true});
  if (!user) return next(new ErrorHandler("User Not Found!", 200));
  res.status(201).json({
    success: true,
    message: "User De-Activated Successfully!",
    user,
  });
});

export const loginUser = TryCatch(async (req, res, next) => {
  const { email, password, check } = req.body;

  let user = await User.findOne({ email }).select("+password");

  if (!user) return next(new ErrorHandler("User not found", 404));
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return next(new ErrorHandler("Password incorrect!", 403));
  // console.log("user", user);

  sendToken(user, res, `Welcome back ${user.name}  `, 200, check || true);
});

export const getUsers = TryCatch(async (req, res, next) => {
  const users = await User.find({});
  res.status(201).json({
    success: true,
    users,
  });
});

export const getUserDetails = TryCatch(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) return next(new ErrorHandler("User Not Found!", 200));
  res.status(201).json({
    success: true,
    user,
  });
});

export const updateUserDetails = TryCatch(async (req, res, next) => {
  const { id } = req.params;
  if (req.body.password) {
    delete req.body.password;
  }
  const user = await User.findById(id);
  if (!user) return next(new ErrorHandler("User Not Found!", 200));
  await User.findByIdAndUpdate(id, req.body, { new: true });
  res.status(201).json({
    success: true,
    user,
  });
});

export const resetUserPassword = TryCatch(async (req, res, next) => {
  const { password, email, phoneNumber } = req.body;

  let user;

  if (email) {
    user = await User.findOne({ email });
  } else {
    user = await User.findOne({ phoneNumber });
  }

  if (!user) return next(new ErrorHandler("User Not Found!", 404));

  const hash = await bcrypt.hash(password, 10);

  await user.updateOne({ $set: { password: hash } });
  await user.save();

  res.status(200).json({
    success: true,
    message: "Password reset successfully!",
    user,
  });
});

export const changeUserPassword = TryCatch(async (req, res, next) => {
  const { password, oldPassword } = req.body;

  let user = await User.findOne({ _id: req.user._id });

  if (!user) return next(new ErrorHandler("User Not Found!", 404));

  const isMatch = await bcrypt.compare(oldPassword, user.password);

  if (isMatch) {
    const hash = await bcrypt.hash(password, 10);

    await user.updateOne({ $set: { password: hash } });
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password reset successfully!",
      user,
    });
  } else {
    return res.status(200).json({
      success: false,
      message: "Passowrd does not match",
    });
  }
});

export const addBusinessInfo = TryCatch(async (req, res, next) => {});

export const getMyProfile = TryCatch(async (req, res, next) => {
  let user = await User.findById(req.user?._id);
  return res.status(201).json({
    success: true,
    user,
  });
});

export const deleteUserById = TryCatch(async (req, res, next) => {
  const { id } = req.params;

  let user = await User.findByIdAndDelete(id);

  return res.status(201).json({
    success: true,
    message: "User deleted successfully",
    user,
  });
});

export const sendVerificationCodeByEamil = TryCatch(async (req, res, next) => {
  const { email } = req.body;

  const user = await VerficationCode.findOne({ email });
  if (user) {
    await user.deleteOne();
  }

  const verificationCode = Math.floor(10000 + Math.random() * 90000);
  const codeStr = verificationCode.toString();
  const hash = await bcrypt.hash(codeStr, Number(10));

  const verifyCode = await VerficationCode.create({
    email,
    code: hash,
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "app.torqnetwork@gmail.com",
      pass: "uxbm pxyz afii pfka",
    },
  });
  let template = "../utils/templates/verification_code_template.jade";
  const source = fs.readFileSync(path.join(__dirname, template), "utf-8");

  const compiledDoc = jade.compile(source);

  const options = {
    from: "app.torqnetwork@gmail.com",
    to: email,
    subject: "Hello from Cyber-Wall",

    html: compiledDoc({ code: verificationCode }),
  };

  let info = await transporter.sendMail(options);

  return res.status(201).json({
    success: true,
    message: "Code sent successfully! Check you email",
    info,
  });
});

export const verifyVerificationCodeByEamil = TryCatch(
  async (req, res, next) => {
    const { email, code } = req.body;

    const user = await VerficationCode.findOne({ email });
    if (!user) return next(new ErrorHandler("User not found", 400));

    const isvalid = await bcrypt.compare(code, user.code);

    if (!isvalid)
      return next(new ErrorHandler("Code invalid or expired!", 400));

    await user.deleteOne();

    return res.status(201).json({
      success: true,
      message: "Code verified successfully!",
    });
  }
);

