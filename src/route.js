const express = require('express');

const searchrouter = express.Router();

const { search } = require('./spotify');

searchrouter.route('/').get(search);

module.exports = searchrouter;
