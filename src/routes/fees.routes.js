import express from 'express';
import { addFees, deleteFees, getAllFees, getFeesByStudentId, updateFeesStatus } from '../controllers/fees.controller.js';

const router = express.Router();

router.post("/add", addFees);
router.get("/all", getAllFees);
router.get("/student/:studentId", getFeesByStudentId);
router.put("/update/:id", updateFeesStatus);
router.delete("/delete/:id", deleteFees);

export default router;