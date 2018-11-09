const Sequelize = require('sequelize');
const conn = require('./conn');

const Restaurant = conn.define('restaurant', {
  name: {
    type: Sequelize.STRING,
  },
  rating: {
    type: Sequelize.INTEGER,
  },
  reviewCount: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  url: {
    type: Sequelize.STRING,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  zipcode: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
});
module.exports = Restaurant;
