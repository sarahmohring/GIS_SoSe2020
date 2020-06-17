"use strict";
var Aufgabe_08;
(function (Aufgabe_08) {
    document.getElementById("button")?.addEventListener("click", buttonHandler);
    let formData = new FormData(document.forms[0]);
    async function zuURL() {
        let url = "https://gis-sose2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url += url + "?" + query.toString();
        console.log(url);
        return url;
    }
    async function buttonHandler() {
        responseHolen(await zuURL());
    }
    async function responseHolen(_url) {
        let response1 = await fetch(_url);
        let response2 = await response1.text();
        console.log("Response", response2);
    }
})(Aufgabe_08 || (Aufgabe_08 = {}));
//# sourceMappingURL=script.js.map