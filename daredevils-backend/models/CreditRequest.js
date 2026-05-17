const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const CreditRequest = sequelize.define('CreditRequest', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fullName: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: 'full_name'
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255)
        },
        initialPayment: {
            type: DataTypes.DECIMAL(10, 2),
            field: 'initial_payment'
        },
        creditTerm: {
            type: DataTypes.INTEGER,
            field: 'credit_term'
        },
        monthlyPayment: {
            type: DataTypes.DECIMAL(10, 2),
            field: 'monthly_payment'
        },
        status: {
            type: DataTypes.ENUM('new', 'processing', 'approved', 'rejected'),
            defaultValue: 'new'
        },
        carId: {
            type: DataTypes.INTEGER,
            field: 'car_id'
        }
    }, {
        tableName: 'credit_requests',
        timestamps: true,
        underscored: true
    });

    return CreditRequest;
};