const myObj = Array.from(document.getElementsByClassName('child2'));
myObj.forEach(list=>list.style.backgroundColor="black");    
console.log(myObj);

const myObj = document.getElementById('1');
myObj.style.backgroundColor="black";    
console.log(myObj);


const a = document.querySelector('.grandparent');
const b = a.children[0];
const c = b.children[1];
const d = c.style.backgroundColor="black";
console.log(c);




const a = Array.from(document.querySelectorAll('.grandparent'));
const b = a.forEach(list=>list.style.backgroundColor="black");
console.log(b);


const a1 = document.querySelector('#grandparent-1');
const b1 = a1.style.backgroundColor="blue";
console.log(b1);


/* Note: 1. In querySelector and querySelectorAll we need to specify whether the given css query is a class or id
         2. In getElementById and getElementsByClassName we dont need to specify */