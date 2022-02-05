/*------------------------------------------- getElements -------------------------------------*/

// getElementById

/* id will be present for only one element in html */
const byId = document.getElementById('grandparent-1');
byId.style.backgroundColor="green";


// getElementsByClassName

//document.getElementsByClassName("parent").forEach(list=> list.style.backgroundColor="pink");

/* The above line wont work, because if we get a class name it returns a collection of classes if present, 
so we need to use foreach to iterate and we need to get it as Array since it returns a collection */

// Array.from() => is used to return the collection of classes as an array

const byClass = Array.from(document.getElementsByClassName("parent"));
byClass.forEach(list=> list.style.backgroundColor="pink");
 
/*------------------------------------------- querySelectors in JS uses CSS queries -------------------------------------*/

/* The querySelector() method returns the first element that matches a specified CSS selector(s) in the document, or null is returned if there are no matches.

querySelector() method can only be used to access a single element while 
querySelectorAll() method can be used to access all elements which match with a specified CSS selector. */


// querySelector

const myqSelector  = document.querySelector('.grandparent');    // Im calling the class name here which is a css selector
const myqSelector2 = document.querySelector('#grandparent-1');  // Im calling the ID here which is a css selector
const myqSelector3 = document.querySelector('body div.grandparent');  // we can also call the class like this
myqSelector2.style.backgroundColor="black";


// querySelectorAll
// we need to use foreach to iterate through all that matches the given css query

const myqSelectorAll  = document.querySelectorAll('.grandparent');  // if multiple class with same name is present, the defined changes will take effect for all
myqSelectorAll.forEach(list=>list.style.backgroundColor="yellow");

const myqSelectorAll2 = document.querySelectorAll('.parent2');
myqSelectorAll2.forEach(list => list.style.backgroundColor="blue");



/*-------------------------------------------- selecting child --------------------------------------------------*/

const grandParents = document.querySelector('#grandparent-1');  // defining parent
const Children     = Array.from(grandParents.children);         // .children is used to access the child elements 
const myChi        = Children[0].style.backgroundColor="green";
console.log(Children);

const check = document.querySelector('#grandparent-1');
const check2 = Array.from(check.children);
console.log(check2);
console.log(check2[0].children);   
/* or as array */ 
console.log(Array.from(check2[0].children));


/*-------------------------------------------- selecting parent --------------------------------------------------*/
/*-------------------------------------------- traversing tree upwards starts ------------------------------------*/

const childs    = document.querySelector('.child2');  // defining child
const parents   = childs.parentElement;               // .parentElement or .parentNode property is used to access the parent element of the given child element
parents.style.backgroundColor="green";
console.log(parents);

const gParents = parents.parentElement;
console.log(gParents);

// Using .parentElement or parentNode we can move up the tree one parent at a time

// If we dont want to go up one by one, we can use the method closest() to go to the near specified element

const childs2  = document.querySelector('.child2');   //childs2.parentElement.style.backgroundColor="blue";
const closeParent = childs2.closest('.grandparent');
console.log(closeParent);
closeParent.style.backgroundColor="darkgrey";