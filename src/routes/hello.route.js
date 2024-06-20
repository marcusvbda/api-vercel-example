const express = require('express');
const app = express.Router();

const exampleController = require('../controllers/example.controller');

app.get('/world', exampleController.helloWorld);

module.exports = app;
