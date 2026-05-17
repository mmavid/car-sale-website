const app = require('./app');
const sequelize = require('./config/database');
const db = require('./models');

const PORT = process.env.PORT || 3000;
async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('База данных подключена успешно');

        await sequelize.sync({ alter: true });
        console.log('Модели синхронизированы');

        app.listen(PORT, () => {
            console.log(`Сервер запущен на порту ${PORT}`);
            console.log(`API доступен по адресу: http://localhost:${PORT}/api`);
            console.log(`❤️ Health check: http://localhost:${PORT}/api/health`);
        });
    } catch (error) {
        console.error('Ошибка при запуске сервера:', error);
        process.exit(1);
    }
}

process.on('SIGINT', async () => {
    console.log('Получен сигнал завершения. Закрываем соединения...');
    await sequelize.close();
    console.log('Соединение с БД закрыто');
    process.exit(0);
});

startServer();