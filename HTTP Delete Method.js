let userInputEl = document.getElementById("userInput");
let sendDeleteRequestBtnEl = document.getElementById("sendDeleteRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");

function displayResult(result) {
    loadingEl.classList.add("d-none");
    requestStatusEl.textContent = result.code;
    httpResponseEl.textContent = JSON.stringify(result);
}

function sendPutRequest() {
    loadingEl.classList.remove("d-none");
    let url = "https://gorest.co.in/public-api/users" + userInputEl.value;
    let options = {
        method: "DELETE"
    }
    fetch(url, options)
        .then(function(response) {
            return response.json()
        }).then(function(jsonData) {
            displayResult(jsonData);
        });

}

sendDeleteRequestBtnEl.addEventListener("click", sendPutRequest);