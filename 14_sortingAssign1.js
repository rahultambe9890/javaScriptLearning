console.log(` Sorting In Ascending/ Descending Order And Reverce `);
console.log(`Given Array is :-`);
const arrey_roll_number = [113, 45, 56, 11, 32, 45,109, 799, 56, 45];
console.log(arrey_roll_number);
console.log(`-------------------------------------------------------`);
console.log(` 1) Reverse the array:`);
 arrey_roll_number.reverse();
console.log( arrey_roll_number);
console.log(`-------------------------------------------------------`);
console.log(` 2) use short () Without any custom logic:- `);
arrey_roll_number.sort();
console.log(arrey_roll_number);
console.log(`-------------------------------------------------------`);
console.log( `3) ascending order with custom logic:-`);
arrey_roll_number.sort((a,b)=>{
    return a>b ? 1: -1;
});
console.log(arrey_roll_number);
console.log(`-------------------------------------------------------`);
console.log(` 4) Find the Gretest Number:-`);
arrey_roll_number.sort((a, b)=>{
     return a>b ? 1:-1;
});
console.log(arrey_roll_number);
console.log(`The Greatest Number is:- ${arrey_roll_number[arrey_roll_number.length-1]}`);
console.log(`-------------------------------------------------------`);
console.log(` 5) Find Smallest Number`);
arrey_roll_number.sort((a, b)=>{
    return a>b ? -1:1;
});
console.log(arrey_roll_number);
console.log(`The Smallest Number is:- ${arrey_roll_number[arrey_roll_number.length-1]}`);
console.log(`-------------------------------------------------------`);
console.log(` 6) Remove Duplicate Number:`);
const mySet = new Set(arrey_roll_number);
console.log(mySet);