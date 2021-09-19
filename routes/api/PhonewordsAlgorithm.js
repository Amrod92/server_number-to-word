module.exports = function PhonewordsAlgorithm(number) {
  // Object containing keypad numbers: 'letters'
  const letters_2_numbers = {
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ'
  };
  let result = [];

  // Loop to each digit
  for (const currentNumber of number) {
    const add_phonewords = [];
    const letters = letters_2_numbers[currentNumber];

    if (letters) {
      for (const letter of letters) {
        if (result.length) {
          for (let i = result.length - 1; i >= 0; i--) {
            // Push letter inside if there's something already
            add_phonewords.push(result[i] + letter);
          }
        } else {
          // Push letter at the beginning
          add_phonewords.push(letter);
        }
      }
    } else {
      add_phonewords.push(...result);
    }
    result = add_phonewords;
  }
  return result;
};
