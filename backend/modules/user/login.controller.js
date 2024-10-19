const User = require('../../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and Password are required" });
    }

    try {
        const dbUser = await User.findOne({ email }).exec();
        if (!dbUser) {
            return res.status(400).json({ message: "Email Not Registered. Please Sign Up!" });
        }

        console.log('Stored Password (hashed):', dbUser.password); // Debugging line
        console.log('Input Password:', password); // Debugging line
        const match = await bcrypt.compare(password.trim(), dbUser.password);
        console.log('Password Match:', match); // Debugging line

        if (match) {
            const token = jwt.sign(
                { _id: dbUser.id, brideName: dbUser.brideName, groomName: dbUser.groomName, email: dbUser.email },
                process.env.JWT_LOGIN_TOKEN,
                { expiresIn: "1d" }
            );

            return res.json({
                message: "Login Successful",
                token,
            });
        } else {
            return res.status(400).json({ message: "Email or Password incorrect" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};