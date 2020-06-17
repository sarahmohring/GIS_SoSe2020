"use strict";
var Aufgabe_08;
(function (Aufgabe_08) {
    let formData;
    document.getElementById("button")?.addEventListener("click", buttonHandler);
    function buttonHandler() {
        responseHolen("https://gis-sose2020.herokuapp.com/");
    }
    async function responseHolen(_url) {
        formData = new FormData(document.forms[0]);
        let url = "" + _url;
        let query = new URLSearchParams(formData);
        url += url + "?" + query.toString();
        let response = await fetch(url);
        let responseToUser = await response.text();
        console.log(responseToUser);
    }
})(Aufgabe_08 || (Aufgabe_08 = {}));
//# sourceMappingURL=script.js.map