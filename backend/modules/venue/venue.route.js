const express = require('express');
const router = express.Router();
const controller=require('./venue.controller.js')

router.get('/list', controller.getList);
router.post('/list', controller.postList);
router.get('/:id', controller.getVenueById);

module.exports=router;