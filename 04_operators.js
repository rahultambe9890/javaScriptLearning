var num1 = 10;
var num2 = 5;


var addResult = num1+num2
console.log(`================== Arithmatic  Operators ==================`);
console.log( `Addition is ${addResult }`);
console.log(`Subtraction is ${ num1-num2}`);
console.log( `Multification is ${ num1*num2}`);
console.log(`Division is ${ num1/num2}`);
console.log(`Modulus is ${num1% num2 }`);
console.log(`Modulus is ${num1% 4}`);
console.log(`Modulus is ${ num1 % 3}`);
console.log(`============ Unary Operators =================`);
var num3 = 10;
var result = ++num3; // num3 = num3 + 1;
console.log(`Increment operator  result is ${result}`);

var num4 = 5;
var res = --num4; //num4 -1;
console.log(`Decrement operator result is ${res}`);

console.log(`================== Assignment Oprateros ===================`);

num1 += num2;
console.log(`Compound Addition ${ num1}`);
num1-= num2;
console.log(`Compound Subtraction is ${ num1}`);
