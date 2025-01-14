import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";
import paymentRoute from "./routes/payment.js";
import LRRouter from "./routes/learningResources.js";
import faqRouter from "./routes/faq.js";
import userRouter from "./routes/user.js";
import planRouter from "./routes/pricingPlans.js";
import imageRouter from "./routes/imageEnhanceRoutes.js";
import chatRouter from "./routes/chat.js";
import {errorMiddleware} from "./middlewares/error.js";

// import setUpSocket from "./socketConnection.js";

import morgan from "morgan"; // Import morgan
import connectDB from "./config/db.js";
import passport from "passport";
import { setupAuth } from "./middlewares/authMiddlewares.js";
import cors from "cors";
// import { errorMiddleware } from "./middlewares/error";

// import setupAuth from './authMiddlewares';

dotenv.config();

connectDB();
// setupAuth(passport);

const app = express();
app.use(cors());
app.use(morgan("dev")); // Use morgan
app.use(express.json());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/payment", paymentRoute);

// using routes
app.use("/api/v1/LR", LRRouter);
app.use("/api/v1/faq", faqRouter);
app.use("/api/v1/chat", chatRouter);
app.use("/api/v1/plans", planRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/images", imageRouter);

app.get("/", async (req, res) => {
  res.send({ message: "BSAT Server is working fine" });
});

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the BSAT</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Server is running on mode ${process.env.DEV_MODE} on port ${PORT}`.bgCyan
      .white
  );
});

// Path: routes/authRoute.js

// server.js

// Session configuration
// app.use(session({
//     secret: process.env.SESSION_SECRET, // Ensure you have SESSION_SECRET in your .env file
//     resave: false,
//     saveUninitialized: true
// }));

// // Initialize Passport and session
// app.use(passport.initialize());
// app.use(passport.session());

// // Apply routes from authRoute.js
// app.use('/auth', authRoutes);

// // Basic route for the homepage
// app.get('/', (req, res) => res.send('Welcome to the home page!'));
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

// // Import the auth middleware setup function
// // Apply the setup function with passport
// setupAuth(passport);
