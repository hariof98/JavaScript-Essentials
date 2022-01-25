// fetch use promises
// api: https://reqres.in/api/users/


fetch('https://reqres.in/api/users/')
    .then((message) => {
        //console.log(message);
        /* In response body in console, we will get the data of the API.
           The data we get cannot be accessed directly from the response object 
           since the data is JSON based. 
           So we need to use a method to convert the data to JSON */
        //console.log(resposne.json());
        return message.json();        // By using this return statement, the value will be passed to the next then() method
    })
    .then((result) => {
        /* Since fetch is promise based, we can use multiple then() to pass on the data from previous then() to next then()....*/
        //console.log(data);
        var myData = result;
        var myResult = myData.data;
        //console.log(myResult.length);
        for(var a = 0; a<myResult.length; a++){
            console.log(myResult[a]['email'], '[' ,myResult[a]['first_name'], ']');
        }   
    })
    

// fetch usually takes TWO Parameters to perform GET, POST requests....



