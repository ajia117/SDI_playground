var toFraction = function(number) {
    // check if negative
    let negative = number < 0
    number = Math.abs(number)
  
    // find the number of decimal digits and parse the digits as a separate number
    var numString = number.toString();
    var decimalPos = numString.indexOf(".");
  
  
    if (decimalPos === -1) {
      return `${number}/1`;
    };
  
    var floatLength = numString.length;
    var floatNum = floatLength - decimalPos - 1;
    var afterDec = numString.slice((decimalPos + 1));
    var numerator = Math.trunc(number) * Math.pow(10, floatNum) + Number(afterDec);
    var denominator = Math.pow(10, floatNum);
  
    let n = 2;
    while (n < denominator) {
      if (numerator % n === 0 && denominator % n === 0) {
        numerator = numerator / n;
        denominator = denominator / n;
      } else {
        n++;
      }
    }
  if(!negative) {
    return `${numerator}/${denominator}`;
  }
  return `-${numerator}/${denominator}`;
};