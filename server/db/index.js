'use strict';

const Sequelize = require('sequelize');
const conn = require('./conn');
const Restaurant = require('./Restaurant');
const Neighborhood = require('./Neighborhood');
const { createNeighborhoods, createRestaurants } = require('./seed');
const yelp = require('yelp-fusion');
const apiKey = require('../../secrets').apiKey;
const searchRequest = {
  term: 'pizza',
  location: 'manhattan, ny',
};

const client = yelp.client(apiKey);
Restaurant.belongsTo(Neighborhood);
Neighborhood.hasMany(Restaurant);

const sync = () => {
  return conn.sync({ force: true });
};
const seed = () => {
  const neighborhoods = createNeighborhoods();
  const restaurants = createRestaurants(searchRequest, client);
  console.log(restaurants);
  /*return Promise.all(
    restaurants
      .map(restaurant => Restaurant.create(restaurant))
      .then(() => {
        return Promise.all(
          neighborhoods.map(neighborhood => Neighborhood.create(neighborhood))
        );
      })
  );*/
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
