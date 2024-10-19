// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to database successfully!");
    } catch (error) {
        console.log("Failed to connect to the database!", error);
        process.exit(1); 
    }
};

module.exports = connectDB;