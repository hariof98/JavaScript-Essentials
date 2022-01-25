// let and const are special keywords and are Maintained in seperate space.
// let and const - block scoped - available inside a block(like if statement, loop, functions, etc...)

// var is a global keyword and are maintained in global space
// var - function scoped - available anywhere inside a function and outside, It is a global.


// Temporal Dead Zone
// console.log(a);
// console.log(b);

// var a = 10;
// let b = 20; 


// var
if(true){
    var varVariable = 100;
    //var varVariable = 700;              // var allows redeclaration of variables (it is a big disadvantage)
}
console.log(varVariable);

// let and const
if(true){
    let letVariable = 200;              // let and const will not allow duplicacy
    console.log(letVariable);
}
//console.log(letVariable);             // when we call the let variable outside of its scope, it will throw an error
                                        // "Uncaught ReferenceError: letVariable is not defined"
