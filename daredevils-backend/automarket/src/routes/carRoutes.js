// src/routes/carRoutes.js
const router = require('express').Router();
const ctrl   = require('../controllers/carController');
const { validateCar } = require('../middleware/validate');

router.get('/stats',  ctrl.getStats);   // статистика — до :id !
router.get('/',       ctrl.getAll);
router.get('/:id',    ctrl.getById);
router.post('/',      validateCar, ctrl.create);
router.put('/:id',    ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;
