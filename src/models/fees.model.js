import mongoose from "mongoose";

const feesSchema = new mongoose.Schema(
    {
        studentName: {
            type: String,
            required: [true, "Student name is required"],
            trim: true
        },

        studentId: {
            type: String,
            required: [true, "Student ID is required"]
        },

        month: {
            type: String,
            required: true
        },

        amount: {
            type: Number,
            required: true,
            min: [0, "Amount cannot be negative"]
        },

        status: {
            type: String,
            enum: ["PAID", "PENDING"],
            default: "PENDING"
        }
    }, { timestamps: true }
);

export default mongoose.model("Fees", feesSchema);