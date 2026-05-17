const db = require('../models');

const creditController = {
    async createCreditRequest(req, res) {
        try {
            const request = await db.CreditRequest.create(req.body);
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
            
            const requests = await db.CreditRequest.findAll({
                where,
                include: [{ model: db.Car, as: 'car' }],
                order: [['createdAt', 'DESC']]
            });
            res.json({ success: true, data: requests });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },

    async getRequestById(req, res) {
        try {
            const request = await db.CreditRequest.findByPk(req.params.id, {
                include: [{ model: db.Car, as: 'car' }]
            });
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
            const request = await db.CreditRequest.findByPk(req.params.id);
            if (!request) {
                return res.status(404).json({ success: false, error: 'Заявка не найдена' });
            }
            await request.update({ status: req.body.status });
            res.json({ success: true, data: request });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },

    async calculatePayment(req, res) {
        try {
            const { price, initialPayment, term, rate = 15 } = req.body;
            const loanAmount = price - (price * initialPayment / 100);
            const monthlyRate = rate / 100 / 12;
            const monthlyPayment = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, term) / (Math.pow(1 + monthlyRate, term) - 1);
            
            res.json({
                success: true,
                data: {
                    monthlyPayment: Math.round(monthlyPayment),
                    totalPayment: Math.round(monthlyPayment * term),
                    overpayment: Math.round(monthlyPayment * term - loanAmount)
                }
            });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }
};

module.exports = creditController;