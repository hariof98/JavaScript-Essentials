// Error Handling
myArray = [1, 4, 5, 10, 20];
const myFate = myArray.includes(20);
try{
    console.log(myFate);
    console.log(myFate2);                    // myFate2 is not declared, so it will throw ReferenceError
}
catch(err){                                  // err is exception
    console.log("Error Occured!");
}
finally{
    console.log("Whatever Happnes I will get Executed");
}


