const Sequelize = require('sequelize');
const conn = require('./conn');

const Restaurant = conn.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  reviewCount: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  zipcode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = Restaurant;
