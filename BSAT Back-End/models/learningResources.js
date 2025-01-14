import mongoose, { Schema } from "mongoose";

const schema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
        },
        media: {
            mediaType: String,
            url: String
        },
        description:{
            type: String,
            required: [true, "Description is required"],
        },
        type: {
            type: String,
            enum: ["blog", "guide", "video"]
        },
        likesCount: Number,
        comments: [
            {
                name: String,
                profile: String,
                comment: String,
            }
        ],
        content: [
            {
                h: String,
                p: String,
            }
        ]
    },
    {
        timestamps: true
    }
)

const LR = mongoose.model("Learning-resources", schema);

export default LR;
