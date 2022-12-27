console.log(`-------------------------------------------------- Assignme 02:--------------------------------------------------`);
console.log(`Given Array is:- = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];`);
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`1. Find the total elements available or length and log on console`);
const arrayNumbers = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
var length = arrayNumbers.length
console.log( ` The total elements available in array is :-`,length);
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`2. Log the first element and last element in arrayNumbers and log on console`);
let elementAtZeroIndex = arrayNumbers[0];
console.log(`First Element of Array is:- ${ elementAtZeroIndex} & Last Element of Array is:- ${ arrayNumbers[10]}`);
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`3. Log the thirst last element using length property and log on console`);
const last = arrayNumbers
const last3= last.slice(8,length-2)
console.log(" The thirst last element is:-",last3);
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`4. Find the all even numbers and log on console`);
const array = arrayNumbers
const even = array.filter(number => {
  return number % 2 === 0;
});

console.log(even); // 👉️ [2, 4, 6, 8]
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`5. Find the odd numbers and log on console`);
const array1 = arrayNumbers
const odd = array1.filter(number => {
    return number % 2 === 1;
  });
  console.log(odd); 
  console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`6. Find all the even & Odd positioned elements from arrayNumbers, for loop`);
var str1=  [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ]
odd1 = [],
    even1 = [];

for (var i = 0; i < str1.length; i++) {
i % 2 === 0
? even1.push(str1[i]) 
: odd1.push(str1[i])
}
console.log(` Evenpositioned elements in Array is:-  ${even1.join(' ')}`)
console.log(`Odd positioned elements in Array is :-  ${ odd1.join(' ')}`)
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`8. Find the sum of all elements from arrayNumbers, log on console`);
var arr = arrayNumbers
    // Creating variable to store the sum
    var sum = 0;
    // Running the for loop
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
console.log("Sum is " + sum)
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`9. Find the numbers which are multiple of 5`);
var multiple =arrayNumbers
const even2 = array.filter(number => {
  return number % 5 === 0;
});

console.log(even2); 

console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`10. Is number 115 available in arrayNumbers ?`);
var include = arrayNumbers
let isAvailable = arrayNumbers.includes(115);
console.log(isAvailable);
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`11. Is number 23 available in arrayNumbers ?`);
let isAvailable1 = arrayNumbers.includes(23);
console.log(isAvailable1);
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`12. Insert numbers → 55, 66 before index 3 and log array on console`);
var insert = arrayNumbers
arrayNumbers.splice(3, 0, 55,66 );
console.log(arrayNumbers);
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`13. Delete 3 elements starting from index 4 and log arrayNumbers on console`);
var Delete = arrayNumbers
var sliceResult = arrayNumbers.slice(4);
console.log("Total deleted elements: ", sliceResult);
console.log("Array after deleting elements ",arrayNumbers);