//SLICE
var mySlicer = ["A", "B", "C", "D", "E", "F", "G"];
console.log(
    mySlicer.slice(2, 4)
);

/* in slice(2, 4) =>  1 is INCLUSIVE, 4 is EXCLUSIVE. 
                      It takes the second position value C, since A is 0 and B is 1.
                      E is the 4th value but since its exclusive it will not be considered
   
*/



//SPLICE
var arrSplicer = [["A"], ["B"], ["C"], ["D"], ["E"], ["F"], ["G"]];
arrSplicer.splice(2, 3)
console.log(arrSplicer);




// Example for SPLICE
function splice(){
    var mySplicer = [[1], [2], [3], [4], [5], [6], [7]];
    mySplicer.splice(2, 1);
    console.log(mySplicer);
}
splice();



// PUSH & POP

// push() will add new items to the end of an array.
// pop() will remove(pop) the last element from the array.
 
var myArray = ["ABC", "ZXC", "QWE"];
myArray.push("AQW", "HARI", 12);
myArray.pop();
console.log(myArray);


