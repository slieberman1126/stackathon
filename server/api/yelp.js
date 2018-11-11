const express = require('express');
const yelp = require('../../src/yelpSearch');
const router = express.Router();
module.exports = router;

router.get('/:yelpId', (req, res, next) => {
  yelp
    .yelpSearch(req.params.yelpId)

    .then(reviews => res.send(reviews))
    .catch(next);
});
