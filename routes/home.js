const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Google Services Node application. Use it wisely...');
});

module.exports = router;