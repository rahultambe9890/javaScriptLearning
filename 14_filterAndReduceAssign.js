console.log(`-------------------- Assignment 2 --------------------`);
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
    this.emp_id=emp_id;
    this.emp_name=emp_name;
    this.emp_dept= emp_dept;
    this.emp_salary=emp_salary;
    this.emp_company= emp_company;
    }
}
    const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS"); 
    const emp_radha= new Employee(33, "Radha", "HR", 74008 , "Wipro" );
    const emp_rishi = new Employee(55, "Rishi", "Finance", 47008, "TCS");
 const emp_sonali = new Employee (66, "Sonali", "Finance", 45000, "Infy"); 
 const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const emp_viny= new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahi= new Employee(99," Mahesh", "HR", 85000, "Infy");

  const arrayOfEmp = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(`1. Find all the employees from 'Wipro' company`);
  const arrayOfEmp1=  arrayOfEmp.filter((Employee)=>{
       return Employee.emp_company =="Wipro"
   })
   arrayOfEmp1.forEach((element
    )=>{
        console.log(`Company Name is :-`,element.emp_company,`&`,`Employee Name is :-`,element.emp_name);
    })
    console.log(`------------------------------------------------------------------------------------`);
console.log(`2. Find all the employees from 'IT' OR 'HR' dept`);
const arrayOfEmp2=  arrayOfEmp.filter((Employee)=>{
    return Employee.emp_dept =="IT"
})
arrayOfEmp2.forEach((element)=>{
     console.log(`Depart Name is :-`,element.emp_dept,`&`,`Employee Name is :-`,element.emp_name);
 })
 const arrayOfEmp3=  arrayOfEmp.filter((Employee)=>{
    return Employee.emp_dept =="HR"
})
arrayOfEmp3.forEach((element)=>{
     console.log(`Depart Name is :-`,element.emp_dept,`&`,`Employee Name is :-`,element.emp_name);
 })

 console.log(`------------------------------------------------------------------------------------`);
 console.log(`3. Find all the employees whose emp id's are greater than 50`);
 const arrayOfEmp4=  arrayOfEmp.filter((Employee)=>{
    return Employee.emp_id >50
})
arrayOfEmp4.forEach((element)=>{
    console.log(`Employee ID is :-`,element.emp_id,`&`,`Employee Name is :-`,element.emp_name);
})
console.log(`------------------------------------------------------------------------------------`);
 console.log(`4. Find all the employees whose names start with letter 'A' or
 'V' or 'M'`);
const employeeAVM = arrayOfEmp.filter( (currentValue) => {
    return currentValue.emp_name.startsWith("A") || currentValue.emp_name.startsWith("V") || currentValue.emp_name.startsWith("M") ;
} );
employeeAVM.forEach( (currentValue) => {
  console.log(currentValue);

} );
console.log(`------------------------------------------------------------------------------------`);
console.log(`5) Find average salary of employees for all the department`);
const sal = arrayOfEmp.reduce( (runningTotal,value) => {
    return runningTotal+ value.emp_salary;
 },0 );
 
 console.log(`salary of employees for all the department is INR ${sal/arrayOfEmp.length}`);

console.log(`------------------------------------------------------------------------------------`);
console.log(`6) Find the average salary of IT department`);
const arrayIT = arrayOfEmp.filter( (currentValue) => {
    return currentValue.emp_dept == "IT";
} );

const avgIT = arrayIT.reduce( (runningTotal, value) => {
        return runningTotal + value.emp_salary;
},0 );
console.log(`The average salary of employee in IT dept is: INR ${avgIT/arrayIT.length}`);

