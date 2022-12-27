console.log(`--------------Count character A from following strings--------------------------`);
console.log( `.1) Given String is :- I AM Learning JavaScript, The Language of internet`);
var sentence = `I AM Learning JavaScript, The Language of internet`
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    if (char=='a' || char=='A' ) {
        console.log(char);
        counter = counter +1;
    }   
}
console.log(`Total a/A in string is : ${counter}`);

console.log( `.2) Given String is :- My favourite movie is LAggAn `);
var sentence = `My favourite movie is LAggAn `
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    if (char=='a' || char=='A' ) {
        console.log(char);
        counter = counter +1;
    }   
}
console.log(`Total a/A in string is : ${counter}`);
