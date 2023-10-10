const express = require('express');
const router = express.Router();

const {
  IncreaseCounter
} = require('../controllers/CounterController');

router.post('/', IncreaseCounter);

module.exports = router;
