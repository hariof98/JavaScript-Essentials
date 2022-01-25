function X(){
    for(let i = 1; i <= 5; i++){
        setTimeout(function(){
            console.log(i);
        }, i*3000)
    }
}
X();

// function X(){
//     for(var i = 1; i <= 5; i++){
//         function Close(x){
//             setTimeout(function(){
//                 console.log(x);
//             }, x*3000)
//         }
//         Close(i);
//     }
// }
// X();