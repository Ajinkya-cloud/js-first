let score = "Nan"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true = 1; false = 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false --> if we enter number 1 the value is true and if we enter number 0 value is false
// "" => false --> if we enter empty strings the value is false
// "ajinkya" => true --> if we enter some value in string output is true

let someNumber = 33

let stringNumber = string(someNumber)
console.log(stringNumber);