"use strict";
var Aufgabe_07;
(function (Aufgabe_07) {
    loadArticles("artikel.json");
    async function loadArticles(_url) {
        let response = await fetch(_url);
        let jsonArray = await response.json();
        Aufgabe_07.produkte = await JSON.parse(JSON.stringify(jsonArray));
        Aufgabe_07.produkteErzeugen();
    }
})(Aufgabe_07 || (Aufgabe_07 = {}));
//# sourceMappingURL=scriptProduktdaten.js.map