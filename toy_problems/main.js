var a = 0;
var b = 0;

function makeIncrementer() {
  var c = 0;
  a += 1;
  return function() {
    b += 1;
    c += 1;
    return c;
  }
}

var myIncrementerX = makeIncrementer();
console.log(`${a}, ${b}`)
myIncrementerX();
console.log(`${a}, ${b}`)
myIncrementerX();
console.log(`${a}, ${b}`)

var myIncrementerY = makeIncrementer();
console.log(`${a}, ${b}`)
myIncrementerY();
myIncrementerY();
myIncrementerY();

var result1 = myIncrementerX();
console.log(`${a}, ${b}`)
var result2 = myIncrementerY();
var result3 = a;
var result4 = b;