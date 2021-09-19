const MAX_LENGTH = 9;

// Validation to check digits
const validate = number => {
  if (!number || number.length >= MAX_LENGTH) return false;
  // Regex for valid allowed digits and tasting for a match
  const reg = new RegExp('^[2-9]+$');
  return reg.test(number);
};

// JSON model to send information across
const json = (success, phonewords, error) => {
  return {
    success: success,
    phonewords: phonewords,
    error: error
  };
};

module.exports = {
  json,
  validate
};
