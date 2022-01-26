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