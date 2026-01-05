export const loginUser = (req, res) => {
    const { email } = req.body;

    res.status(200).json({
        success: true,
        message: 'Login API Working',
        email,
    });
};