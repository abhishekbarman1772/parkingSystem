const express = require('express');
require('express-async-errors');
const errHandler = require('../middleware/error');

const router = express.Router();
const parking = require('./parking');

router.use('/parking', parking);

router.use(errHandler);

module.exports = router;
