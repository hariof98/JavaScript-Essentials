// Mutation observer is used to observe the changes that are being made to our DOM

const mutObserver = new MutationObserver((entries) => {
    console.log(entries);
});   // Mutation observer takes only one argument that keeps track of every changes

const myParent = document.querySelector('#parent');

// observe() takes two parameters, here we are going to observe myParent and second parameter is attribute
mutObserver.observe(myParent, {
    childList: true,
    // subtree : true => to observe all the things inside parent
    subtree: true,
    characterData: true,
    characterDataOldValue: true
});  

setTimeout(() => {
    var removableData = myParent.children[1];
    removableData.remove();    
}, 500);


setTimeout(() => {
    var temp = document.createElement('div');
    myParent.appendChild(temp);
    temp.innerText= 'Joker-div';
    temp.className = 'class2';
}, 1000);



setTimeout(() => {  
    var thisChange = myParent.children[0];
    thisChange.innerText = 'Hii';
}, 2000);



// FYI, to make changes to child we not only have to call children but also childNodes in which acutually the children is present in DOM
