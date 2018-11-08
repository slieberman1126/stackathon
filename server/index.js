const path = require('path');
const express = require('express');

const db = require('./db');
//const { syncAndSeed } = db;
//const students = require('./students');
//const schools = require('./schools');
const app = express();
const PORT = process.env.PORT || 3000;

//syncAndSeed();
//app.use('/api/schools', schools);
//app.use('/api/students', students);
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
