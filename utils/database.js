const Sequelize = require('sequelize');
const sequelize = new Sequelize('playerdata', 'root', '876722', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
