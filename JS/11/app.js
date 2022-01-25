// Button color change function
function itClicks(){
    document.querySelector("body button").style.backgroundColor="red";
    setTimeout(function() {
        document.querySelector("body button").style.backgroundColor="yellow";
    }, 3000);
}


// Even or Odd function
function itsEven(){
myArray = [1, 2, 3, 4, 5, 6];
    myArray.forEach((list) => {
    setTimeout(function(){
        if(list % 2 === 0){
            console.log('Its Even');
        }
        else{
            console.log('Its Odd');
        }
    }, list * 3000)
})
}



// A quick recap

//console.log(a);
// const a = 10;
// function myFun(){
//     var b = 20;
//     var c = a + b;
//     console.log(c);
// }
// myFun();