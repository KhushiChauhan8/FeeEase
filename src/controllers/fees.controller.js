import Fees from '../models/fees.model.js';

//Add Fees
export const addFees = async (req, res) => {
    try{
        const fees = await Fees.create(req.body);

        res.status(201).json({
            success: true,
            message: "Fees Added Successfully",
            data: fees
        });
    } catch (error){
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Fees
export const getAllFees = async (req, res) => {
    try{
        const fees = await Fees.find();

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

// Get Fees By student Id
export const getFeesByStudentId = async (req, res) => {
    try{
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
    try{
        const { id } = req.params;
        const { status } = req.body;

        const updatedFees = await Fees.findByIdAndUpdate(
            id, 
            { status },
            {new: true}
        );
        res.status(200).json({
            success: true,
            message: "Fees Status Updated",
            data: updatedFees
        });
    }
    catch (error){
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//Delete Fees
export const deleteFees = async (req, res) => {
    try{
        const {id} = req.params;

        const deletedFees = await Fees.findByIdAndDelete(id);

        if(!deletedFees){
            return res.status(400).json({
                success: false,
                message: "Fees record not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Fees deleted successfully",
        });
    }
    catch (error){
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};