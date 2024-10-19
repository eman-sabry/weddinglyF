const mongoose = require('mongoose');

const photographerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    instagram: { type: String },
    facebook: { type: String },
    email: { type: String },
    albums: [
        {
            title: { type: String },
            cover: { type: String },
            photos: [String],
        },
    ],
});

module.exports = mongoose.model('Photographer', photographerSchema);