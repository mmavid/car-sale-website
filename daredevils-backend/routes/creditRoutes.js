const express = require('express');
const router = express.Router();
const creditController = require('../controllers/creditController');

router.post('/', creditController.createCreditRequest);
router.post('/calculate', creditController.calculatePayment);
router.get('/', creditController.getAllRequests);
router.get('/:id', creditController.getRequestById);
router.put('/:id', creditController.updateRequestStatus);

module.exports = router;