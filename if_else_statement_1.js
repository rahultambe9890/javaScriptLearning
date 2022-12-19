console.log(`Boom boom`);
var isRoadBlocked = true;
if (isRoadBlocked) {
  console.log(`traveling thru express way `);
  console.log(`travel will be short just 2 hours`);
} else {
  console.log(`travel thru tunnel`);
  console.log(`travel will be long just for 5 hours`);
}

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
votingEligibility(230);
votingEligibility(-20);
votingEligibility(10);
