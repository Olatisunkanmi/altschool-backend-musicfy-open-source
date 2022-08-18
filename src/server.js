const express = require('express');
require('express-async-errors');

const app = express();
require('dotenv').config();

// built-in path module
const path = require('path');

// port to be used
const PORT = process.env.PORT || 5000;

// setup public to serve staticfiles

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('port', PORT);

const searchrouter = require('./route');

//the search route endpoint 
app.use('/search', searchrouter);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, (req, res) => {
  console.log(`Server is listening on port ${PORT}`);
});
