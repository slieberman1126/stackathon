const Sequelize = require('sequelize');
const conn = require('./conn');

const Neighborhood = conn.define('neighborhood', {
  name: {
    type: Sequelize.STRING,
  },
  zipcodes: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
});

module.exports = Neighborhood;
