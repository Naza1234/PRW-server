const express = require('express');
const router = express.Router();
const controller = require('../controllers/otherImageControllers');

router
.post('/',controller.uplaod, controller.AddOtherImage)
.get('/', controller.GetAllOtherImage)
.get('/by-id/:id', controller.GetAllOtherImageById)
.get('/:id', controller.GetSingleOtherImage)
.put('/:id', controller.UpdateSingleOtherImage)
.delete('/:id', controller.DeleteSingleOtherImage)

module.exports = router;

