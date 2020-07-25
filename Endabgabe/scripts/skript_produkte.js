"use strict";
var Endabgabe;
(function (Endabgabe) {
    // JSON Artikel nach Kategorien aufteilen
    function produkteErzeugen(_inhalt) {
        for (let kategorie in _inhalt) {
            let auswahl = _inhalt[kategorie];
            let group = null;
            switch (kategorie) {
                case "Behaelter":
                    group = radioAuswahl(auswahl, kategorie);
                    break;
                case "Eissorten":
                    group = checkboxAuswahl(auswahl, kategorie);
                    break;
                case "Toppings":
                    group = checkboxAuswahl(auswahl, kategorie);
                    break;
                default:
                    break;
            }
            let fieldset = document.querySelector("fieldset#" + kategorie);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    Endabgabe.produkteErzeugen = produkteErzeugen;
    // Behälter-Auswahl über Radio-Buttons
    function radioAuswahl(_auswahl, _kategorie) {
        let group = document.createElement("span");
        for (let auswahl of _auswahl) {
            let divElem = document.createElement("div");
            divElem.setAttribute("id", "flexDiv");
            group.appendChild(divElem);
            let label = document.createElement("label");
            label.textContent = auswahl.name;
            label.htmlFor = auswahl.name;
            label.setAttribute("id", "flexLabel");
            let radio = document.createElement("input");
            radio.type = "radio";
            radio.setAttribute("preis", auswahl.preis.toFixed(2));
            radio.value = auswahl.name;
            radio.name = _kategorie;
            radio.id = auswahl.name;
            label.appendChild(radio);
            let imgURL = document.createElement("img");
            imgURL.setAttribute("src", auswahl.url);
            imgURL.setAttribute("alt", auswahl.name);
            label.appendChild(imgURL);
            divElem.appendChild(label);
        }
        return group;
    }
    // Eissorten-Auswahl über Checkboxen
    function checkboxAuswahl(_auswahl, _kategorie) {
        let group = document.createElement("span");
        for (let auswahl of _auswahl) {
            let divElem = document.createElement("div");
            divElem.setAttribute("id", "flexDiv");
            group.appendChild(divElem);
            let label = document.createElement("label");
            label.textContent = auswahl.name;
            label.htmlFor = auswahl.name;
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("preis", auswahl.preis.toFixed(2));
            checkbox.value = auswahl.name;
            checkbox.name = _kategorie;
            checkbox.id = auswahl.name;
            label.appendChild(checkbox);
            let imgURL = document.createElement("img");
            imgURL.setAttribute("src", auswahl.url);
            imgURL.setAttribute("alt", auswahl.name);
            label.appendChild(imgURL);
            divElem.appendChild(label);
        }
        return group;
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=skript_produkte.js.map