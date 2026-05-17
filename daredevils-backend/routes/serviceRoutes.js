const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.post('/', serviceController.createServiceRequest);
router.get('/', serviceController.getAllRequests);
router.get('/stats', serviceController.getStatistics);
router.get('/:id', serviceController.getRequestById);
router.put('/:id', serviceController.updateRequestStatus);

module.exports = router;