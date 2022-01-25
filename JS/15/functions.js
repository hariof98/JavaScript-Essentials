//Function Declaration/Function Statement => Declaring normal functions is called as function declaration or statement
function abc(){
    console.log('Normal Only');
}
abc();


//Function Expression => only in JavaScript, you can assign a function to a variable. So such kinds are called as Function Expression
var a = function(){
    console.log('I am function expression!');
}
a();





//Difference between FE and FD is Hoisting (memory creation in JS). Hoisting works with Function Declaration but it will not work with Function Expression
normal();

function normal(){
    console.log('Function Statement/Declaration Works with Hoisting');
}

//notNormal();

var notNormal = function(){
    console.log('Function Expression Does not Works with Hoisting');
}





//Anonymous Function => Function without a name. We can only use Anonymous Function in case of using Function Expression and we can also use Arrow Function which also represents Anonymous Function.
var c = function(){
    console.log("I'm anonymous function");
}
//or
var d = () => {
    console.log("I'm anonymous function");
}
c();





//First class functions/citizens => When a function is assigned to a variable and assigned a value or passed into another function or when it returns a value.
var z = function(){
    function myFunc(){
        console.log('I Am First Class Citizen :)');
    }
    return myFunc();
}
z();
// In JS when you console log a function, it will return everything inside of it
//console.log(z); // Since the variable z has a function assigned to it, it will console log the entire thing present inside of it


