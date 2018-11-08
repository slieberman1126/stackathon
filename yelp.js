const yelp = require('yelp-fusion');
const apiKey = require('./secrets').apiKey;

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
