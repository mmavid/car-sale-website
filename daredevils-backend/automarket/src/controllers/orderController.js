// src/controllers/orderController.js
const { Order, Car, User } = require('../models');

/**
 * GET /api/orders
 */
exports.getAll = async (req, res) => {
  try {
    const { status, userId } = req.query;
    const where = {};
    if (status) where.status = status;
    if (userId) where.userId = +userId;

    const orders = await Order.findAll({
      where,
      include: [
        { model: Car,  as: 'car',  attributes: ['id', 'brand', 'model', 'year', 'price', 'imageUrl'] },
        { model: User, as: 'user', attributes: ['id', 'name', 'email', 'phone'] },
      ],
      order: [['createdAt', 'DESC']],
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * GET /api/orders/:id
 */
exports.getById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: [
        { model: Car,  as: 'car' },
        { model: User, as: 'user', attributes: ['id', 'name', 'email', 'phone'] },
      ],
    });
    if (!order) return res.status(404).json({ error: 'Заявка не найдена' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * POST /api/orders
 * Оформить заявку на покупку
 */
exports.create = async (req, res) => {
  try {
    const { carId, userId, contactName, contactPhone, message } = req.body;

    // Проверяем, что авто существует и доступно
    const car = await Car.findByPk(carId);
    if (!car) return res.status(404).json({ error: 'Автомобиль не найден' });
    if (car.status !== 'active') {
      return res.status(409).json({ error: 'Автомобиль уже продан или зарезервирован' });
    }

    // Проверяем пользователя
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ error: 'Пользователь не найден' });

    // Создаём заявку и резервируем авто
    const [order] = await Promise.all([
      Order.create({ carId, userId, contactName, contactPhone, message, totalPrice: car.price }),
      car.update({ status: 'reserved' }),
    ]);

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * PATCH /api/orders/:id/status
 * Обновить статус заявки
 */
exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const allowed = ['pending', 'confirmed', 'cancelled', 'completed'];
    if (!allowed.includes(status)) {
      return res.status(400).json({ error: `Статус должен быть одним из: ${allowed.join(', ')}` });
    }

    const order = await Order.findByPk(req.params.id, {
      include: [{ model: Car, as: 'car' }],
    });
    if (!order) return res.status(404).json({ error: 'Заявка не найдена' });

    await order.update({ status });

    // Обновляем статус авто в зависимости от статуса заявки
    if (status === 'completed') {
      await order.car.update({ status: 'sold' });
    } else if (status === 'cancelled') {
      await order.car.update({ status: 'active' });
    }

    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * DELETE /api/orders/:id
 */
exports.remove = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: 'Заявка не найдена' });
    await order.destroy();
    res.json({ message: 'Заявка удалена' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
