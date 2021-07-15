function telephoneWords(digits) {

  const phoneDigitsToLetters = {
    0: '0',
    1: '1',
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ'
  };

    let permutations = [];
    let firstDigit = digits.charAt(0);
    let firstDigitLetters = phoneDigitsToLetters[firstDigit]
    // digits: 2; firstDigitLetters: 'ABC'
    
    for (let i = 0; i < firstDigitLetters.length; i++){
      
      permutations.push(`${firstDigitLetters.charAt(i)}${digits.slice(1)}`)
    }

    //permutations.push(digits);
    return permutations;
}

module.exports = telephoneWords;


/*
for (let i = 0; i < firstDigitLetters.length; i++){
  
  permutations.push(`${firstDigitLetters.charAt(i)}${digits.slice(1)}`)
  for (let j = 0; i < firstDigitLetters.length; i++){

    for (let k = 0; i < firstDigitLetters.length; i++){
      
      for (let m = 0; i < firstDigitLetters.length; i++){
      
        // let ACC = [i j k m]
        permutations.push(`${firstDigitLetters.charAt(i)}${digits.slice(1)}`)
      }
    }
  }
}
*/
