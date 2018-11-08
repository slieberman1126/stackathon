const express = require('express');
const router = express.Router();
const { Restaurant, Neighborhood } = require('./db').models;

router.get('/api/restaurants', (req, res, next) => {
  Restaurant.findAll()
    .then(restaurants => res.send(restaurants))
    .catch(next);
});

router.get('/api/restaurants/:id', (req, res, next) => {
  Restaurant.findById(req.params.id)
    .then(restaurant => res.send(restaurant))
    .catch(next);
});

router.get('/api/neighborhoods', (req, res, next) => {
  Neighborhood.findAll()
    .then(neighborhoods => res.send(neighborhoods))
    .catch(next);
});

router.get('/api/neighborhoods/:id', (req, res, next) => {
  Neighborhood.findById(req.params.id, {
    include: [Restaurant],
  })
    .then(neighborhoods => res.send(neighborhoods))
    .catch(next);
});

module.exports = router;
