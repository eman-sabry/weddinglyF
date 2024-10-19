const express = require('express');
const { getAllPhotographers, getPhotographerById,postPhotographer } = require('./photographer.controller');

const router = express.Router();

router.post('/', postPhotographer);
router.get('/', getAllPhotographers);
router.get('/:id', getPhotographerById);

module.exports = router;