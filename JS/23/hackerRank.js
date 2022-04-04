// function uefaChampions(year, page) {
//     return new Promise((resolve, reject) => {
//         fetch(`https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${page}`)
//         .then((response) => {
//             var thisData = response.json();
//             return thisData;
//         })
//         .then((res) => {
//            var thisData = res.data;
//            thisData.forEach((list) => {
//                if(list.round == 'final'){
//                   resolve([list.team1, list.team2]);
//                }
//            })
//         })
//         .catch((err) => {
//             return err;
//         })
//     })
// }
// var leagueName = uefaChampions("2014", "13");

// leagueName.then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })

function getNumTransactions(username) {
    fetch(`https://jsonmock.hackerrank.com/api/article_users?username=${username}`)
    .then((res) => {
        var response = res.json();
        return response;
    })
    .then((data) => {
        console.log(data.data);
        if(data.data[0] != null) {
            console.log(username);
            var userId = data.data[0].id;
            fetch(`https://jsonmock.hackerrank.com/api/transactions?&userId=${userId}`)
            .then((result) => {
                var thisResult = result.json();
                return thisResult;
            })
            .then((pureData) => {
                console.log(pureData.total);
            })
        }
        else{
            console.log("Username Not Found");
        }
    })
}

getNumTransactions('epaga');



/*
async function getNumTransactions(username) {
    try{
        const { data } = await axios.get(`https://jsonmock.hackerrank.com/api/article_users?username=${username}`);
    if(data.data && data.data.length !== 0) {
        const userId = data.data[0].id;
        const response = await axios.get(`https://jsonmock.hackerrank.com/api/transactions?&userId=${userId}`);
        return response.data.total;
    }
    else{
        return "Username Not Found";
    }
}
catch(error){
    console.log(error);
}

}
*/