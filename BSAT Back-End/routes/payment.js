import express from "express";
import { paymentController } from "../controllers/payment.js";
import {getCompetitorAnalysis} from "../controllers/competitorController.js";

const router = express.Router();

router.post("/intent", paymentController);
router.post("/competitor-analysis", getCompetitorAnalysis);

export default router;
