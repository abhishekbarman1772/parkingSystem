const express = require('express');

const app = express.Router();

const ParkingController = require('../controllers/ParkingController');

const { park, unpark, getPark } = new ParkingController();

app.post('/park', park);
app.put('/unpark', unpark);
app.get('/park', getPark);

module.exports = app;
