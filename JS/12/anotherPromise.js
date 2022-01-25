let usersWatching = true;
let usersNotSubscribing = true;

function myPromise(){
    return new Promise((resolve, reject) => {
        if(usersWatching === false){
            reject({
                name: 'Not Wathing',
                message: ':('
            });
        }
        else if(usersNotSubscribing === false){
            reject({
                name: 'Not Subscribing as well',
                message: ':( :('   
            });
        }
        else{
            resolve('Wow You are Famous now');
        }
    })
}

myPromise().then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message.name, message.message);
});