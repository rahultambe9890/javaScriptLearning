let arrayOfNumbers = [5, 10, 4, 6, 7, 10, 8, 9];
console.log(arrayOfNumbers);
console.log(
  `-------------.1) Total number of elements available in array--------------`
);
let totalElements = arrayOfNumbers.length;
console.log(
  `Total number of elements in totalElements is --> ${totalElements}`
);
let typeOfArray = typeof arrayOfNumbers;
console.log(typeOfArray);

console.log(` .2) Traversing array using for loop in Reverse order`);
// initialization   condition  update
let lastIndex = arrayOfNumbers.length - 1;
for (let index = lastIndex; index >= 0; index--) {
  const element = arrayOfNumbers[index];
  console.log(element);
}

console.log(`.3) --------------- Accesing array elements -----------------`);
let elementAtZeroIndex = arrayOfNumbers[0];
console.log(`Element at Zero Index : ${elementAtZeroIndex}`);
console.log(`Element at fifth index : ${arrayOfNumbers[4]}`);

console.log(`Last element : ${totalElements - 1}`);

console.log(` When provide value is greater than length :${arrayOfNumbers[9]}`);

arrayOfNumbers[2] = 100;
console.log(arrayOfNumbers);

let indexOf8 = arrayOfNumbers.indexOf(8);
console.log(`Index of element 7 :${indexOf8}`);

console.log(`Array of salary `);

let arrayOfSalary = [10000, 20000, 30000, 40000];
let sumOfSal = 0;
for (let index = 0; index < arrayOfSalary.length; index++) {
  const element = arrayOfSalary[index];
  sumOfSal = sumOfSal + element;
  console.log(` total salary of all employee ${sumOfSal}`);
}

console.log(`======== push() methods=========`);
let arrayOfNum1 = [4, 5, 6, 8, 9, 1];
console.log(arrayOfNum1);
arrayOfNum1.push(3);
console.log(arrayOfNum1);

console.log(`======== unshift() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 1];
console.log(arrayOfNum);
arrayOfNum.unshift(77);
arrayOfNum.unshift(99, 111, 333);
console.log(arrayOfNum);

console.log(`======== pop() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33];
let popResult1 = arrayOfNum.pop();
console.log(popResult1);
console.log(arrayOfNum);

console.log(`======== shift() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33];
let shiftResult1 = arrayOfNum.shift();
console.log(shiftResult1);
console.log(arrayOfNum);

console.log(`======== slice() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let sliceResult = arrayOfNum.slice(3);
let sliceRes = arrayOfNum.slice(2, 5);
console.log(arrayOfNum);
console.log(sliceResult);
console.log(sliceRes);

console.log(`======== splice() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
let spliceResult = arrayOfNum.splice(3);
console.log("fter using splice(3) method");
console.log("Array after deleting elements ", arrayOfNum);
console.log("Total deleted elements: ", spliceResult);

var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
let spliceRes = arrayOfNum.splice(2, 3);
console.log(`After using splice(2, 3) method `);
console.log("Array after deleting elements ", arrayOfNum);
console.log("Total deleted elements: ", spliceRes);

console.log("====== Inserting element in the array =======");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
arrayOfNum.splice(2, 0, 88);
console.log(arrayOfNum);
arrayOfNum.splice(1, 0, 55, 99, 22);
console.log(arrayOfNum);

console.log("====== Replacing element in the array =======");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
arrayOfNum.splice(3, 1, 22);
console.log(arrayOfNum);

console.log(
  "====== Replacing element in the array when splice(2, 3, 99, 77 ) ======="
);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
arrayOfNum.splice(2, 3, 99, 77);
console.log(arrayOfNum);

console.log(`======== for of loop ==========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
for (const element of arrayOfNum) {
  console.log(element);
}

console.log("==========include() ========");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let isAvailable = arrayOfNum.includes(9);
console.log(isAvailable);

console.log(`======== concat() ==========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let arrayOfNames = ["Moni", "Jenny", "Shenny", "Tomy"];
let arrayOfCities = ["Pune", "Mumbai", "Banglore"];
const concatArray = arrayOfNum.concat(arrayOfNames, arrayOfCities);
console.log(concatArray);