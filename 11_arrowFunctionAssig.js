
console.log(`1.) With no args and no return value , log message on console `);
let show = ()=>{
    console.log(`"Good Morning, Today is Monday"`);
}
show();
console.log(`-----------------------------------------------------------------------------------------`);
console.log(`2.) With 3 args and no return value, for recived 3 parameters perform the multiplication`);
console.log(`a) Values to be passed => 5,5,2`);
let multiplication = (n1,n2,n3)=>{
    console.log(`Multiplication of 5,5,2 is =>`,n1*n2*n3);
}
multiplication(5,5,2);
console.log(`-----------------------------------------------------------------------------------------`);
console.log(`b) Values to be passed => 10,4, & Defult value`);

let multiplication1 = (n1,n2,n3)=>{
    console.log(`Multiplication of 10,4 is =>`,n1*n2*n3);
}
multiplication1(10,4,1);
console.log(`-----------------------------------------------------------------------------------------`);
console.log(`3.) With 5 args and return value such as , fpr recived params it should do the  addition`);
console.log(`a)value to be passed => 100,100,200,349,756`);
let addition = (n1, n2,n3,n4,n5)=> {
    let mul = n1+n2+n3+n4+n5;
    return mul;
}
let mulResult = addition(100,100,200,349,756);
console.log(`The Addition is =>`,mulResult);
console.log(`-----------------------------------------------------------------------------------------`);
console.log(`b) value to be passed "I am", "learning " ,"ES6","features","in depth"`);
let addition1 = (n1, n2,n3,n4,n5)=> {
    let mul = n1+n2+n3+n4+n5;
    return mul;
}
let mulResult1 = addition1( "I am", "learning" ,"ES6","features","in depth");
console.log(`The Addition is =>`,mulResult1);
console.log(`-----------------------------------------------------------------------------------------`);


