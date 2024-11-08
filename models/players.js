const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Player = sequelize.define('player', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: Sequelize.STRING,
  dob: Sequelize.STRING,
  imageUrl: Sequelize.STRING,
  birthPlace: Sequelize.STRING,
  career: Sequelize.TEXT,
  numberOfMatches: Sequelize.INTEGER,
  score: Sequelize.INTEGER,
  fifties: Sequelize.INTEGER,
  centuries: Sequelize.INTEGER,
  wickets: Sequelize.INTEGER,
  average: Sequelize.DOUBLE,
});

module.exports = Player;
