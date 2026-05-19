// src/middleware/errorHandler.js
module.exports = (err, req, res, next) => {
  console.error(`[${new Date().toISOString()}] ${err.stack}`);
  res.status(err.status || 500).json({
    error: err.message || 'Внутренняя ошибка сервера',
  });
};
