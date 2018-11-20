'use strict';

let routes = require('express').Router();
const BerichtController = require('../controllers/bericht.controller');

// Berichten CRUD
routes.get('/berichten', BerichtController.readBerichten );
routes.post('/bericht', BerichtController.createBericht );

module.exports = routes;