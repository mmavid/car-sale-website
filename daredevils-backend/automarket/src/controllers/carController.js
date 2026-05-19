// src/controllers/carController.js
const { Car } = require('../models');
const { Op } = require('sequelize');

/**
 * GET /api/cars
 * Получить список авто с фильтрацией и пагинацией
 */
exports.getAll = async (req, res) => {
  try {
    const {
      brand, bodyType, transmission, status = 'active',
      minPrice, maxPrice, minYear, maxYear,
      page = 1, limit = 12, sort = 'createdAt', order = 'DESC',
    } = req.query;

    const where = {};

    if (status)       where.status       = status;
    if (brand)        where.brand        = { [Op.like]: `%${brand}%` };
    if (bodyType)     where.bodyType     = bodyType;
    if (transmission) where.transmission = transmission;
    if (minPrice || maxPrice) {
      where.price = {};
      if (minPrice) where.price[Op.gte] = +minPrice;
      if (maxPrice) where.price[Op.lte] = +maxPrice;
    }
    if (minYear || maxYear) {
      where.year = {};
      if (minYear) where.year[Op.gte] = +minYear;
      if (maxYear) where.year[Op.lte] = +maxYear;
    }

    const allowedSort = ['price', 'year', 'mileage', 'createdAt'];
    const safeSort    = allowedSort.includes(sort) ? sort : 'createdAt';
    const safeOrder   = order.toUpperCase() === 'ASC' ? 'ASC' : 'DESC';

    const offset = (Math.max(+page, 1) - 1) * +limit;

    const { count, rows } = await Car.findAndCountAll({
      where,
      order: [[safeSort, safeOrder]],
      limit: +limit,
      offset,
    });

    res.json({
      total: count,
      page: +page,
      pages: Math.ceil(count / +limit),
      data: rows,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * GET /api/cars/:id
 * Получить авто по ID
 */
exports.getById = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (!car) return res.status(404).json({ error: 'Автомобиль не найден' });
    res.json(car);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * POST /api/cars
 * Создать объявление
 */
exports.create = async (req, res) => {
  try {
    const car = await Car.create(req.body);
    res.status(201).json(car);
  } catch (err) {
    if (err.name === 'SequelizeValidationError') {
      return res.status(400).json({ error: err.errors.map(e => e.message) });
    }
    res.status(500).json({ error: err.message });
  }
};

/**
 * PUT /api/cars/:id
 * Обновить объявление
 */
exports.update = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (!car) return res.status(404).json({ error: 'Автомобиль не найден' });
    await car.update(req.body);
    res.json(car);
  } catch (err) {
    if (err.name === 'SequelizeValidationError') {
      return res.status(400).json({ error: err.errors.map(e => e.message) });
    }
    res.status(500).json({ error: err.message });
  }
};

/**
 * DELETE /api/cars/:id
 * Удалить объявление
 */
exports.remove = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (!car) return res.status(404).json({ error: 'Автомобиль не найден' });
    await car.destroy();
    res.json({ message: 'Объявление удалено' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * GET /api/cars/stats
 * Статистика по объявлениям
 */
exports.getStats = async (req, res) => {
  try {
    const [total, active, sold, reserved] = await Promise.all([
      Car.count(),
      Car.count({ where: { status: 'active' } }),
      Car.count({ where: { status: 'sold' } }),
      Car.count({ where: { status: 'reserved' } }),
    ]);

    // Уникальные бренды
    const brands = await Car.findAll({
      attributes: ['brand'],
      group: ['brand'],
      order: [['brand', 'ASC']],
    });

    res.json({
      total, active, sold, reserved,
      brands: brands.map(b => b.brand),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
