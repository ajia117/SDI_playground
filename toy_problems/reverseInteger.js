function reverseInteger(number) {
  // Start from smallest to largest and build
  let reversedNum = 0
  return Math.trunc(reverseIntegerHelper(number, reversedNum))

  function reverseIntegerHelper(number, reversed) {
    // nothing left to reverse
    if(number === 0) {
      return reversed
    }
  
    //remove the smallest digit
    let newNumber = number/10
    let newDigit = Math.round((newNumber - Math.trunc(newNumber)) * 10) //rounded due to float math
    newNumber = Math.trunc(newNumber)
  
    // add the new digit and recurse
    reversed = reversed * 10 + newDigit
    return reverseIntegerHelper(newNumber, reversed)
  }
}