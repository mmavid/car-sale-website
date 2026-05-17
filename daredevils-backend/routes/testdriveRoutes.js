const express = require('express');
const router = express.Router();
const testdriveController = require('../controllers/testdriveController');

router.post('/', testdriveController.createTestDriveRequest);
router.get('/', testdriveController.getAllRequests);
router.get('/car/:carId', testdriveController.getRequestsByCar);
router.put('/:id', testdriveController.updateRequestStatus);

module.exports = router;