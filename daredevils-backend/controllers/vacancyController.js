const db = require('../models');

const vacancyController = {
    async getAllVacancies(req, res) {
        try {
            const { category, isActive } = req.query;
            const where = {};
            
            if (category && category !== 'all') where.category = category;
            if (isActive !== undefined) where.isActive = isActive === 'true';
            else where.isActive = true;
            
            const vacancies = await db.Vacancy.findAll({
                where,
                include: [{ model: db.JobApplication, as: 'applications', required: false }],
                order: [['createdAt', 'DESC']]
            });
            res.json({ success: true, data: vacancies });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },

    async getVacancyById(req, res) {
        try {
            const vacancy = await db.Vacancy.findByPk(req.params.id, {
                include: [{ model: db.JobApplication, as: 'applications' }]
            });
            if (!vacancy) {
                return res.status(404).json({ success: false, error: 'Вакансия не найдена' });
            }
            res.json({ success: true, data: vacancy });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },

    async createVacancy(req, res) {
        try {
            const vacancy = await db.Vacancy.create(req.body);
            res.status(201).json({ success: true, data: vacancy });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },

    async updateVacancy(req, res) {
        try {
            const vacancy = await db.Vacancy.findByPk(req.params.id);
            if (!vacancy) {
                return res.status(404).json({ success: false, error: 'Вакансия не найдена' });
            }
            await vacancy.update(req.body);
            res.json({ success: true, data: vacancy });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },

    async deleteVacancy(req, res) {
        try {
            const vacancy = await db.Vacancy.findByPk(req.params.id);
            if (!vacancy) {
                return res.status(404).json({ success: false, error: 'Вакансия не найдена' });
            }
            await vacancy.destroy();
            res.json({ success: true, message: 'Вакансия удалена' });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },

    async applyToVacancy(req, res) {
        try {
            const vacancy = await db.Vacancy.findByPk(req.params.id);
            if (!vacancy) {
                return res.status(404).json({ success: false, error: 'Вакансия не найдена' });
            }
            
            const application = await db.JobApplication.create({
                ...req.body,
                vacancyId: req.params.id
            });
            
            res.status(201).json({ success: true, data: application });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },

    async getApplications(req, res) {
        try {
            const applications = await db.JobApplication.findAll({
                where: { vacancyId: req.params.id },
                include: [{ model: db.Vacancy, as: 'vacancy' }],
                order: [['createdAt', 'DESC']]
            });
            res.json({ success: true, data: applications });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },

    async updateApplicationStatus(req, res) {
        try {
            const application = await db.JobApplication.findByPk(req.params.id);
            if (!application) {
                return res.status(404).json({ success: false, error: 'Отклик не найден' });
            }
            await application.update({ status: req.body.status });
            res.json({ success: true, data: application });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }
};

module.exports = vacancyController;