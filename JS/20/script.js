// SYNCHRONOUS - Executes from top to bottom, each line at a time

let a = 10;
let b = 20;

console.log('SYNC')
console.log(a);
console.log(b);



/* ASYNCHRONOUS - Executes from top to bottom, each line at a time, when a asynchrous code is encountered, 
                  JS will execute that code seperately and also executes the rest of the code at the same time */


let c = 30;
let d = 40;
let e = 50;

setTimeout(() => {
    console.log('ASYNC', e);   // the value of e will be 60 because JS will execute the remaining lines of code while executing the setTimeout function separetely. So the value of e will be re-assigned.
}, 2000);

e = 60;    

/* setTimeout is async, since it executes the operation in a specified time. 
   setTimeout data will be displayed only when the 2 sec timeout is ended so eventhough it is logged before, it will display after only. */

console.log(c);
console.log(d);



/* setTimeout, Promises, fetch.... are all Asynchronous in JavaScript */



/* Guess the output for below */
var a1 = 10;
console.log(a1);
var b1 = 20;
console.log(b1);
var c1 = 30;
console.log(c1);
var d1 = 70;
setTimeout(() => {
    console.log(d1);
}, 3000)
var d1 = 100;
var e1 = 50;
console.log(e1);