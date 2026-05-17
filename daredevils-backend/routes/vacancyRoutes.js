const express = require('express');
const router = express.Router();
const vacancyController = require('../controllers/vacancyController');

router.get('/', vacancyController.getAllVacancies);
router.get('/:id', vacancyController.getVacancyById);
router.post('/', vacancyController.createVacancy);
router.put('/:id', vacancyController.updateVacancy);
router.delete('/:id', vacancyController.deleteVacancy);
router.post('/:id/apply', vacancyController.applyToVacancy);
router.get('/:id/applications', vacancyController.getApplications);
router.put('/applications/:id', vacancyController.updateApplicationStatus);

module.exports = router;