// src/routes/orderRoutes.js
const router = require('express').Router();
const ctrl   = require('../controllers/orderController');

router.get('/',              ctrl.getAll);
router.get('/:id',           ctrl.getById);
router.post('/',             ctrl.create);
router.patch('/:id/status',  ctrl.updateStatus);
router.delete('/:id',        ctrl.remove);

module.exports = router;
