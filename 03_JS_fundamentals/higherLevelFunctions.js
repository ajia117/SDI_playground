//const numbers = [1, 2, 3, 4, 5]
//let numbersTimesTen = numbers.map((x) => {
//  return x * 10
//})

//const numbers = [1, 2, 3, 4, 5, 10, 70, 80, 90, 100]
//let numbersGreaterThan50 = numbers.filter(x => {
//  return x > 50
//})

const numbers = [1, 2, 2, 10]
let sum = numbers.reduce((x, y) => x+y, 0)

const students = [
  { name: "Stephen", age: 24 },
  { name: "Alice", age: 19 },
  { name: "Jordan", age: 29 },
  { name: "Julie", age: 21 },
  { name: "Chris", age: 26 }
]

let averageAge = students.map(student => {
  return student.age
}).reduce((x, y) => x+y, 0) / students.length