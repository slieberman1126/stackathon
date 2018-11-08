'use stricts';
const yelp = require('yelp-fusion');
const apiKey = require('../../secrets').apiKey;

const searchRequest = {
  term: 'pizza',
  location: 'new york, ny',
};

const client = yelp.client(apiKey);

client
  .search(searchRequest)
  .then(response => {
    const firstResult = response.jsonBody.businesses[0];
    const prettyJson = JSON.stringify(firstResult, null, 4);
    console.log(prettyJson);
  })
  .catch(e => {
    console.log(e);
  });

const getRestaurants = async searchRequest => {
  const result = await client.search(searchRequest);
  const result2 = result.jsonBody.businesses;
  const final = JSON.stringify(result2, null, 4);
};
