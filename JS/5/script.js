// accessing elements using querySelector and also using template literals

class Name{
    constructor(one, two, three, four, five)
    {
        this.one = one,
        this.two = two,
        this.three = three,
        this.four = four,
        this.five = five
    }
}

const myName = new Name(
    "abc",
    "qwe",
    "zxc",
    "bnm",
    "dfg"
)

const names = ` 
    <body>
    <div class="container">
      <li class="one-class" id="one-one">One:${myName.one}</li>
      <li>Two:${myName.two}</li>
      <li>Three:${myName.three}</li>
      <li>Four:${myName.four}</li>
      <li>Five:${myName.five}</li>
    </div>
    </body>
`;

document.body.innerHTML = names;

// querySelectors in JS uses CSS queries
// The querySelector() method returns the first element that matches a specified CSS selector(s) in the document, or null is returned if there are no matches.
// querySelector() method can only be used to access a single element while 
// querySelectorAll() method can be used to access all elements which match with a specified CSS selector. 

// Try and Execute in Console
document.querySelector("body li");  // Using querySelector by calling CSS queries. Within body we are calling li
document.querySelectorAll("body li:last-child"); // Calling only last child's property

document.querySelectorAll("body li:last-child").forEach(list => list.style.backgroundColor="red");


// Older method of accessing methods by Class name
document.getElementsByClassName("one-class");       // one-class is defined as the class for tag li in line 25

// Older method of accessing methods by ID
document.getElementById("one-one");   // one-one is defined as ID for tag li in line 25   

