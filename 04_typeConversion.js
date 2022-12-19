var numAdd = 10+40; //50
var strAdd = "Pooja"+ 70 ;
console.log(`strAdd is:- ${strAdd}`);
console.log(`+ operator can do the type conversion as well from string to number`);
var numstr = "100";
var num = +numstr ;
console.log(`type of numstr is :- ${typeof numstr}`);
console.log(`type of num is :- ${typeof num}`);

var numstr = "Chandra";
var num = +numstr;
console.log(`type of ${numstr} is:- ${ typeof numstr}` );
console.log(`type of ${ num } is :- ${typeof num}`);

console.log(`== comparison ${ 20 == "20"}`);// Implicit conversion

var myNumber = 77;
console.log(`myNumber value ${myNumber} and its type is ${typeof myNumber}`);
var strmyNumber = myNumber.toString()
console.log(`strmyNumber values ${strmyNumber} and its type is:- ${ typeof
     strmyNumber}`);
