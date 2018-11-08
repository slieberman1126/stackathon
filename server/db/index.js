const Sequelize = require('sequelize');
const conn = require('./conn');
const Restaurant = require('./Restaurant');
const Neighborhood = require('./Neighborhood');
const { createNeighborhoods } = require('./seed');
Restaurant.belongsTo(Neighborhood);
Neighborhood.hasMany(Restaurant);

const sync = () => {
  return conn.sync({ force: true });
};
const seed = () => {
  const neighborhoods = createNeighborhoods();
  return Promise.all(
    neighborhoods.map(neighborhood => Neighborhood.create(neighborhood))
  );
};

module.exports = {
  models: {
    Restaurant,
    Neighborhood,
  },
  conn,
  sync,
  seed,
};
