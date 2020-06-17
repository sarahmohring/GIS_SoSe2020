"use strict";
var Aufgabe_08;
(function (Aufgabe_08) {
    document.getElementById("button")?.addEventListener("click", buttonHandler);
    async function addToURL() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gis-sose2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url += url + "?" + query.toString();
        return url;
    }
    async function buttonHandler() {
        getResponse(await addToURL());
    }
    async function getResponse(_url) {
        let response = await fetch(_url);
        let resp2 = await response.text();
        console.log("Response", resp2);
    }
})(Aufgabe_08 || (Aufgabe_08 = {}));
//# sourceMappingURL=script.js.map