/* Promise with "PASS BY REFERENCE"
    1. Pass By Reference passes the parameters to functions and pass the argument to those parameters
    2. It requires less memory space, since no variable declaration is required
    3. Less amount of time is required to execute
*/

function studentsAttendance(isPresent, isAbsent) {
    return new Promise((resolve, reject) => {
        if((isAbsent === false && isPresent === false) || (isAbsent === true && isPresent === true)) {
            reject('Error in Entry');
        }
        else if(isPresent === false && isAbsent === true){
            reject('The Student is Absent!');
        }
        else if(isPresent === true && isAbsent === false){
            resolve('The Student is Present!');
        }
        else{
            reject('Take Attendance First');
        }
    })
}

var myEntry = studentsAttendance(false, true);

myEntry.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})




/* Promise with "PASS BY VALUE"
    1. Pass By Value passes the value to a variable and that variable will be called inside the function
    2. It requires more memory space, since variable declaration is required (which takes up extra memory space)
    3. More amount of time is required to execute since the function needs to copy the values from the variable
*/


var isPresentP = true;
var isAbsentA  = false;

function myAttendance() {
    return new Promise((resolve, reject) => {
        if((isAbsentA === false && isPresentP === false) || (isAbsentA === true && isPresentP === true)) {
            reject('Error in Entry');
        }
        else if(isPresentP === false && isAbsentA === true){
            reject('The Student is Absent!');
        }
        else if(isPresentP === true && isAbsentA === false){
            resolve('The Student is Present!');
        }
        else{
            reject('Take Attendance First');
        }
    })
}

var myEntryE = myAttendance();

myEntryE.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})