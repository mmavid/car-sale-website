const db = require('../models');

const serviceController = {
    async createServiceRequest(req, res) {
        try {
            const request = await db.ServiceRequest.create(req.body);
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
            
            const requests = await db.ServiceRequest.findAll({
                where,
                order: [['preferredDate', 'ASC'], ['createdAt', 'DESC']]
            });
            res.json({ success: true, data: requests });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },

    async getRequestById(req, res) {
        try {
            const request = await db.ServiceRequest.findByPk(req.params.id);
            if (!request) {
                return res.status(404).json({ success: false, error: 'Заявка не найдена' });
            }
            res.json({ success: true, data: request });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },

    async updateRequestStatus(req, res) {
        try {
            const request = await db.ServiceRequest.findByPk(req.params.id);
            if (!request) {
                return res.status(404).json({ success: false, error: 'Заявка не найдена' });
            }
            await request.update({ status: req.body.status });
            res.json({ success: true, data: request });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },

    async getStatistics(req, res) {
        try {
            const stats = await db.ServiceRequest.findAll({
                attributes: [
                    'status',
                    [db.sequelize.fn('COUNT', db.sequelize.col('status')), 'count']
                ],
                group: ['status']
            });
            res.json({ success: true, data: stats });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }
};

module.exports = serviceController;