// src/routes/userRoutes.js
const router = require('express').Router();
const ctrl   = require('../controllers/userController');
const { validateUser } = require('../middleware/validate');

router.get('/',       ctrl.getAll);
router.get('/:id',    ctrl.getById);
router.post('/',      validateUser, ctrl.create);
router.put('/:id',    ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;
