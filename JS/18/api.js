fetch('https://reqres.in/api/users/')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        var myData = data;
        var myFilter = myData.data;
        let front = '';
        for(var a = 0; a<myFilter.length; a++){
            front=front+ `<tr>
                <td>${myData.data[a]['email']}</td>
                <td>${myData.data[a]['first_name']}</td>
            </tr>`
            console.log(myData.data[a]['email'], '[', myData.data[a]['first_name'], ']');
            document.getElementById('data').innerHTML = front;
        }
        
    })
    .catch((err) => {
        console.log(err);
    })