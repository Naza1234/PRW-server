const express = require('express');
const router = express.Router();
const controller = require('../controllers/propartysControllers');

router
.post('/', controller.AddProperty)
.get('/', controller.GetAllProperty)
.get('/:id', controller.GetSingleProperty)
.get('/search/:id', controller.GetSearch)
.put('/:id', controller.UpdateSingleProperty)
.delete('/:id', controller.DeleteSingleProperty)

module.exports = router;

