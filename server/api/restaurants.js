const express = require('express');
const router = express.Router();
const { Restaurant } = require('../db').models;
const yelp = require('yelp-fusion');
const { apiKey } = require('../../secrets');
router.get('/', (req, res, next) => {
  Restaurant.findAll()
    .then(restaurants => res.send(restaurants))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  Restaurant.findById(req.params.id)
    .then(restaurant => res.send(restaurant))
    .catch(next);
});
/*router.post('/', async (req, res, next) => {
  try {
    const searchRequest = {
      term: 'pizza',
      location: 'new york, ny',
    };
    const client = yelp.client(apiKey);
    const result = await client.search(searchRequest);
    const result2 = result.jsonBody.businesses;
    res.json(result2);
  } catch (error) {
    next(error);
  }
});*/

module.exports = router;
