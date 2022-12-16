console.log(`1)`);
var greatest = function (num1,num2)
 {var result = (num1>num2)? `The greatest number among "${num1}" and "${num2}" is ${num1}.`
 
 :`The greatest number among "${num1}" and "${num2}" is ${num2}.`;
 console.log(result);}
greatest (10,-10);
greatest (808,899);
console.log(`===============================================================`)
console.log(`2)`);
var evenorodd = function (num1){
var newResult = num1%2==0? `The number ${num1} is EVEN Number.`
 : `The number ${num1} is ODD Number.`
console.log(newResult);}
evenorodd (29);
evenorodd(44);
evenorodd(0);
evenorodd(101);
console.log(`===============================================================`)
console.log(`3)`);
var evenoddLength = function (value) {
var res = value.length%2==0? `The length of word "${value}" is EVEN. `
: `The length of word "${value}" is ODD.`;
console.log(res);
}
evenoddLength("Javascript");
evenoddLength("Developer");
evenoddLength("Google")
