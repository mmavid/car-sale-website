const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const TestDriveRequest = sequelize.define('TestDriveRequest', {
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
        preferredDate: {
            type: DataTypes.DATE,
            field: 'preferred_date'
        },
        status: {
            type: DataTypes.ENUM('new', 'confirmed', 'completed', 'cancelled'),
            defaultValue: 'new'
        },
        carId: {
            type: DataTypes.INTEGER,
            field: 'car_id'
        }
    }, {
        tableName: 'test_drive_requests',
        timestamps: true,
        underscored: true
    });

    return TestDriveRequest;
};