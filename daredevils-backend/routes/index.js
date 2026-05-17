const express = require('express');
const router = express.Router();

const carRoutes = require('./carRoutes');
const vacancyRoutes = require('./vacancyRoutes');
const partnershipRoutes = require('./partnershipRoutes');
const serviceRoutes = require('./serviceRoutes');
const creditRoutes = require('./creditRoutes');
const tradeinRoutes = require('./tradeinRoutes');
const testdriveRoutes = require('./testdriveRoutes');
const callRoutes = require('./callRoutes');

router.use('/cars', carRoutes);
router.use('/vacancies', vacancyRoutes);
router.use('/partnership', partnershipRoutes);
router.use('/service', serviceRoutes);
router.use('/credit', creditRoutes);
router.use('/tradein', tradeinRoutes);
router.use('/testdrive', testdriveRoutes);
router.use('/calls', callRoutes);

router.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date() });
});

module.exports = router;