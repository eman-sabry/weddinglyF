const Photographer = require('../../models/photographerModel');

// Fetch all photographers
exports.getAllPhotographers = async (req, res) => {
    try {
        const photographers = await Photographer.find();
        res.status(200).json(photographers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch a single photographer by ID
exports.getPhotographerById = async (req, res) => {
    try {
        const photographer = await Photographer.findById(req.params.id);
        if (!photographer) return res.status(404).json({ message: 'Photographer not found' });
        res.json(photographer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.postPhotographer = async (req,res) => {
    const photographer = new Photographer(req.body);
    try {
        if (Array.isArray(req.body)) {
            const photographers = await Photographer.insertMany(req.body);
            res.status(201).json(photographers);
        }
        else {
            const photographer = new Photographer(req.body);
            await photographer.save();
            res.json(venue);
        }


    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}