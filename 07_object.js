const person = {
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates",
    speak: function(){
        console.log(`Hey i can speak English and Hindi`);
    }

  }
  console.log(typeof person);
  console.log(person);
  console.log(`Accessing object properties using dot notation`);
  const personAge = person.age;
  console.log(`Person age is: ${personAge}`);
  console.log(`Accessing object properties using square bracket notation`);
  const personName = person["name"];
  console.log(personName);
  
  console.log(`=== Adding an property into an object====`);
  person.company = "Microsoft";
  console.log(person);
  
  console.log(`=== Updating an property into an object====`);
  person.age = 65;
  console.log(person);
  
  console.log(`=== Deleting an property into an object====`);
  delete person.weight;
  console.log(person);

console.log(` Accessing the function from an object `);
person.speak
console.log(person);

  console.log(`=== Creating an empty object====`);
const mobile = {

}
mobile.company = "Micromax";
mobile.camera = "20Px";
console.log(mobile);

let walk = function (){
console.log(` Hey i can walk and run man `);
console.log(person);
}

console.log(`Nested object`);
const student = {
    name: "Stew Jobs",
    age: 50,
    familyMemberNames: [ 'Tony', 'Lonny', 'Jenny', 'Watigton'],
    marks: {
        science: 70,
        math: 90,
        english: 87,
        add : function(){
          return  this.science+this.math+this.english;
        }
    }
}
console.log(`Accessing an Nested object property`);
const scienceMark =  student.marks.science;
console.log(scienceMark);

console.log(`Updating an Nested object property`);
student.marks.english = 97;

console.log(`Adding an Nested object property`);
student.marks.programming = 100;

console.log(`Deleting an Nested object property`);
// delete student.marks.english;
console.log(student);
console.log(`Accessing an nested object function `);
const totalMarks = student.marks.add()
console.log(`Total Marks : ${totalMarks}`);
console.log(`Accessing an array`);
console.log(student.familyMemberNames);
console.log(`Object entries`);
const billgates = {
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates",
    company: "Microsoft",
    valuation : "130 b $"
}
console.log(`================ in operator =================`);
let isAvailable = "height" in billgates
console.log(isAvailable);
if (isAvailable) {
  delete billgates.height
 console.log(`" Height " property is deleted successfully`); 
} else {
  console.log(`" Height " property is not  deleted as it is available inside object `);
}

// console.log(Object.entries(billgates));
// console.log(Object.keys(billgates));
// console.log(Object.values(billgates));
 console.log(`================ for in loop =================`);
 for (const key in billgates) {
  if (Object.hasOwnProperty.call(billgates, key)) {
    const element = billgates[key];
    console.log(element);
    
  }
 }