import FAQ from "../models/faq.js";
import ErrorHandler from "../utils/utility-class.js";

import { TryCatch } from "../middlewares/error.js";
import Chatroom from "../models/chat.js";
import User from "../models/user.js";

export const getUserChats = TryCatch(
  // USER CHAT WITH ALL OTHER USERS
  async (req, res, next) => {
    const chats = await Chatroom.find({ members: req.params.id });
    res.status(201).json({
      success: true,
      chats,
    });
  }
);

// export const getUserChat = TryCatch( // user chAT WITH OTHER SINGLE USER
//     async (req, res, next) => {

//         const [member1, member2] = req.body.members;
//         const roomName = member1 < member2 ? `room_${member1}_${member2}` : `room_${member2}_${member1}`;

//         socket.join(roomName);
//         const chat = await Chatroom.findOne({ members: { $all: req.body.members } });
//         if(chat){
//             return res.status(201).json({
//                 success: true,
//                 chat
//             })
//         }
//         else{
//             return res.status(201).json({
//                 success: true,
//                 chat: { messages: [] }
//             })
//         }
//     }
// )

export const getAllChats = TryCatch(async (req, res, next) => {
  const chats = await Chatroom.find({}).populate("members");
  res.status(201).json({
    success: true,
    chats,
  });
});

export const getAdminToChat = async (req, res, next) => {
  const admin = await User.findOne({ role: "admin" });
  res.status(201).json({
    success: true,
    admin,
  });
};
