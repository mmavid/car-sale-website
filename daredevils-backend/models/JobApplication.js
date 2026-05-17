const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const JobApplication = sequelize.define('JobApplication', {
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
            type: DataTypes.STRING(255),
            validate: {
                isEmail: true
            }
        },
        message: {
            type: DataTypes.TEXT
        },
        resumeUrl: {
            type: DataTypes.STRING(500),
            field: 'resume_url'
        },
        status: {
            type: DataTypes.ENUM('new', 'reviewed', 'interview', 'rejected', 'accepted'),
            defaultValue: 'new'
        },
        vacancyId: {
            type: DataTypes.INTEGER,
            field: 'vacancy_id'
        }
    }, {
        tableName: 'job_applications',
        timestamps: true,
        underscored: true
    });

    return JobApplication;
};