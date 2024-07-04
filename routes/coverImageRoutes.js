const express = require('express');
const router = express.Router();
const controller = require('../controllers/coverImageControllers');

router
.post('/',controller.uplaod, controller.AddCoverImage)
.get('/', controller.GetAllCoverImage)
.get('/:id', controller.GetSingleCoverImage)
.put('/:id',controller.uplaod, controller.UpdateSingleCoverImage)
.delete('/:id', controller.DeleteSingleCoverImage)

module.exports = router;

