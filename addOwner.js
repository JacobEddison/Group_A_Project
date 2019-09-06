function makeRequest(formObject) {
    var xhr = new XMLHttpRequest();
    var json;
    var url = "http://localhost:9966/petclinic/api/owners";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            json = JSON.parse(xhr.responseText);
            display();
        }
    }
    xhr.send(JSON.stringify(formObject));
}


function addOwner(form) {
    alert("Form submitted!");
    console.log(form);
    let formObject = {};
    for (let element of form.elements) {
        if (element.value) {
            formObject[element.id] = element.value;
        }
    };
    console.log(formObject);
    console.log(JSON.stringify(formObject));
    debugger;
    makeRequest(formObject);
        // .then(()=>{
        //     console.log("it worked");
        // })
        // .catch((error)=>{
        //     console.log("It failed"+error);
        // })
    return false;
}
