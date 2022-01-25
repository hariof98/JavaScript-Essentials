// document.querySelectorAll("body button").forEach(list => list.style.backgroundColor="blue");
function colorChange(){
    document.querySelector("body button.myButton").style.backgroundColor="blue";
    setTimeout(function() {
        document.querySelector("body button.myButton").style.backgroundColor="chartreuse";
        console.log('5 Sec is over!');
    }, 5000);
}


// Odd or Even
function oddEven(){
    const myArray = [1, 2, 3, 4, 5, 6];

    myArray.forEach((list) => {
        setTimeout(function(){
            if(list % 2 === 0){
                console.log("It's Even");
            }
            else{
                console.log("It's Odd");
            }
        }, list * 3000);
    })
}


// Increment and Decrement
function myCounter(){
    var counter = 0;
    this.incrementCounter = () => {      // remember this.name = name;
        counter ++;
        console.log(counter);
    }
    this.decrementCounter = () => {
        counter --;
        console.log(counter);
    }
}

var myObject = new myCounter;


// Promises
var iceCreamDone = true;
var foodDone = true;

const p = new Promise((resolve, reject) => {
    if(iceCreamDone === false){
        reject('Good');
    }
    else if(foodDone === false){
        reject('Oh No! Please Eat!');
    }
    else{
        resolve({
            marks: 100,
            message: 'You are a Foodie'
        });
    }
})


function myPromise(){
    p.then((message) => {
        console.log(message);
    }).catch((message) => {
        console.log(message);
    })
}

