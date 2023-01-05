console.log(`---------------- Assignment 0A : Object , Array Freeze And Merge --------------------`);
console.log(`1. Create an object using literals namely→ personalDetails with your actual detail.`);
const personalDetails = {
    name : " Rahul",
    age: 23,
    city : "Solapur",
  }
  console.log(personalDetails);

  console.log(`-----------------------------------------------------------------------------------`);
  console.log(`2. Create an object using literals → collegeDetails with your college details`);

  const collegeDetails = {
    collegeName : "Pune University (SPPU)",
    degree: "M.Sc",
    passingYear : 2022,
  }
  console.log( collegeDetails);
  console.log(`-----------------------------------------------------------------------------------`);
  console.log(`3. Merge these two objects and log details on console with meaning message.`);

  let merge = Object.assign(personalDetails, collegeDetails);
console.log(merge);
console.log(`-----------------------------------------------------------------------------------`);
console.log(`4. Create an array of your friend names and freeze it.`);
const friends= ["Abhijeet", "Sanket", "Sushant", "Navnath", "Vishal","Suraj"];
console.log(friends);
Object.freeze(friends)
// friends.push("Ram")
// console.log(friends);
console.log(`-----------------------------------------------------------------------------------`);
console.log(`5. Iterate step 4 array using for of loop and log friend names on console`);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);
console.log(friends[4]);
console.log(friends[5]);
console.log(`-----------------------------------------------------------------------------------`);
console.log(`6. Given a string company = "Codemind Technology":`);
console.log(`a. Write a code to reverse only → Technology word`);
function reverseInPlace(str) {
    var words = [];
    words = str.split("\s+");
    var result = "";
    for (var i = 0; i < words.length; i++) {
        return result += words[i].split('').reverse().join('');
    }
}
console.log(reverseInPlace("Technology"))

console.log(`b. Expected output → "Codemind ygolonhceT"`);

var str = "Codemind Technology "
var slice = str.slice(0,8)
console.log(slice ,reverseInPlace("Technology") );

