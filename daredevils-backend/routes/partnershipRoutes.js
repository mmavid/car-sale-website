const express = require('express');
const router = express.Router();
const partnershipController = require('../controllers/partnershipController');

router.post('/', partnershipController.createPartnershipRequest);
router.get('/', partnershipController.getAllRequests);
router.get('/:id', partnershipController.getRequestById);
router.put('/:id', partnershipController.updateRequestStatus);
router.delete('/:id', partnershipController.deleteRequest);

module.exports = router;