console.log(`---------------- Assignment Object Clone Assignment -----------------`);
console.log(`.1) Perform shallow clone on arrayNums. Update cloned array with values→ 55, 66 using push ()`);
const arrayNums = [20, 3, 4, 56, 90, 400, 49]
console.log(`Original Array is:- [${arrayNums}]`);
const  arrayNums1 = arrayNums
console.log( `Shallow Clone on Array is:- -[${arrayNums}]`);
const push = arrayNums.push(55,66);
console.log(`Updated array by using push () methode:- [${arrayNums}]`);
 console.log(`---------------------------------------------------------------------------------------------`);
 console.log(`.2) Perform deep clone using spread operator`);
 const arrayClone = [...arrayNums];
 console.log(`Deep Cloning using Spread Oprater:-[${arrayNums}]`);
 var push1 = arrayNums.push(10,25)
 console.log(`Update original array arrayNums with values 10, 25 :- [${arrayNums}]`);
 console.log(`---------------------------------------------------------------------------------------------`);
console.log(`.3) Given other array → arrayEven [2, 30, 14, 8], Marge this array with 'arrayNums' using spread operator`);
var arrayEven =[2, 30, 14, 8]
const join = [...arrayNums,...arrayEven]
console.log(`Marge this array with 'arrayNums' using spread operator:-[${join}]`);
console.log(`---------------------------------------------------------------------------------------------`);
console.log(`.4) Create the employee info object as shown in snippet→→`);
const employee_info = {
 emp_id: 27, 
 emp_name: "John Doe",    
    salary: {
         July_month: "40,000INR",
    aug_month: "50,000INR",
    jun_month: "65,000INR"
    },
    address:{
    Locality:{
    colany: "OM Vrindavan Society", 
    street: "Kanch Pokli 431202",
    },
    city: "Mumbai",
    state: "Maharashtra",
    country: "India"
},
 mobiles: ["+91 #680 3456 88","1000- 4567 32", "+91-9896 3670 77"]
}
console.log(employee_info );
console.log(`---------------------------------------------------------------------------------------------`);
console.log(`.5) Log the employee details on console like Address: Locality, city, state and country`);
console.log(`john's Address is`,employee_info.address.Locality,employee_info.address.city,employee_info.address.state,employee_info.address.country);
console.log(`John's mobile no is :- `,employee_info.mobiles);
console.log(`---------------------------------------------------------------------------------------------`);
console.log(`.6) Perform deep copy using JSON.stringify()`);
console.log(`a) Update property 'July_month' salary to 8OK on cloned object`);
employee_info.salary.July_month = 80000;
console.log(employee_info.salary);

console.log(`b)  Update property 'country to 'United Kingdom'`);
employee_info.address.country = "United Kingdom"
console.log(employee_info.address);

  