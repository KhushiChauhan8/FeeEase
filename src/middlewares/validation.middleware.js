export const feesVslidation = (req, res, next) => {
    const { studentName, studentId, month, amount, status } = req.body;

    //studentName
    if (!studentName || typeof studentName !== "string" || studentName.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "Student name is required"
        });
    }


    //studentId
    if (!studentId || typeof studentId !== "string" || studentId.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "Student ID is required"
        });
    }


    //month
    if (!month) {
        return res.status(400).json({
            succes: false,
            message: "Month is required"
        });
    }

    //amount
    if (amount <= 0) {
        return res.status(400).json({
            succes: false,
            message: "Amount must be greater than 0"
        });
    }

    //status
    if (!["PAID", "PENDING"].includes(status)) {
        return res.status(400).json({
            status: false,
            message: "Status must be PAID or PENDING"
        });
    }

    next();
};