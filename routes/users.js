const express = require('express');
const router  = express.Router();

// Register
router.get('/register', (req, res, next) => {
  res.send('Register');
});

router.get('/authenticate', (req, res, next) => {
  res.send('authenticate');
});

router.get('/profile', (req, res, next) => {
  res.send('profile');
});

module.exports = router;
