console.log(`1. Log the array element with it's index using forEach() with arrow function`);
const array_numbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ];
array_numbers.forEach( (currentValue, index, array )=>{
    console.log(`Value is: `,currentValue, ` &`, "index is : ", index);
} );console.log(`2. Find the positive numbers and log on console`);
const nums = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ];
function printPositives(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      array.splice(i,1)
      i--
    }
  }
  return array
}
console.log(printPositives(nums))

