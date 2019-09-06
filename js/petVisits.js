function makeRequest() {
    var xhr = new XMLHttpRequest();
    var json;
    var url = "http://localhost:9966/petclinic/api/visits";
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
        for (let info of json) { // loop through the response
            const containerEl = document.getElementById("pets");
            const newEl = document.createElement("h4");
            const information = "Date: " + info.date + " Description: " + info.description;
            console.log(information);
            newEl.innerHTML = information;
            containerEl.append(newEl);
        }
    }

}
makeRequest();