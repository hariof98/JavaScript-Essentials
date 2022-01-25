// classList method

// get class list
document.querySelector("body div.main").classList;

// to add new class
document.querySelector("body div.main").classList.add("newClass");

// toggle will turn on and off the class
//document.querySelector("body div.main").classList.toggle("newClass");

setTimeout(() => {
    document.querySelector("body div.main").classList.toggle("newClass");
    document.querySelector("body div.main").style.backgroundColor = "white";
     setTimeout(() => {
        document.querySelector("body div.main").style.backgroundColor = "darkgray";
    }, 3000);
}, 2000);


// to replace a class
document.querySelector("body div.main").classList.replace("newClass", "newMain");


// to remove a class
document.querySelector("body div.main").classList.remove("newMain");





// attributes
document.querySelector("body div.navbar").attributes;       // attributes are HTML attributes like img src, alt, a href, etc....


// checking attribute
document.querySelector("body div.navbar").hasAttribute("alt");        // it returns true or false


// to set attribute
document.querySelector("body div.navbar").setAttribute("alt", "This is an example text"); 


// to get attribute
document.querySelector("body div.navbar").getAttribute("alt"); 


// remove attribute
setTimeout(() => {
    document.querySelector("body div.navbar").removeAttribute("alt"); 
}, 10000);

