// why we call function as First class citizen in JS
// 1. We can store function as a value
let functionExpr= function(){
    console.log("Inside function expression");
}
functionExpr();

// 2. We can return function from another function 
function outer(){
   let display  = function(){
        console.log("Inside display function");
    }
    return display;  
}
let innerFun = outer();
innerFun();

// 3. We can pass function as argument to another function
function anotherFunction(){
    console.log("I am inside another function....");
}

function show(myNumber){ // myNumber is an argument
    myNumber();
}
show(anotherFunction);