"use strict";
var Aufgabe_08;
(function (Aufgabe_08) {
    let formData = new FormData(document.forms[0]);
    let myButton = document.getElementById("button");
    myButton.addEventListener("click", buttonHandler);
    /*for (let entry of formData) {
        console.log("name: " + entry[0]);
        console.log("value: " + entry[1]);
    }*/
    async function addToURL() {
        let url = "https://gis-sose2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url += url + "?" + query.toString();
        return url;
    }
    async function buttonHandler() {
        getResponse(await addToURL());
    }
    async function getResponse(_url) {
        let response = await fetch(_url, { method: "get" });
        let resp2 = await response.text();
        console.log(resp2);
    }
})(Aufgabe_08 || (Aufgabe_08 = {}));
//# sourceMappingURL=auswertung.js.map