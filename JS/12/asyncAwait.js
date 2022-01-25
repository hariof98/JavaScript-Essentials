let hasEaten = true;
let hasSlept = true;

function myPromise(){
    return new Promise((resolve, reject) => {
        if(hasEaten=== false && hasSlept === false){
            reject('Not Ate and Not Slept Yet :(');
        }
        else if(hasEaten === false){
            reject('Not Ate Yet :(');
        }
        else if(hasSlept === false){
            reject('Not Slept Yet :(');
        }
        else{
            resolve('Yeah Ate and Slept :)')
        }
    })
}

myPromise().then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})
