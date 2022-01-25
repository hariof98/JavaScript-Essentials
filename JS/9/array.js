// Array Methods
const array = [
    {name: 'hari',   age: 23},
    {name: 'yuva',   age: 22},
    {name: 'guru',   age: 28},
    {name: 'sathy',  age: 24},
    {name: 'hrishi', age: 17},
    {name: 'rahul',  age: 10},
]


// 1. filter   --> The JavaScript filter function iterates over the existing values in an array and returns the values that pass
const data = array.filter((item) => {
    return item.age <= 20;
})
//console.log(data);


// 2. map                                --> map is used to create a new array from the given array
const names = array.map((item) => {
    return item.name;
    if(item.age>=21)
    {
        return item.name;
    }
})
//console.log(names);


// 3. some        --> It returns only true or false even if the condition is matched for one property or element
const myData = array.some((item) => {
    return item.age > 30;
})
//console.log(myData);


// 4. every       --> It returns only true or false based on all the properties only
const myRecord = array.every((item) => {
    return item.age < 30;
})
//console.log(myRecord);


// 5. find
const myFind = array.find(list => {
    return list.age < 20;
})
//console.log(myFind.name);


// 6. forEach
array.forEach((list) => {
    //console.log(list.name, list.age);
    //console.log(list.age);
})


// 7. reduce                --> This method will take two parameters
// Here im going to get the total age
const myReduce = array.reduce((myConstrain, item) => {
    return item.age + myConstrain;
}, 0);
//console.log(myReduce);


// 8. includes                      --> This method is used to check whether the given value is present in the array or not.
const myArray = [1, 5, 12, 31, 50, 'hari'];
const myInclude = myArray.includes(31);
//console.log(myInclude);






/*  PRACTICE SECTION FOR some and every  */
/*
const myList1 = [6, 6, 6, 6, 6, 6];
const myObjs1 = myList1.every((list) => {
    return list === 6;
})
console.log(myObjs1);

const myList2 = [1, 2, 3, 4, 5, 6];
const myObjs2 = myList2.every((list) => {
    return list === 7;
})
console.log(myObjs2);
*/
