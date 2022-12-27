console.log(` .1) Count the total vowels for string --> " I am very good IT Developer"`);

var sentence =  " I am very good IT Developer";
// Print the vowels only aeiou or AEIOU
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    if (char=='a' || char=='e' || char=='i' || char=='o'  ||char=='u' || 
        char=='A' || char=='E' || char=='I' || char=='O' || char=='U') {
        console.log(char);
        counter = counter +1;
    }   
}
console.log(`Total vowels in string is : ${counter}`);
console.log(`------------------------------------------------------------`);
console.log(` .2) Write a function to get the sum of cube of numbers from 1 to 5  `);

function sum_Of_Cubes(n) {
    var sumn = 0;
  
    for (var i = 1; i <= n; i++) {
      sumn += Math.pow(i, 3);
    }
    return sumn;
  }
  
  console.log(` The sum of cube of numbers from 1 to 5 :-  ${sum_Of_Cubes(5)}`);
console.log(`------------------------------------------------------------`);
  console.log(` .3) `);
  console.log(`.1) Given String is :- " Hard work always pays back"`);
  let str = " Hard work always pays back",
  odd = [],
  even = [];

for (var i = 0; i < str.length; i++) {
i % 2 === 0
  ? even.push(str[i]) 
  : odd.push(str[i])
}


console.log(` Odd position Char in string is :-  ${even.join('')}`)
console.log(`-------------------------------------------------------------`);
console.log(`.2) Given String is :- " Soon I will be Angular IT Champ"`);
var sentence =  " Soon I will be Angular IT Champ "
var result= sentence.trim();
let str1 = result
odd = [],
    even = [];

for (var i = 0; i < str1.length; i++) {
i % 2 === 0
? even.push(str1[i]) 
: odd.push(str1[i])
}


// console.log(` Odd position Char in string is :-  ${even.join('')}`)
console.log(` Odd position Char in string is :-  ${ odd.join('')}`)
  