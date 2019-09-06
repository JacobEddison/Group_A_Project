let json;
let baseURL = "http://localhost:9966/petclinic/api/";

function getAllPets() {
    getRequest("owners", "pets");
}

function getAllOwners() {
    getRequest("owners", "owners");
}



function getRequest(apiDirectory, disp) {
    var xhr = new XMLHttpRequest();
    var url = `${baseURL}${apiDirectory}`;
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status < 300 && xhr.status >= 200) {
            json = JSON.parse(xhr.responseText);
            display(disp);
        }
    }

    xhr.send();
}

function display(what) {
    switch (what) {
        case "pets":
            displayPets();
            break;
        case "owners":
            displayOwners();
            break;
    }
}

function displayPets() {
    for (let info of json) {
        //for loop for pets 
        for (let pet of info.pets) {
            const containerEl = document.getElementById("myDiv");
            const newEl = document.createElement("h4");
            const information = "Pet Name: " + pet.name + ", D.O.B = " + pet.birthDate + ", Pet Type: " + pet.type.name + ", Owner: " + info.firstName + " " + info.lastName;
            console.log(information);
            newEl.innerHTML = information;
            containerEl.append(newEl);
        }
    }
}

function displayOwners() {

    for (let info of json) {
        const containerEl = document.getElementById("myDiv");
        const newEl = document.createElement("h4");
        const information = "First name: " + info.firstName + ", Last name: " + info.lastName + ", Telephone: " + info.telephone + ", City: " + info.city;
        console.log(information);
        newEl.innerHTML = information;
        containerEl.append(newEl);
    }
}