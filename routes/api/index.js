const express = require('express');
const router = express.Router();
const PhonewordsResponse = require('./PhonewordsResponse');

// Endpoint API request with URI /phonewords follow by the phone number
router.use('/phonewords', PhonewordsResponse);

router.all('/', (req, res) => {
  // Example API
  res.json({ 'phonewords example': `${req.baseUrl}/phonewords/345` });
});

module.exports = router;
