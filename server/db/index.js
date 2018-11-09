const Sequelize = require('sequelize');
const conn = require('./conn');
const Restaurant = require('./Restaurant');
const Neighborhood = require('./Neighborhood');
const { createNeighborhoods } = require('./seed');
const yelp = require('yelp-fusion');
const apiKey = require('../../secrets').apiKey;

const searchRequest = {
  term: 'pizza',
  location: '10026',
};

const client = yelp.client(apiKey);

Restaurant.belongsTo(Neighborhood);
Neighborhood.hasMany(Restaurant);

const sync = () => {
  return conn.sync({ force: true });
};
const seed = () => {
  const neighborhoods = createNeighborhoods();
  return Promise.all(
    neighborhoods.map(neighborhood => Neighborhood.create(neighborhood))
  )
    .then(() => client.search(searchRequest))
    .then(response => {
      const result = response.jsonBody.businesses;
      result.map(restaurant => {
        const name = restaurant.name;
        const rating = restaurant.rating;
        const reviewCount = restaurant.review_count;
        const url = restaurant.url;
        const imageUrl = restaurant.image_url;
        const zipcode = restaurant.location.zip_code;
        const address = restaurant.location.address1;
        let neighborhoodId = 0;
        neighborhoods.forEach(neighborhood => {
          if (neighborhood.zipcodes.includes(zipcode)) {
            neighborhoodId = neighborhood.id;
          }
        });
        Restaurant.create({
          name,
          rating,
          reviewCount,
          url,
          imageUrl,
          zipcode,
          address,
          neighborhoodId,
        });
      });
    });
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
