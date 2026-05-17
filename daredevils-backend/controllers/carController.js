const db = require('../models');
const { Op } = require('sequelize');

const carController = {
    async getAllCars(req, res) {
        try {
            const { series, minPrice, maxPrice, isAvailable } = req.query;
            const where = {};
            
            if (series) where.series = series;
            if (isAvailable !== undefined) where.isAvailable = isAvailable === 'true';
            if (minPrice || maxPrice) {
                where.price = {};
                if (minPrice) where.price[Op.gte] = parseFloat(minPrice);
                if (maxPrice) where.price[Op.lte] = parseFloat(maxPrice);
            }
            
            const cars = await db.Car.findAll({ where, order: [['price', 'ASC']] });
            res.json({ success: true, data: cars });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },

    async getCarById(req, res) {
        try {
            const car = await db.Car.findByPk(req.params.id);
            if (!car) {
                return res.status(404).json({ success: false, error: 'Автомобиль не найден' });
            }
            res.json({ success: true, data: car });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },

    async createCar(req, res) {
        try {
            const car = await db.Car.create(req.body);
            res.status(201).json({ success: true, data: car });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },

    async updateCar(req, res) {
        try {
            const car = await db.Car.findByPk(req.params.id);
            if (!car) {
                return res.status(404).json({ success: false, error: 'Автомобиль не найден' });
            }
            await car.update(req.body);
            res.json({ success: true, data: car });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },

    async deleteCar(req, res) {
        try {
            const car = await db.Car.findByPk(req.params.id);
            if (!car) {
                return res.status(404).json({ success: false, error: 'Автомобиль не найден' });
            }
            await car.destroy();
            res.json({ success: true, message: 'Автомобиль удалён' });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },

    async getSeries(req, res) {
        try {
            const series = await db.Car.findAll({
                attributes: [[db.sequelize.fn('DISTINCT', db.sequelize.col('series')), 'series']],
                raw: true
            });
            res.json({ success: true, data: series.map(s => s.series) });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }
};

module.exports = carController;