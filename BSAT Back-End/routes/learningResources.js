import express from "express";
import {
  addComment,
  addLR,
  deleteLR,
  getAllLRs,
  getLRbyID,
  likePost,
  updateLRbyID,
} from "../controllers/learningResources.js";

const app = express.Router();

// api/v1/LR here

app.post("/", addLR);
app.get("/", getAllLRs);
app.get("/:id", getLRbyID);
app.delete("/:id", deleteLR);
app.get("/like/:id", likePost);
app.patch("/:id", updateLRbyID);
app.post("/comment/:id", addComment);

export default app;
