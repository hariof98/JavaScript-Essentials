// function parentCounter(){
//     var counter = 0;

//     function myCounter(){
//         counter++;
//         console.log(counter);
//     }
//     return myCounter;
// }

// var myCounterValue = parentCounter();
// myCounterValue();


function Counter()
{
    var count = 0;

    this.increment = function (){
        count++;
        console.log(count);
    }
    this.decrement = function (){
        count--;
        console.log(count);
    }
}

var myCountdown = new Counter();

// myCountdown.increment();
// myCountdown.decrement();
