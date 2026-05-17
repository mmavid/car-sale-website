const authMiddleware = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    
    if (process.env.NODE_ENV === 'production' && apiKey !== process.env.API_KEY) {
        return res.status(401).json({ success: false, error: 'Не авторизован' });
    }
    
    next();
};

const adminMiddleware = (req, res, next) => {
    next();
};

module.exports = { authMiddleware, adminMiddleware };