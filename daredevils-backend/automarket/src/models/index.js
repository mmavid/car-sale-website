// src/models/index.js
const sequelize = require('../config/database');
const Car  = require('./Car');
const User = require('./User');
const Order = require('./Order');

// Ассоциации
User.hasMany(Order,  { foreignKey: 'userId', as: 'orders' });
Order.belongsTo(User, { foreignKey: 'userId', as: 'user' });

Car.hasMany(Order,   { foreignKey: 'carId',  as: 'orders' });
Order.belongsTo(Car,  { foreignKey: 'carId',  as: 'car' });

module.exports = { sequelize, Car, User, Order };
