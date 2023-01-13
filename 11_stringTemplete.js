// ``

const fullName = "Sachin Tendulkar";
const age = 45;
const city = "Mumbai";

let details = "Details ".concat(fullName).concat("  "). concat(age).concat(" ").concat(city);
let detailsUsingPlus ="Details " +fullName+"  " + age + "  " + city;
console.log(details);
console.log(detailsUsingPlus);

let detailsUsingTemplate =`Details are ${fullName}  ${age}  ${city}`;
console.log(detailsUsingTemplate);
