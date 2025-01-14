import express from "express";
import {
  getUserDetails,
  getUsers,
  registerUser,
  loginUser,
  getMyProfile,
  updateUserDetails,
  sendVerificationCodeByEamil,
  verifyVerificationCodeByEamil,
  resetUserPassword,
  changeUserPassword,
  deleteUserById,
  activateUser,
  deActivateUser,
} from "../controllers/user.js";
import { isAdmin, isAuthenticated } from "../middlewares/auth.js";

const app = express.Router();

// api/v1/users  here

app.get("/", getUsers);
app.post("/login", loginUser);
app.get("/:id", getUserDetails);
app.put("/:id", updateUserDetails);
app.delete("/:id", deleteUserById);
app.get("/activate/:id", activateUser);
app.get("/de-activate/:id", deActivateUser);
app.post("/register", registerUser);
app.post("/password-reset", resetUserPassword);
// change user password
app.post("/password/change", isAuthenticated, changeUserPassword);

app.post("/mail/send-code", sendVerificationCodeByEamil);
app.post("/mail/verify-code", verifyVerificationCodeByEamil);

// app.post("/phone/send-code", sendVerificationCodeByPhone);
// app.post("/phone/verify-code", verifyVerificationCodeByPhone);

app.post("/profile/me", isAuthenticated, getMyProfile); 

export default app;
