console.log(`1)`);
var maleMarriageEligibility = function (gender, age, boyName) {
  var result =
    gender == "Male" && age >= 21
      ? `Hey ${boyName} you are eligible for marriage.`
      : `Hey ${boyName} you are not eligible for marriage.`;
  console.log(result);
};

maleMarriageEligibility("Male", 25, "Bill Gates");
maleMarriageEligibility("Male", 17, "Steve Jobs");
console.log(`===========================================================================`);
console.log(`2)`);
var femaleMarriageEligibility = function (gender, age, girlName) {
  var res =
    gender == "Female" && age >= 21
      ? `Hey ${girlName} you are eligible for marriage.`
      : `Hey ${girlName} you are not eligible for marriage.`;
  console.log(res);
};
femaleMarriageEligibility("Female", 17, "Jennifer");
20;
femaleMarriageEligibility("Female", 27, "Milinda Gates");
