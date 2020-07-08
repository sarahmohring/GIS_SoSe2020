"use strict";
var Endabgabe;
(function (Endabgabe) {
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
    function radioAuswahl(_auswahl, _kategorie) {
        let group = document.createElement("span");
        for (let auswahl of _auswahl) {
            let divElem = document.createElement("div");
            divElem.setAttribute("id", "flexDiv");
            group.appendChild(divElem);
            let radio = document.createElement("input");
            radio.type = "radio";
            radio.setAttribute("preis", auswahl.preis.toFixed(2));
            radio.value = auswahl.name;
            radio.name = _kategorie;
            radio.id = auswahl.name;
            let label = document.createElement("label");
            label.textContent = auswahl.name;
            label.htmlFor = auswahl.name;
            let imgURL = document.createElement("img");
            imgURL.setAttribute("src", auswahl.url);
            imgURL.setAttribute("alt", auswahl.name);
            divElem.appendChild(radio);
            divElem.appendChild(label);
            divElem.appendChild(imgURL);
        }
        return group;
    }
    function checkboxAuswahl(_auswahl, _kategorie) {
        let group = document.createElement("span");
        for (let auswahl of _auswahl) {
            let divElem = document.createElement("div");
            divElem.setAttribute("id", "flexDiv");
            group.appendChild(divElem);
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("preis", auswahl.preis.toFixed(2));
            checkbox.value = auswahl.name;
            checkbox.name = _kategorie;
            checkbox.id = auswahl.name;
            let label = document.createElement("label");
            label.textContent = auswahl.name;
            label.htmlFor = auswahl.name;
            let imgURL = document.createElement("img");
            imgURL.setAttribute("src", auswahl.url);
            imgURL.setAttribute("alt", auswahl.name);
            divElem.appendChild(checkbox);
            divElem.appendChild(label);
            divElem.appendChild(imgURL);
        }
        return group;
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=skript_produkte.js.map