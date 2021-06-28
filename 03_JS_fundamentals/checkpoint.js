/**
 * Determine output value of result
 */
var x = 10;

function outer () {
  var x = 20;
  function inner () {
    return x;
  }
  return inner();
}

var result1 = outer();
console.log(result1);


/**
 * Returns true if oddd, false otherwise. 
 * Cannot use "%" amd should be recursive. 
 */
const isOdd = function (value) {
  if(value <= 0) {
    return false;
  } else if (value === 1) {
    return true;
  }
  return isOdd(value - 2);
}


/**
 * Take an array of numbers and return a modified array
 * without using a loop. 
 * Modification is multiplication by the second argument.
 */
const multiplyNumbers = function(array, multiplier) {
  let modArr = []
  if(array.length === 0) {
    return modArr;
  } else {
    modArr = multiplyNumbers(array.slice(1), multiplier)
    modArr.unshift(array[0] * multiplier);
  }
  return modArr;
}


/**
 * Takes a string and doubles each character without using a loop. 
 */
const doubleLetters = function(string) {
  let modStr = "";
  if(string.length === 0) {
    return modStr;
  } else {
    modStr = string.charAt(0) + string.charAt(0) + doubleLetters(string.slice(1));
  }
  return modStr;
}

/**
 * make result remove even numbers, multiply by 10, and multiply together
 */
let numbers = [1, 2, 3, 4, 5, 6];
let result = numbers
  .filter(num => num % 2 === 1)
  .map(num => num * 10)
  .reduce((acc, num) => acc * num, 1);
console.log(result);
