var xhr = new XMLHttpRequest();
var json;
var url = "http://localhost:9966/petclinic/api/owners";
xhr.open("GET", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        json = JSON.parse(xhr.responseText);
        display();
    }
}

xhr.send();

function display() {

    for (let info of json) {
        

        //for loop for pets 
        for(let pet of info.pets){
            const containerEl = document.getElementById("myDiv");
            const newEl = document.createElement("h4");
            const information = "Pet Name: " +pet.name+ ", D.O.B = "+pet.birthDate+ ", Pet Type: "+pet.type.name+", Owner: " + info.firstName +" "+ info.lastName;  
            console.log(information);
            newEl.innerHTML = information;
            containerEl.append(newEl);
    }
    }
}

