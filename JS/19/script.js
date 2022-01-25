var myJsonObject = [
    {
        "name": "Hari",
        "age": 23,
        "Degree": "BE.CSE",
        "isDeveloper": true
    },                                 
    {
        "name": "Tyler",
        "age": 25,
        "Degree": "BE.MECH",
        "isDeveloper": false,
        "isGood": [
            {
                "performance": true,
                "exp": false
            },
            {
                "dob": '12/11/1998',
                "salary": 3.3
            }
        ] 
    }
]

console.log(myJsonObject);
console.log(myJsonObject[1]);

// But JSON data will not come as array of objects, it will come as string only. So we need to parse it.

var myOrigJsonObj = `[
    {
        "name": "Hari",
        "age": 23,
        "Degree": "BE.CSE",
        "isDeveloper": true
    },                                 
    {
        "name": "Tyler",
        "age": 25,
        "Degree": "BE.MECH",
        "isDeveloper": false
    }
]`

console.log(JSON.parse(myOrigJsonObj));
// JSON.parse() to convert text into a JavaScript object



/*---------------------------------------------------------------------------------------------------------------*/



// Methods in JSON
var a = ['hari', 'yuva'];
console.log(a, a[0]);

var b = JSON.stringify(a);          // JSON.stringify() will convert object or an array to string
console.log(b, b[0]);

var c = JSON.parse(b);
console.log(c, c[0]);




// remember
var abc = true
var abc = 'true'
var abc = ['hari', true, 12];

console.log(JSON.stringify(abc));














// doubts-clear

var myJsonObject11 = 
    {
        "name": "Hari",
        "age": 23,
        "Degree": "BE.CSE",
        "isDeveloper": true
    }

//console.log(myJsonObject11);