const validatePhone = (phone) => {
    const phoneRegex = /^[\d\s\+\(\)\-]{10,20}$/;
    return phoneRegex.test(phone);
};

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
    return emailRegex.test(email);
};

const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ success: false, error: error.details[0].message });
        }
        next();
    };
};

module.exports = { validatePhone, validateEmail, validateRequest };