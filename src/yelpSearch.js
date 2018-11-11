const yelpSearch = async function(yelpId) {
  const yelp = require('yelp-fusion');
  const { apiKey } = require('../secrets');
  const client = yelp.client(apiKey);
  let businessId = yelpId;
  const response = await client.reviews(businessId);
  const reviews = response.jsonBody.reviews;
  return reviews;
};

module.exports = { yelpSearch };
