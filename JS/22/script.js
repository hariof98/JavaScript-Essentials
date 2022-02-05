/*  
    window is the global object of JavaScript engine interms of the web. 
    It is created along with global execution context in all javascript engines when a js code is run.

	Whenever an execution context or global context is created, along with objects, "this" keyword will also be created with it.
	Here interms of global context and web, this === window

    Global Space => Anything that is not inside a function in JavaScript is said to be in global space

*/


var a = 10;  // this is in global space

console.log(a);         // will give 10 as output
/* when you try to call a variable or function, then before that there will always be the window object present */
console.log(window.a);  // this will also give 10 as output



function b() {              // this function is in global space
    var c = 20;             // this variable is not in global space
}

console.log(c);     // gives "not defined" error since the variable c is not in global space

// if anything is present in the global space, then JS can call/access those without reference


