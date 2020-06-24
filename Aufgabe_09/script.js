"use strict";
var Aufgabe_09;
(function (Aufgabe_09) {
    let formData;
    document.getElementById("buttonHTML")?.addEventListener("click", buttonHandlerHTML);
    document.getElementById("buttonJSON")?.addEventListener("click", buttonHandlerJSON);
    async function buttonHandlerHTML() {
        formData = new FormData(document.forms[0]);
        let url = "https://gis-sose2020.herokuapp.com/";
        url += "/html";
        let query = new URLSearchParams(formData);
        url += url + "?" + query.toString();
        let response = await fetch(url);
        let responseToClient = await response.text();
        let serverResponse = document.getElementById("serverResponse");
        serverResponse.innerHTML = responseToClient;
    }
    async function buttonHandlerJSON() {
        formData = new FormData(document.forms[0]);
        let url = "https://gis-sose2020.herokuapp.com/";
        url += "/json";
        let query = new URLSearchParams(formData);
        url += url + "?" + query.toString();
        let response = await fetch(url);
        let responseToClient = await response.json();
        console.log(responseToClient);
    }
})(Aufgabe_09 || (Aufgabe_09 = {}));
//# sourceMappingURL=script.js.map