
regDataSave = (data) => {
    postData("http://localhost:8000/api/user/reg",data).then((response) => {
    return response.json();
        }).then((data) => {console.log(data)});
}