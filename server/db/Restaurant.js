const Sequelize = require('sequelize');
const conn = require('./conn');

const Restaurant = conn.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rating: {
    type: Sequelize.INTEGER,
  },
  reviewCount: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  categories: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  latitude: {
    type: Sequelize.DECIMAL,
  },
  longitude: {
    type: Sequelize.DECIMAL,
  },

  imageUrl: {
    type: Sequelize.STRING,
  },
});
module.exports = Restaurant;
