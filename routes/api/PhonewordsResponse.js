const express = require('express');
const router = express.Router();
const { json, validate, errorMessages } = require('./models/PhonewordsModel');
const phonewordsAlgorithm = require('./PhonewordsAlgorithm');

// Create response
module.exports = router.all('/:number', (req, res) => {
  let responseData = {};

  console.log(req.params.number);

  if (validate(req.params.number)) {
    phonewords = phonewordsAlgorithm(req.params.number);
    responseData = json(true, phonewords, '');
    res.statusCode = 200;
  } else {
    responseData = json(false, [], 'This is not a valid digit number.');
    res.statusCode = 400;
  }

  res.set('Access-Control-Allow-Origin', '*');
  res.json(responseData);
});
