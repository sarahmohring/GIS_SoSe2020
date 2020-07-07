"use strict";
var Aufgabe_11;
(function (Aufgabe_11) {
    let formData;
    let buttonDatenbank = document.getElementById("buttonDatenbank");
    buttonDatenbank.addEventListener("click", handleClickStore);
    let buttonJSON = document.getElementById("buttonJSON");
    buttonJSON.addEventListener("click", handleClickRetrieve);
    async function handleClickRetrieve() {
        let serverURL = "https://gis-sose2020.herokuapp.com";
        serverURL += "/retrieve";
        let response = await fetch(serverURL);
        let responseText = await response.text();
        document.getElementById("serverResponse").innerHTML = responseText;
    }
    async function handleClickStore() {
        formData = new FormData(document.forms[0]);
        let serverURL = "https://gis-sose2020.herokuapp.com";
        serverURL += "/store";
        let query = new URLSearchParams(formData);
        serverURL += "?" + query.toString();
        let formular = document.getElementById("form");
        formular.reset();
        await fetch(serverURL);
    }
})(Aufgabe_11 || (Aufgabe_11 = {}));
//# sourceMappingURL=script.js.map