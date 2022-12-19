console.log(`-------------Q.1) Check He/She is eligible or Not for Voting---------------`);

var votingEligibility = function (age) {
  if (age <= 0 || age > 120) {
    console.log(`Invalid data:- ${age}`);
  } else {
    console.log(`valide data :- ${age}`);
    if (age >= 18) {
      console.log(`congratulation you can vote :${age}`);
    } else {
      console.log(`sorry you are not eligible for voting`);
    }
  }
};
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

    }else{
    if(marks>=90 && marks<=100){
       console.log(`famtastic your marks is ${marks} your grade is A+`); 
    }else
    if(marks>=75 && marks<90){
        console.log(`Excellent your marks is ${marks} your grade is A+`); 
     }

     if(marks>=50 && marks<75){
        console.log(`Good your marks is ${marks} your grade is B`); 
     }
     if(marks>=35 && marks<50){
        console.log(` your marks is ${marks} your grade is C Need Improvement`); 
     }
     if(typeof marks == "string"){
      console.log(`please provide the valid marks :-${marks}`);
     }
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
gradeCalculation(49);
gradeCalculation(64);
gradeCalculation(91);
gradeCalculation("Eighty");
