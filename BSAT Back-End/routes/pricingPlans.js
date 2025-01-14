import express from "express";
import { isAdmin, isAuthenticated } from "../middlewares/auth.js";
import {
  addMyPlan,
  getAllPlans,
  getPlan,
  removePlan,
  updateMyPlans,
} from "../controllers/pricingPlans.js";

const app = express.Router();

app.post("/", isAuthenticated, addMyPlan);
app.patch("/:id", isAuthenticated, updateMyPlans);
app.delete("/:planId", isAuthenticated, removePlan);

// get single plan based on planname
app.get("/get", isAuthenticated, getPlan);

app.get("/", isAuthenticated, isAdmin, getAllPlans);

export default app;
