function Counter(){
    var count = 0;
    this.incrementCount = function(){
        count++;
        console.log(count);
    }
    this.decrementCount = function(){
        count--;
        console.log(count);
    }
}

var myCounter = new Counter;
// myCounter.incrementCount();
// myCounter.decrementCount();



/* Alternate Method (Practised) */

// class Counter{
//     constructor(incrementCount, decrementCount){
//         var count = 0;
//         this.incrementCount = function(){
//             count++;
//             console.log(count);
//             return incrementCount;
//         };
//         this.decrementCount = function(){
//             count--;
//             console.log(count);
//             return decrementCount;
//         };
//     }
// }


// var myCounter = new Counter();
// myCounter.incrementCount();
// myCounter.decrementCount();





/* Trying a different approach (not a correct way tho!) */

// var count = 0;
// class Counter{
//     constructor(incrementCount, decrementCount){
//         this.incrementCount = incrementCount;
//         this.decrementCount = decrementCount;
//     }
// }


// var myCounter = new Counter([count++, count], [count--, count]);
// console.log(myCounter);





// Simple one

// var count = 0;

// function Counter(){
//     count++;
//     console.log(count);
// }

// Counter();
