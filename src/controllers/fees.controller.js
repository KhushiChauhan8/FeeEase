import Fees from '../models/fees.model.js';

//Add Fees
export const addFees = async (req, res) => {
    try {

        const { studentId, month } = req.body;

        // Duplicate check
        const alreadyExits = await Fees.findOne({ studentId, month });
        if (alreadyExits) {
            return res.status(400).json({
                success: false,
                message: "Fees already added for this student and month"
            });
        }

        const fees = await Fees.create(req.body);

        res.status(201).json({
            success: true,
            message: "Fees Added Successfully",
            data: fees
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Fees
export const getAllFees = async (req, res) => {
    try {
        const { month, status, page = 1, limit = 10 } = req.query;

        const query = {};

        if (month) query.month = month;
        if (status) query. status = status;

        const fees = await Fees.find(query)
        .skip((page -1) * limit)
        .limit(Number(limit));

        const total = await Fees.countDocuments(query);

        res.status(200).json({
            success; true,
            totalRecords: total,
            currentPage: Number(page),
            totalPages: Math.ceil(total / limit),
            data: fees
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get Fees By student Id
export const getFeesByStudentId = async (req, res) => {
    try {
        const { studentId

        } = req.params;

        const fees = await Fees.find({ studentId });

        res.status(200).json({
            success: true,
            data: fees
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//Update Fees Status
export const updateFeesStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

      const fees = await Fees.findById(id);

      if(!fees){
        return res.status(400).json({
            status: false,
            message: "Fees record not found"
        });
      }

      //PAID  - PENDING not allowed
      if(fees.status === "PAID" && status === "PENDING"){
        return res.status(400).json({
            status: false,
            message: "Paid fees cannot be reverted to pending"
        });
      }

      fees.status = status;
      await fees.save();

      res.status(200).json({
        success: true,
        message: "Fees status updated successfully",
        data: fees
      })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//Delete Fees
export const deleteFees = async (req, res) => {
    try {
        const { id } = req.params;

        const fees = await Fees.findById(id);

        if (!fees) {
            return res.status(400).json({
                success: false,
                message: "Fees record not found"
            });
        }

        //PAID fees cannot be deleted
        if (fees.status === "PAID") {
            return res.status(400).json({
                success: false,
                message: "Paid fees cannot ne deleted"
            });
        }

        await Fees.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Fees deleted successfully"
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};