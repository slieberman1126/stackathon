const Sequelize = require('sequelize');
const conn = require('./conn');
const Op = Sequelize.Op;

const Neighborhood = conn.define('neighborhood', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  zipcodes: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
  },
});

Neighborhood.findByZipcode = function(zipcode) {
  return this.findAll({
    where: {
      zipcodes: {
        [Op.contains]: [zipcode],
      },
    },
  });
};
/*Neighborhood.afterValidate(neighborhood => {
  if (typeof neighborhood.zipcodes === 'string') {
    neighborhood.zipcodes = neighborhood.zipcodes.split(', ');
  }
});*/

module.exports = Neighborhood;
