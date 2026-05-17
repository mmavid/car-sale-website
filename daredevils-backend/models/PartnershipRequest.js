const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const PartnershipRequest = sequelize.define('PartnershipRequest', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        companyName: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: 'company_name'
        },
        contactName: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: 'contact_name'
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        direction: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        city: {
            type: DataTypes.STRING(100)
        },
        message: {
            type: DataTypes.TEXT
        },
        status: {
            type: DataTypes.ENUM('new', 'processing', 'approved', 'rejected'),
            defaultValue: 'new'
        }
    }, {
        tableName: 'partnership_requests',
        timestamps: true,
        underscored: true
    });

    return PartnershipRequest;
};