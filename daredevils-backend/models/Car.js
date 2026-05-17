const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Car = sequelize.define('Car', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        model: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        series: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(12, 2),
            allowNull: false,
            validate: {
                min: 0
            }
        },
        engine: {
            type: DataTypes.STRING(100)
        },
        transmission: {
            type: DataTypes.STRING(50)
        },
        drive: {
            type: DataTypes.STRING(50)
        },
        acceleration: {
            type: DataTypes.STRING(50)
        },
        fuelConsumption: {
            type: DataTypes.STRING(50),
            field: 'fuel_consumption'
        },
        imageUrl: {
            type: DataTypes.STRING(500),
            field: 'image_url'
        },
        isAvailable: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            field: 'is_available'
        },
        description: {
            type: DataTypes.TEXT
        }
    }, {
        tableName: 'cars',
        timestamps: true,
        underscored: true
    });

    return Car;
};