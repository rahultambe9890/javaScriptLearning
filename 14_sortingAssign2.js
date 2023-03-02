console.log(`-------------------- Sorting In Ascending/ Descending ----------------------------`);

console.log("1] sort the 'arrayEmployees' in ascending order of Employee ids and log Employee Details =>idNmae,Department");
class Employee {
    constructor(empId, empName, empDept, empSalary, empCompany) {
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
    }
}
const empAnil = new Employee(22, "Anil", "IT", 50000, "TCS");
const empRadha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const empRishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const empSonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const empMonika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const empViny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const empMahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

  const arrayEmployees = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi]
  const reverseArray = [];
  arrayEmployees.forEach((a,b) => {
    if (a.empId>b.empId ? 1 : -1 );
    reverseArray.push(a,b);
    console.log(`Employee Name : ${a.empName }  Employee Id : ${a.empId}`);
  });
console.log("-----------------------------------------------------------------------------------------------");
console.log("2] sort the 'arrayEmployees' in ascending order of employee department & log id, dept, & Company");
//   const reverseArrays = [];
//   arrayEmployees.forEach((a,b) => {
//     if (a.empId>b.empId ? 1 : -1 );
//     reverseArrays.push(a,b);
//     console.log(`${a.empName } ${a.empId} ${a.empCompany}`);
//   });
console.log(``);
arrayEmployees.sort((depar1,depar2)=> {
    return depar1.empDept >depar2.empDept ? 1 :-1;
}) 

arrayEmployees.forEach((currentValue)=> {
    console.log(`Employee ID: ${currentValue.empId}   Employee Name : ${currentValue.empDept}   Employee Company :${currentValue.empCompany}`);
})

console.log("-----------------------------------------------------------------------------------------------");
console.log(`3]soet the employee array in descending order of employee salary and log Name, Salary & Company`);
console.log(``);
arrayEmployees.sort((sal1,sal2)=> {
    return sal1.empSalary >sal2.empSalary ? -1 :1;
}) 

arrayEmployees.forEach((currentValue)=> {
    console.log(`Employee Name: ${currentValue.empName}  Employee Salary : ${currentValue.empSalary}  Employee Company :${currentValue.empCompany}`);
})