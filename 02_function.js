function display() {
  console.log("my name: Rahul");
  console.log("my sir name is :Tambe ");
}

display(); // Function call or function invocation

//write a function show which should log you college name

function showDtails(myName) {
  console.log("First Name", myName);
}

showDtails("Rahul Tambe");
showDtails("Hitesh");
showDtails("Jenny");

var value1 = "rahul";
var value2 = "nitine";
function swapValues(value1, value2) {
  console.log("before swap", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("after sawp", value1, value2);
}
