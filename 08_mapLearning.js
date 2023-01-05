



const mapOfNumbers = new Map(); // Creating an Map
mapOfNumbers.set(11, "Eleven"); // Adding element in key value pair
mapOfNumbers.set(22, "Twenty two");
mapOfNumbers.set(2, "Two");
mapOfNumbers.set(11, "Ten + One"); 
mapOfNumbers.set(33, "Eleven");
console.log(mapOfNumbers);

const valueForKey22 =  mapOfNumbers.get(22);
console.log(valueForKey22);

const valueForKey11 =  mapOfNumbers.get(11);
console.log(valueForKey11);

console.log(mapOfNumbers);
console.log(mapOfNumbers.size);

mapOfNumbers.delete(11);
console.log(mapOfNumbers);
console.log("======== To check whether given key is available or not============");
const isKeyAvailable = mapOfNumbers.has(22);
console.log(isKeyAvailable);
console.log(`Is key 1111 available: ${mapOfNumbers.has(1111)}`);

console.log("===== Traversing over map====");
const keysOfMap = mapOfNumbers.keys();
console.log(keysOfMap);
for (const key of keysOfMap) {
    console.log(key,  mapOfNumbers.get(key));
}

class Employee {
    constructor(empId, empName, empAge, empCity) {
      this.empId = empId;
      this.empName = empName;
      this.empAge = empAge;
      this.empCity = empCity;
    }
  }
  const empSup = new Employee(11, "Supriya", 23, "PUNE");
  const empDhir = new Employee(22, "Dheeraj", 24, "MUMBAI");
  const empSachin = new Employee(33, "Sachin", 22, "Surat");
  const empGayatri = new Employee(44, "Gayatri", 21, "Bangluru");
  const mapOfEmployees = new Map(); // key -> empId   value -> employee object
  mapOfEmployees.set(11, empSup);
  mapOfEmployees.set(22, empDhir);
  mapOfEmployees.set(33, empSachin);
  mapOfEmployees.set(44, empGayatri);

 const keyOfMapEmployee = mapOfEmployees.keys();
 console.log(keyOfMapEmployee);
 for (const key of keyOfMapEmployee) {
     const employee = mapOfEmployees.get(key);
     console.log(employee.empName, employee.empCity);
 }
 