// src/middleware/validate.js
const { body, validationResult } = require('express-validator');

const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

exports.validateCar = [
  body('brand').notEmpty().withMessage('Бренд обязателен'),
  body('model').notEmpty().withMessage('Модель обязательна'),
  body('year')
    .isInt({ min: 1900, max: new Date().getFullYear() + 1 })
    .withMessage('Некорректный год'),
  body('price').isFloat({ min: 0 }).withMessage('Цена должна быть положительным числом'),
  body('bodyType').notEmpty().withMessage('Тип кузова обязателен'),
  handleValidation,
];

exports.validateUser = [
  body('name').notEmpty().withMessage('Имя обязательно'),
  body('email').isEmail().withMessage('Некорректный email'),
  handleValidation,
];
