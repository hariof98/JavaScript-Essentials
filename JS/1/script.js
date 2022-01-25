const backpack = {
    name: "Hari's Backpack",
    color: "Red",
    price: "5000",
    volume: "50",
    type: "Travel"
}
//console.log(backpack);

// Here const is constant, it wont allow us to change object completely 
// backpack is the object container/variable and name, color,... are the properties of the object

// Properties and its values are seperated by : and multiple properties are separated by comma's.
// A property can be defined as string, integer or boolean
// Here in object backpack, color is the key and "Red" is value, so properties are key-value pairs

const myMultiObj = [
    {
        name: "Hari",
        age: 23,
        Degree: "BE.CSE",
        isDeveloper: true
    },                              // when using multiple objects, enclose it within an array and seperate the objects with commas
    {
        name: "Hari",
        age: 23,
        Degree: "BE.CSE",
        isDeveloper: true
    }
]

//console.log(myMultiObj);


const details = {
    name: "Hari",
    mobile: "9999999999",
    role:{                                  // nested objects
        title: "Developer",
        exp: "1.5 yrs",
    }
}

var data = "role";
// console.log("The necessary details are:", details.name, details[data]);


const myProfile = {
    fname: "Hari",
    lname: "S",
    age: 23,
    isGraduated: true,
    workExp:{                       // Nested Object
        role: "Developer",
        company: "Worldline",
        exp: "1.5 yrs",
        languageUsed: "Laravel",
    }
}

//console.log(myProfile.fname);
var info = "workExp";               // calling the nested object in string to get all the details.

//console.log(myProfile[info]);     // If you store a property(which acts as an object), inside single or double quotes, 
                                    // you can get that property without dot operator and by using [] operator


// Functions inside Objects are called as Methods
const myResume = {
    isresumeVerified: false,
    resumeStatus: function(isresumeVerified){
        this.isresumeVerified = isresumeVerified;
    }
}

var myObj = {
    name: 'Hari',
    age: 23,
    college: 'Rit',
    cgpa: 7.03,
    batch: function(college, cgpa){
        this.college = college,
        this.cgpa = cgpa
    }
}

console.log(myObj);
// try myObj.batch('argument1', 'argument2') in console


const myJar = {
    lidOpen: true,
    onLid: function(lidOpen){
        this.lidOpen = lidOpen;
    }
}

const myJar2 = {
    lidOpen: true,
    onLid: function(lidStatus){
        this.lidOpen = lidStatus;
    }
}


const ronaldoStat = {
    club: 'Manchester United',
    shot: 90,
    drib: 95,
    pac:  90,
    lastYear: function(club, shot, drib, pac){
        this.club = club,
        this.shot = shot;
        this.pac  = pac;
        this.drib = drib;
    }
}

//console.log('Ronaldo Stat This Year:', ronaldoStat);
ronaldoStat.lastYear('Juventus', 85, 80, 75);
//console.log('Ronaldo Stat Last Year:', ronaldoStat);

var dribbling = "drib";
//console.log(ronaldoStat[dribbling]);


// Practice
const objectHari = {
    name: "hari",
    age: 23,
    myCity:function(name, age){
        this.name = name;
        this.age = age;
        console.log("my name is", this.name, "and I am", this.age, "years old."  )
    }
}


// From Chargebee
var myChopper = {
    getOwners: function(name) {
        this.name = name,
        console.log(name)      
    }
}; 
myChopper.getOwners();


var chopper = {
    owner: 'Zed',
    getOwner: () => {
        //console.log(owner)
    }
}; 

chopper.getOwner();

