console.log(`----------------------------- Object Assignment 1 ------------------------------`);

let professor = {
    name : "Rahul",
    gender : "Male",
    age : "23",
    city : "Sangola",
    degrees : {
        engineering : "CSC",
        PHD : "Adv Computing",
        AssociateDegree: "Associate of Science (AS)",
        allDegrees : function (){
            let certRes = this.engineering + " " + this.PHD + " " + this.AssociateDegree;
            return certRes;
        }
    } ,
    certificates : {
        cartificate1 : "Hacker Rank Participation",
        cartificate2 : "IFE Cource",
        cartificate3 : "Adv Programming"
    }
}
console.log(`1. Think of all the properties that you could add`);
console.log(professor);
console.log(`---------------------------------------------------------------------------------------------------`);
console.log(`2. Include nested object "Degrees".`);
console.log(professor.degrees);
console.log(`---------------------------------------------------------------------------------------------------`);
console.log(`3. Include nested object " certificates".`);
console.log(professor.certificates);
console.log(`---------------------------------------------------------------------------------------------------`);
console.log(`4. Add function as a value which should concat all degrees in step`);
console.log(professor.degrees);
let degree = professor.degrees.allDegrees();
console.log(`total Degrees of Processor are : "${degree}".`);
console.log(`---------------------------------------------------------------------------------------------------`);
console.log(`5. Try to add new property and log on console`);
professor.married = "yes"
console.log(professor);
console.log(`Added married Property.`);
console.log(`---------------------------------------------------------------------------------------------------`);
console.log(`6. Modify any existing property and log complete object on console`);
professor.age = 25;
console.log(professor);
console.log(`Age is modified`);
console.log(`---------------------------------------------------------------------------------------------------`);
console.log(`7. Delete any one certificate from nested object`);
console.log(professor.certificates);
delete professor.certificates.cartificate1;
console.log(professor.certificates);
console.log(`certificate1 is deleted.` );
console.log(`---------------------------------------------------------------------------------------------------`);
console.log(`8. Add new certificate in nested object - 'certificates'`);
professor.certificates.newCertificates = "CCC";
console.log(professor.certificates);
console.log(`Add new certifites`);
console.log(`---------------------------------------------------------------------------------------------------`);
console.log(`9. Log the nested object 'certificate' on console`);
console.log(professor.certificates);


