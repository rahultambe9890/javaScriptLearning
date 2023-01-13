const person = {
    name: "Virat Kohli",
    age: 24,
    city: "Pune",
    pinCode: 431223,
    totalRun: 55000,
    isMarried: true
}

// let pinCodeVirat = person.pinCode;
// let totalRunVirat = person.totalRun;
// let cityVirat = person.city;
let { pinCode, totalRun,  city, isMarried, wifeName="Anushka"} = person; // Object Destructuring 

console.log(pinCode, totalRun, city, isMarried, wifeName );
console.log("Array Destructuring.....");
const arrayCompany = ["TCS", "Infy", "Google", "Twitter"];
let [ company1, company2, company3, company4, company5="Microsoft" ] = arrayCompany; // Array Destructuring
console.log(company1,company2, company3, company4, company5);

// Self Invoking Function or IIFE - Immediately Invoked Function Expression

console.log("Self Invoking Function or IIFE - Immediately Invoked Function Expression");

(function show(){
    console.log("Bhar bhar ke likho");
})();

