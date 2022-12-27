console.log(`-------------------------------------------------- Assignme 01:--------------------------------------------------`);
console.log(`Given Array is:- =["Banana", "Orange", "Apple", "Mango", "Water Melon"]`);
const fruits_seasonal  = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(fruits_seasonal );
console.log(`.A) Total number of elements available in array`);
let totalFruits = fruits_seasonal.length;
console.log(`Total number of Fruits in Array is --> ${totalFruits}`);
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(` .1) Log the first and last element on console `);
let elementAtZeroIndex = fruits_seasonal[0];
console.log(`First Element of Array is:- ${elementAtZeroIndex} & Last Element of Array is:- ${fruits_seasonal[4]}`);
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(` .2)Add element → Papaya before the element 'Banana' and then log array on console `);
var fruits_seasonal1  = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(fruits_seasonal1);
fruits_seasonal1.unshift("Papaya");
console.log(fruits_seasonal1);
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(` .3) Remove 'Mango' from the array`);
var fruits_seasonal1 = ["Papaya","Banana", "Orange", "Apple", "Mango","Water Melon"];
var sliceResult = fruits_seasonal1.slice(4, 5);
console.log("Total deleted elements: ", sliceResult);
console.log("Array after deleting elements ", fruits_seasonal1);
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`.4) Add element or insert an element 'Pineapple' at the last position`);
var fruits_seasonal1 = ["Papaya","Banana", "Orange", "Apple","Water Melon"];
console.log(fruits_seasonal1);
fruits_seasonal1.splice(5, 0, "Pineapple");
console.log(fruits_seasonal1);
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`.5)Insert an element - 'Dragon Fruit' before "Water Melon"`);
var insert = fruits_seasonal1
insert.splice(4, 0, "Dragon Fruit");
console.log(insert);
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`.6) Replace an element 'Orange' with 'Kiwi'`);
var replace = insert
console.log(replace);
replace.splice(2,1 , "Kivi");
console.log(replace);
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`.7) Log the elements starting from index 1 to 4`);
const index = replace
const first4= index.slice(0,4)
console.log(first4);
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`.8) Only select last 3 element and log on console: Use the length property`);
const last = replace
const last3= index.slice(4,7)
console.log(last3);
