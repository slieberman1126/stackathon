const express = require('express');
const router = express.Router();
const { Restaurant } = require('../db').models;

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

module.exports = router;
