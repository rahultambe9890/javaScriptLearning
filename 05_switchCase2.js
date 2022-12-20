console.log(`--------------------Assignment 0A-------------------`);
 var monthOfYear= function(monthNumber){
switch (monthNumber) {
  case 1:
    console.log(` January`);
    break;
  case 2:
    console.log(`February`);
    console.log(`February is second month of year`);
    break;
  case 3:
    console.log(`March`);
    break;
  case 4:
    console.log(`April`);
    break;
  case 5:
    console.log(`May`);
    console.log(`May is Fifth month of year`);
    break;
  case 6:
    console.log(`June`);
    break;
  case 8:
    console.log(`August`);
    break;
  case 9:
    console.log(`September`);
    break;
  case 10:
    console.log(`Octomber`);
    break;
  case 11:
    console.log(`November`);
    break;
  case 12:
    console.log(`December`);
    console.log(`December is last month of year`);
    break;
  default:
    console.log(`Not valid value provided`);
    break;
}
 }
 monthOfYear(2)
 monthOfYear(5)
 monthOfYear(12)
 monthOfYear(15)
 monthOfYear(100)