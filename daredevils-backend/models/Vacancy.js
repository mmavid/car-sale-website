const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Vacancy = sequelize.define('Vacancy', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        category: {
            type: DataTypes.ENUM('sales', 'service', 'finance', 'admin'),
            allowNull: false
        },
        salary: {
            type: DataTypes.STRING(100)
        },
        description: {
            type: DataTypes.TEXT
        },
        requirements: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
            defaultValue: []
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            field: 'is_active'
        }
    }, {
        tableName: 'vacancies',
        timestamps: true,
        underscored: true
    });

    return Vacancy;
};