function uefaChampions(year, page) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${page}`)
        .then((response) => {
            var thisData = response.json();
            return thisData;
        })
        .then((res) => {
           var thisData = res.data;
           thisData.forEach((list) => {
               if(list.round == 'final'){
                  resolve([list.team1, list.team2]);
               }
           })
        })
        .catch((err) => {
            return err;
        })
    })
}
var leagueName = uefaChampions("2014", "13");

leagueName.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})

