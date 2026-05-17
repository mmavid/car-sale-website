const express = require('express');
const router = express.Router();
const callController = require('../controllers/callController');

router.post('/', callController.createCallRequest);
router.get('/', callController.getAllRequests);
router.put('/:id', callController.updateRequestStatus);

module.exports = router;