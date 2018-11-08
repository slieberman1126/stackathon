const express = require('express');
const router = express.Router();
const { Restaurant, Neighborhood } = require('../db').models;

router.get('/', (req, res, next) => {
  Neighborhood.findAll()
    .then(neighborhoods => res.send(neighborhoods))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  Neighborhood.findById(req.params.id, {
    include: [Restaurant],
  })
    .then(neighborhoods => res.send(neighborhoods))
    .catch(next);
});

module.exports = router;
