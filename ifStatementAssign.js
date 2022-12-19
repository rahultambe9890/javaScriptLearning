console.log(`-------------Q.1) Check He/She is eligible or Not for Voting---------------`);

var votingEligibility = function(age){
    if(age<=0 || age>120 ){
        console.log(`Age value : ${age}, Invalid data`);
    }
    if(age>=18 && age<=120) {
        console.log(`your age is : ${age}, You can vote`);
    }
    if(age<18 && age>0){
        console.log(`your age is : ${age}, You can note vote`);
    }
}
votingEligibility(45);
votingEligibility(17);
votingEligibility(8);
votingEligibility(20);
votingEligibility(-10);
votingEligibility(200);
votingEligibility(0);

console.log(`-------------Q.2) Design a grade system using if block---------------`);

function gradeCalculation(marks){
    if(marks<=0 || marks>100){
        console.log(`Please provide th valid data`);

    }
    if(marks>=90 && marks<=100){
       console.log(`famtastic your marks is ${marks} your grade is A+`); 
    }
    if(marks>=75 && marks<90){
        console.log(`Excellent your marks is ${marks} your grade is A+`); 
     }

     if(marks>=50 && marks<75){
        console.log(`Good your marks is ${marks} your grade is B`); 
     }
     if(marks>=35 && marks<50){
        console.log(` your marks is ${marks} your grade is C Need Improvement`); 
     }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);

