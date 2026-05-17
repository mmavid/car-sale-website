const express = require('express');
const router = express.Router();
const tradeinController = require('../controllers/tradeinController');

router.post('/', tradeinController.createTradeInRequest);
router.get('/', tradeinController.getAllRequests);
router.get('/:id', tradeinController.getRequestById);
router.put('/:id', tradeinController.updateRequest);

module.exports = router;