import mongoose, { Schema } from "mongoose";

const schema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
        },
        description:{
            type: String,
            required: [true, "Description is required"],
        }
    },
    {
        timestamps: true
    }
)

const FAQ = mongoose.model("faq", schema);

export default FAQ;
