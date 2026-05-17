const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const TradeInRequest = sequelize.define('TradeInRequest', {
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
        currentCarBrand: {
            type: DataTypes.STRING(100),
            field: 'current_car_brand'
        },
        currentCarModel: {
            type: DataTypes.STRING(100),
            field: 'current_car_model'
        },
        currentCarYear: {
            type: DataTypes.INTEGER,
            field: 'current_car_year'
        },
        desiredCarId: {
            type: DataTypes.INTEGER,
            field: 'desired_car_id'
        },
        estimatedValue: {
            type: DataTypes.DECIMAL(10, 2),
            field: 'estimated_value'
        },
        status: {
            type: DataTypes.ENUM('new', 'evaluating', 'approved', 'rejected'),
            defaultValue: 'new'
        }
    }, {
        tableName: 'trade_in_requests',
        timestamps: true,
        underscored: true
    });

    return TradeInRequest;
};