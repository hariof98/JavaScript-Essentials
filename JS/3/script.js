function Ball(type, color, texture) {
    this.type    = type;
    this.color   = color;
    this.texture = texture;
}

var myBall = new Ball('Football', 'Black and White', 'PL Texture');

console.log(myBall);

// Here the above code is called constructor function
// A function becomes a 'constructor' when it is being called with the New Operator, constructing a new class instance.


// This is example of a plain function without any constructors
function Ring()
{
   console.log("My Ring");
}

Ring();


// This is an example of constructor
class Boy{
    constructor(name)
    {
        this.name = name;
    }
}
const myBoy = new Boy('Hari');
console.log(myBoy);
