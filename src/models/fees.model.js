import mongoose from 'mongoose'

const feesSchema = new mongoose.Schema(
    {
        studentName: {
            type: String,
            required: true,
            trim: true
        },

        studentId: {
            type: String,
            required: true
        },

        class: {
            type: String,
            required: true
        },

        month: {
            type: String,
            required: true
        },

        amount: {
            type: Number,
            required: true
        },

        status: {
            type: String,
            enum: ["PAID", "PENDING"],
            default: "PENDING"
        },

        paymentDate: {
            type: Date
        },

        paymentMode: {
            type: String,
            enum: ["CASH", "UPI", "CARD", "BANK"]
        }
    },
    {
       timestamps: true
    }
);

const Fees = mongoose.model("Fees", feesSchema);

export default Fees;