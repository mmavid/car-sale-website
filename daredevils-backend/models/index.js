const sequelize = require('../config/database');

const User = require('./User')(sequelize);
const Car = require('./Car')(sequelize);
const Vacancy = require('./Vacancy')(sequelize);
const JobApplication = require('./JobApplication')(sequelize);
const PartnershipRequest = require('./PartnershipRequest')(sequelize);
const ServiceRequest = require('./ServiceRequest')(sequelize);
const CreditRequest = require('./CreditRequest')(sequelize);
const TradeInRequest = require('./TradeInRequest')(sequelize);
const TestDriveRequest = require('./TestDriveRequest')(sequelize);
const CallRequest = require('./CallRequest')(sequelize);

Vacancy.hasMany(JobApplication, { foreignKey: 'vacancyId', as: 'applications' });
JobApplication.belongsTo(Vacancy, { foreignKey: 'vacancyId', as: 'vacancy' });

Car.hasMany(CreditRequest, { foreignKey: 'carId', as: 'creditRequests' });
CreditRequest.belongsTo(Car, { foreignKey: 'carId', as: 'car' });

Car.hasMany(TestDriveRequest, { foreignKey: 'carId', as: 'testDrives' });
TestDriveRequest.belongsTo(Car, { foreignKey: 'carId', as: 'car' });

module.exports = {sequelize,User,Car,Vacancy,JobApplication,PartnershipRequest,ServiceRequest,CreditRequest,TradeInRequest,TestDriveRequest,CallRequest};