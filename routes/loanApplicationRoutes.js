const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/loanApplicationControllers');

router.post('/applications', applicationController.addApplication);
router.get('/applications', applicationController.getAllApplications);
router.get('/applications/:id', applicationController.getSingleApplication);
router.put('/applications/:id', applicationController.updateSingleApplication);
router.delete('/applications/:id', applicationController.deleteSingleApplication);

module.exports = router;
