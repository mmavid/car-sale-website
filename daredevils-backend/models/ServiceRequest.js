const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const ServiceRequest = sequelize.define('ServiceRequest', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        clientName: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: 'client_name'
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        carModel: {
            type: DataTypes.STRING(100),
            field: 'car_model'
        },
        serviceType: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: 'service_type'
        },
        preferredDate: {
            type: DataTypes.DATE,
            field: 'preferred_date'
        },
        comment: {
            type: DataTypes.TEXT
        },
        status: {
            type: DataTypes.ENUM('new', 'scheduled', 'in_progress', 'completed', 'cancelled'),
            defaultValue: 'new'
        }
    }, {
        tableName: 'service_requests',
        timestamps: true,
        underscored: true
    });

    return ServiceRequest;
};