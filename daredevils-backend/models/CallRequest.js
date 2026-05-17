const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const CallRequest = sequelize.define('CallRequest', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        preferredTime: {
            type: DataTypes.STRING(50),
            field: 'preferred_time'
        },
        status: {
            type: DataTypes.ENUM('new', 'processed', 'failed'),
            defaultValue: 'new'
        },
        notes: {
            type: DataTypes.TEXT
        }
    }, {
        tableName: 'call_requests',
        timestamps: true,
        underscored: true
    });

    return CallRequest;
};