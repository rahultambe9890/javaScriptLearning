var isMarried = true;

let name = "John";
let frdName = "Tom"
name = frdName;

const age = 23;
// const frdAge = 25;
// age = frdAge;// Not allowed


const anil = {
    age: 23,
    name: "Anil",
    company: "Microsoft"
}
Object.freeze(anil);
anil.country = "India";
anil.age = 27;
delete anil.company;
console.log(anil);


// // anil = sunil; // Not allowed

// // Array freezing 
// const arrayNumbers = [2, 4, 5, 8];
// // arrayNumbers = []; /// Not allowed
// // Freeze array
// Object.freeze(arrayNumbers);
//arrayNumbers.push(10);
// console.log(arrayNumbers);
// const sunil = {
//     age: 24,
//     name: "Sunil",
//     company: "Apple"
// }

// const sunilAddress = {
//     city : "Pune",
//     pin: "431202"
// }
// // Merging two objects
// Object.assign(sunil, sunilAddress );
// console.log(sunil);
// console.log(sunilAddress);