// const mongoose = require('mongoose');
import mongoose from 'mongoose';


// Define the chat schema
const chatSchema = new mongoose.Schema({
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }],
    messages: [{
        sender: mongoose.Schema.Types.ObjectId,
        content: String,
        mediaType: {
            type: String,
            enum: ["file", "image", "video", "audio", "text"],
            default: "text"
        },
        timestamp: { type: Date, default: Date.now }
    }]
}, {
    timestamps: true,
});

// Create the Chatroom model
const Chatroom = mongoose.model("Chatroom", chatSchema);
export default Chatroom
