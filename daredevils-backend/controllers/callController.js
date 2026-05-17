const db = require('../models');

const callController = {
    async createCallRequest(req, res) {
        try {
            const request = await db.CallRequest.create(req.body);
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
            
            const requests = await db.CallRequest.findAll({
                where,
                order: [['createdAt', 'DESC']]
            });
            res.json({ success: true, data: requests });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },

    async updateRequestStatus(req, res) {
        try {
            const request = await db.CallRequest.findByPk(req.params.id);
            if (!request) {
                return res.status(404).json({ success: false, error: 'Заявка не найдена' });
            }
            await request.update({ status: req.body.status, notes: req.body.notes });
            res.json({ success: true, data: request });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }
};

module.exports = callController;