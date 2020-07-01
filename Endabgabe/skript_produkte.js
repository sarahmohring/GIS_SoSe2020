"use strict";
var Endabgabe;
(function (Endabgabe) {
    loadProducts("auswahl.json");
    async function loadProducts(_url) {
        let response = await fetch(_url);
        let jsonArray = await response.json();
        Endabgabe.auswahl = await JSON.parse(JSON.stringify(jsonArray));
        Endabgabe.auswahlErzeugen();
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=skript_produkte.js.map