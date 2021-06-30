var primeTester = function (n) {
  if(n >= 0 && Number.isInteger(n)) {
    if(n < 2) {
      return false;
    }
    for(let i=2; i <= Math.sqrt(n); i++) {
      if(n % i === 0) {
        return false;
      }
    }
    return true;
  }
}


/**
 * Return an array of integers that are the prime factors of a given natural.
 * In: range in which to find primes; range is (min, max)
 * Out: array of prime in range. 
 * Constraints: min >=0; min and max are in naturals
 * Edge: none
 */
var primeSieve = function (min, max) {

  // marks all multiples of a number as non-prime
  const markPrimes = function(num) {
    for(let multiplier = 2; multiplier * num < isPrimeArr.length; multiplier++) {
      isPrimeArr[multiplier * num] = false;
    }
  }

  // generate array of booleans
  let isPrimeArr = [];
  for(let i=0; i<max+1; i++) {
    isPrimeArr.push(true);
  }
  // skip 0 and 1
  if(isPrimeArr.length > 0) {
    isPrimeArr[0] = false;
    if(isPrimeArr.length > 1) {
      isPrimeArr[1] = false;
    }
  }
  // iterate through factors
  for(let i = 2; i <= Math.sqrt(isPrimeArr.length); i++) {
    if(isPrimeArr[i]) {
      if(primeTester(i)) {
        markPrimes(i);
      }
    }
  }

  //generate array of primes
  let primeArr = [];
  for(let i=min; i<isPrimeArr.length; i++) {
    if(isPrimeArr[i]) {
      primeArr.push(i);
    }
  }

  return primeArr;
}


console.log(primeSieve(1, 5))
console.log(primeSieve(3, 10))
console.log(primeSieve(4, 25))
console.log(primeSieve(1, 2))
console.log(primeSieve(23, 29))


/**
 * Return an array of integers that are the prime factors of a given natural.
 * In: natural number
 */
var primeFactors = function(n) {
  //TODO: implement
}
