const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>Welcome to Stock Web Service!</h1>')
});

router.get('/add-item', (req, res) => {
  res.send('<h1>This is add-item service.</h1>')
});

router.post('/add-item', (req, res) => {
    
});

module.exports = router;