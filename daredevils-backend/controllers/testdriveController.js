const db = require('../models');

const testdriveController = {
    async createTestDriveRequest(req, res) {
        try {
            const request = await db.TestDriveRequest.create(req.body);
            res.status(201).json({ success: true, data: request });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },

    async getAllRequests(req, res) {
        try {
            const { status } = req.query;
            const where = {};
            if (status) where.status = status;
            
            const requests = await db.TestDriveRequest.findAll({
                where,
                include: [{ model: db.Car, as: 'car' }],
                order: [['preferredDate', 'ASC']]
            });
            res.json({ success: true, data: requests });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },

    async getRequestsByCar(req, res) {
        try {
            const requests = await db.TestDriveRequest.findAll({
                where: { carId: req.params.carId },
                order: [['createdAt', 'DESC']]
            });
            res.json({ success: true, data: requests });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },

    async updateRequestStatus(req, res) {
        try {
            const request = await db.TestDriveRequest.findByPk(req.params.id);
            if (!request) {
                return res.status(404).json({ success: false, error: 'Заявка не найдена' });
            }
            await request.update({ status: req.body.status });
            res.json({ success: true, data: request });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }
};

module.exports = testdriveController;