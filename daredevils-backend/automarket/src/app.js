// src/app.js
const express      = require('express');
const cors         = require('cors');
const morgan       = require('morgan');
const path         = require('path');

const { sequelize } = require('./models');
const carRoutes     = require('./routes/carRoutes');
const userRoutes    = require('./routes/userRoutes');
const orderRoutes   = require('./routes/orderRoutes');
const errorHandler  = require('./middleware/errorHandler');

const app  = express();
const PORT = process.env.PORT || 3000;

// ─── Middleware ──────────────────────────────────────────────
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, '../public')));

// ─── API Routes ──────────────────────────────────────────────
app.use('/api/cars',   carRoutes);
app.use('/api/users',  userRoutes);
app.use('/api/orders', orderRoutes);

// ─── Health check ────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// ─── 404 ─────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: `Маршрут ${req.method} ${req.path} не найден` });
});

// ─── Error handler ───────────────────────────────────────────
app.use(errorHandler);

// ─── Start ───────────────────────────────────────────────────
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Подключение к БД установлено');
    await sequelize.sync({ alter: true });
    console.log('✅ Модели синхронизированы');
    app.listen(PORT, () => {
      console.log(`🚗 AutoMarket API запущен: http://localhost:${PORT}`);
      console.log(`📚 Документация: http://localhost:${PORT}/api/health`);
    });
  } catch (err) {
    console.error('❌ Ошибка запуска:', err);
    process.exit(1);
  }
})();
