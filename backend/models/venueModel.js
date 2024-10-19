const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    capacity: { type: Number, required: true },
    indoorOutdoor: { type: String, required: true },
    priceVenue: { type: Number, required: true },
    priceBar: { type: Number, required: true },
    priceCeremony: { type: Number, required: true },
    image: { type: String, required: true },
    cateringIncluded: { type: Boolean, required: true },
    cleanUpIncluded: { type: Boolean, required: true },
    roomsIncluded: { type: Boolean, required: true },
    location: { type: String, required: true },
    availability: { type: String, required: true },
    rate: { type: Number, required: true },
    description: { type: String, required: true },
    contact: { type: String, required: true },
    venueType: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    images: { type: [String], required: true },
});

const Venue = mongoose.model('Venue', venueSchema);

module.exports = Venue;