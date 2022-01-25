const myArray1 = [1, 2, 3, 4, 5];

const myFilter = myArray1.filter(function(list){
    return list > 2;
})

const myFilter2 = myArray1.filter((list) => {
    return list > 2;
})
//console.log(myFilter2);

myArray1.forEach((list) => {
    setTimeout(() => {
        //console.log(list);
    }, list * 5000);
})


// map method
const myMap = [10, 2, 34, 2, 100, 44, 32];

const myObjMap = myMap.map((list) => {
    return list * 2;
})
//console.log(myObjMap);


// map method - alternate 1
var myArray = [1, 2, 3, 4, 5, 10, 100];

function list(Y){
    return Y * 2;
}

var myObj1Map = myArray.map((list));

console.log(myObj1Map);


// map method - alternate 2
var myArrayData = [1, 2, 3, 4, 5, 10, 100];

var myResult = myArrayData.map(function(list) {
    return list * 3;
})

console.log(myResult);
