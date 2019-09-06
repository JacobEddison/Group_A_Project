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
        const containerEl = document.getElementById("myDiv");
        const newEl = document.createElement("h4");
        const information = "First name: " + info.firstName + ", Last name: " + info.lastName + ", Telephone: " + info.telephone + ", City: " + info.city;
        console.log(information);
        newEl.innerHTML = information;
        containerEl.append(newEl);
    }
}