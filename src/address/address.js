regDataSave = (data) => {
    postData(`http://localhost:8000/api/user/2/address`,data).then((response) => {
    return response.json();
        }).then((data) => {console.log(data)});
}