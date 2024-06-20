const express = require('express');
const app = express.Router();
const authController = require('../controllers/auth.controller');
const auth = require('../middlewares/jwt.middleware');

app.post('/signin', authController.signin);

app.post('/check', [auth], authController.check);

module.exports = app;
