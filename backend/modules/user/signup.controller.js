const User = require('../../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const { isEmail } = require("validator");

const saltRounds = 10;

const validateSignUpData = async (req) => {
    const { brideName, groomName, email, password } = req.body;

    if (!groomName || groomName.trim().length === 0) {
        throw new Error("Please enter a name for the groom");
    }

    if (!brideName || brideName.trim().length === 0) {
        throw new Error("Please enter a name for the bride");
    }

    if (!isEmail(email)) {
        throw new Error("Please enter a valid email");
    }

    if (!password || password.trim().length < 8) {
        throw new Error("Minimum password length is 8 characters");
    }

    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
        throw new Error("Email Already Registered");
    }

    return true;
};

module.exports = async (req, res) => {
    const { brideName, groomName, email, password } = req.body;
    console.log('Signup Data:', { brideName, groomName, email, password }); // Debugging line

    try {
        // Validate the signup data
        await validateSignUpData(req);

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        // Create the user
        const user = await User.create({ brideName, groomName, email, password: hashedPassword });
        console.log('User Created:', user); // Debugging line

        // Send the success response
        return res.json({
            message: "Account Created Successfully",
            user: { _id: user.id, brideName: user.brideName, groomName: user.groomName, email: user.email }
        });
    } catch (error) {
        console.error('Error during signup:', error);
        
        // Handle different error types
        const statusCode = error.message === "Email Already Registered" ? 400 : 500;
        return res.status(statusCode).json({ message: error.message || "Error creating account" });
    }
};