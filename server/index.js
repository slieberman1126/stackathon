const path = require('path');
const express = require('express');

const db = require('./db/index');
//const { syncAndSeed } = db;
const restaurants = require('./api/restaurants');
const neighborhoods = require('./api/neighborhoods');
const app = express();
const PORT = process.env.PORT || 3000;

//syncAndSeed();
app.use('/api/neighborhoods', neighborhoods);
app.use('/api/restaurants', restaurants);
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));

app.get('/', (req, res, next) =>
  res.sendFile(path.join(__dirname, '..', 'index.html'))
);

db.sync()
  .then(() => {
    return db.seed();
  })
  .then(() => console.log("Database Sync'ed and Seeded"))
  .then(() => app.listen(PORT, () => console.log(`Listening on Port ${PORT}`)));
