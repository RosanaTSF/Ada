const number = 13;

console.log(number, typeof number);

const numberEmFormatoDeString = String(number);
console.log(numberEmFormatoDeString, typeof numberEmFormatoDeString);

console.log(Number('132213'));
console.log(parseFloat('131312.00'));
console.log('0000.13');
console.log(Boolean('0'));

// Coerção implícita de tipos:

let n = 1 + "1"; //11
n = - 1;

console.log(n); //-1
console.log(2 + 3 + 4 + "5"); //95
console.log("5" + 2 + 3 + 4); //5234
console.log("10" - "4" - "3" - 2 + "5"); //15