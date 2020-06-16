"use strict";
let formData = new FormData(document.forms[0]);
for (let entry of formData) {
    console.log(entry);
    console.log("name: " + entry[0]);
    console.log("value: " + entry[1]);
}
let url = "https://whatever.server/path/file";
let query = new URLSearchParams(formData);
url += url + "?" + query.toString();
await fetch(url);
//# sourceMappingURL=auswertung.js.map