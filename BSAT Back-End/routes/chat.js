import express from "express"
import { getAdminToChat, getAllChats, getUserChats } from "../controllers/chat.js";

const app = express.Router();

// api/v1/chat here

app.get("/:id", getUserChats);
app.get("/", getAllChats);
app.get("/get/admin", getAdminToChat);

export default app;
