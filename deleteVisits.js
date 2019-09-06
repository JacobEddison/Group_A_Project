function buttonClicked() {
    var num = document.getElementById("visitID").value;

    deleteVisit(num);
}


function deleteVisit(id) {
    var url = "http://localhost:9966/petclinic/api/visits/";
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", url + id, true);
    xhr.onload = function() {
        var visits = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.log(visits);
        } else {
            console.log("something went wrong", visits);
        }
    }
    xhr.send(null);
}