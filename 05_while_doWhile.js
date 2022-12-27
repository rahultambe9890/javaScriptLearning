
// Print numbers from 0 to 10
// initialization 0   condition <=10   update expre = ++
var index =0;
do {
    console.log(index);
    index++;
} while (index<=10);

// Print 70 to 7 by decrementing each time 7
 // 70  63  56  
var index =70;
do {
  console.log(index);
   index = index-7; 
} while (index>=7);


// Print numbers from 0 to 10
// initialization 0   condition <=10   update expre = ++
var i=0;  // i = 0 1 2  10  11
while (i<=10) {  // true true 
   console.log(i);  //0 1 2   10
   i++; // 1 2  10  11
}


var index = 0;
while (index<=10) {
   console.log(index);// 0 1
   if (index==5) {
     break;
   } 
   index++;
}

for (let index = 0; index < 20; index++) {
   console.log(index);
   if (index>=12) {
     break;
   }
    
}


var sentence = "Yes Just do it man, I know you can";
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


var sentence = "Yes Just do it man, I know you can";
// initi   cond  update 
var reverseString = "";
 var lastCharPosition = sentence.length-1;
for (let index = lastCharPosition; index >= 0; index-- ){
     var char = sentence.charAt(index);
      reverseString = reverseString.concat(char);
     // console.log(char);
    
}
console.log(reverseString);


var sentence = "Yes Just do it man, I know you can";
// Print the vowels only aeiou or AEIOU
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    var charCopy = char.toLowerCase();
    if (charCopy=='a' || charCopy=='e' || charCopy=='i'||  charCopy=='o' || charCopy=='u') {
        console.log(char);
        counter = counter +1;
    }   
}
console.log(`Total vowels in string is : ${counter}`);

var sentence = "Yes Just do it man, I know you can";
// initi   cond  update 
var reverseString = "";
 var lastCharPosition = sentence.length-1;
for (let index = lastCharPosition; index >= 0; index-- ){
     var char = sentence.charAt(index);
      reverseString = reverseString.concat(char);
     // console.log(char);
    
}
console.log(reverseString);

// print 5  1000
var counter = 1;
while (counter<=1000) {
    console.log(5);
    counter = counter+1;
}