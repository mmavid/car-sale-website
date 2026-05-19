// src/models/Car.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Car = sequelize.define('Car', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 1900, max: new Date().getFullYear() + 1 },
  },
  price: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false,
    validate: { min: 0 },
  },
  mileage: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    validate: { min: 0 },
  },
  engine: {
    type: DataTypes.STRING, // "2.0L Бензин", "3.0L Дизель"
  },
  transmission: {
    type: DataTypes.ENUM('Механика', 'Автомат', 'Робот', 'Вариатор'),
    defaultValue: 'Автомат',
  },
  bodyType: {
    type: DataTypes.ENUM('Седан', 'Хэтчбек', 'Кроссовер', 'Внедорожник', 'Купе', 'Универсал', 'Минивэн', 'Пикап'),
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
  status: {
    type: DataTypes.ENUM('active', 'sold', 'reserved'),
    defaultValue: 'active',
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'cars',
  timestamps: true,
});

module.exports = Car;
