import express from "express";
import { enhanceIamge } from "../controllers/imageEnhanceController.js";
import multer from "multer";

const app = express.Router();

const upload = multer({ dest: 'uploads/' });

app.post("/", upload.single("file"), enhanceIamge);

export default app;
