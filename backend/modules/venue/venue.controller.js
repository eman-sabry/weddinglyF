const Venue = require('../../models/venueModel');
const path = require('path');

const getList = async (req, res) => {
    try {
        const venues = await Venue.find();
        res.status(200).json(venues);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const postList = async (req, res) => {
    const venue = new Venue(req.body);
    try {
        if (Array.isArray(req.body)) {
            const venues = await Venue.insertMany(req.body);
            res.status(201).json(venues);
        }
        else {
            const venue = new Venue(req.body);
            await venue.save();
            res.json(venue);
        }


    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getVenueById = async (req, res) => {
    try {
        const venue = await Venue.findOne({ id: req.params.id });
        if (!venue) {
            return res.status(404).json({ message: 'venue not found' });
        }
        res.status(200).json(venue);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getList,
    postList,
    getVenueById

}