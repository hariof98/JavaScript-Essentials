// Ternary Operators

var number = 20;
var result;
var result2;

// normal flow
if(number >= 50) {
    result = 'Very Good';
}
else{
    result = 'Very Bad';
}

// ternary operator

/* 
syntax: 
    if condition ? 'executes if block' : 'executes else block'
*/

result2 = number >= 50 ? 'Very Good' : 'Very Bad';

console.log(result);
console.log(result2);


// Nested ternary => ( dont use it anywhere....its not advisible!)

// normal flow
var sum = 100;
var data;
var data2;

if(sum === 100) {
    data = 'You scored 100';   
}
else if(sum < 100 && sum > 50) {
    data = 'You have passed';
}
else{
    data = 'You have failed';
}

// nested ternary

/* syntax:
    if condition ? 'executes if block' : (else condition ? 'executes else if block' : 'executes else block')
*/

data2 = sum === 100 ? 'You scored 100' : (sum < 100 && sum > 50 ? 'You have passed' : 'You have failed');

console.log(data)
console.log(data2);