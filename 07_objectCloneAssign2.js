console.log(` Given a object car and carEngine merge or concat these two objects using`);
const car= {
carName: "Creta SX",
company: "Hundai",
LaunchYear: 2017
}

const carEngine = { 
     enginePower: "1499CC",
      maxPower: "113 BHP"
     }
console.log(`1. object car and carEngine merge or concat these two objects using Object.assign()`);
const returnedTarget = Object.assign(car, carEngine);
console.log(`using Object.assign()`,returnedTarget);
console.log(`2. object car and carEngine merge or concat these two objects using Spread operator...`);
var spread = { ...car, ...carEngine }
console.log( `using Spread operator`,spread);