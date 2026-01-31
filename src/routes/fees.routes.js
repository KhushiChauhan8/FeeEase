import express from 'express';
import { addFees, deleteFees, getAllFees, getFeesByStudentId, updateFeesStatus } from '../controllers/fees.controller.js';
import { feesVslidation } from '../middlewares/validation.middleware.js';
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/add", protect, feesVslidation, addFees);
router.get("/all", protect, getAllFees);
router.get("/student/:studentId", protect, getFeesByStudentId);
router.put("/update/:id", protect, updateFeesStatus);
router.delete("/delete/:id", protect, deleteFees);

export default router;