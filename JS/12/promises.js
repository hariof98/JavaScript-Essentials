let p = new Promise((resolve, reject) => {
    let a = 1 + 8;
    if(a % 2 === 0){
        resolve('Success');
    }
    else{
        reject('Failure');
    }
})

p.then((message)=>{
    console.log('Yayyy its a', message);
}).catch((message) =>{
    console.log('Its okay', message, 'is the stepping stone for success');   
});
   