function makeRequest() {
    var xhr = new XMLHttpRequest();
    var json;
    var url = "http://localhost:9966/petclinic/api/pets";
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            json = JSON.parse(xhr.responseText);
            console.log("Response: ", json);
            display();
        }
    }

    xhr.send();

    function display() {
        const newList = document.createElement("ol");
        for (let info of json) { // loop through the response
            const containerEl = document.getElementById("pets");
            const newEl = document.createElement("li");
            const information = info.name;
            newEl.innerHTML = information;
            newList.append(newEl);
            containerEl.appendChild(newList);
        }
    }
}
makeRequest();