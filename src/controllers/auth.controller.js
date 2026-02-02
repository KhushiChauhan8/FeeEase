import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // basic validation
        if(!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        // temporary admin login (for project)
        if(email !== "admin@gmail.com" || password !== "123456") {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        // token generate
        const token = jwt.sign(
            { email, role: "ADMIN" },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        return res.status(200).json({
            success: true,
            message: "Login successful",
            token
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};