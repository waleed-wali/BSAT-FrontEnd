import express from "express"
import { addFAQ, deleteFAQ, getAllFAQs, getFAQbyID, updateFAQbyID } from "../controllers/faq.js";

const app = express.Router();

// api/v1/faq/ here

app.post("/", addFAQ);
app.get("/", getAllFAQs);
app.get("/:id", getFAQbyID);
app.delete("/:id", deleteFAQ);
app.patch("/:id", updateFAQbyID);

export default app;