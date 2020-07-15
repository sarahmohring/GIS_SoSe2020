"use strict";
var Endabgabe;
(function (Endabgabe) {
    let orderDiv = document.getElementById("order");
    let bestellung = localStorage.getItem("Produkte");
    let inhalt = document.createElement("p");
    inhalt.innerHTML = bestellung;
    orderDiv.appendChild(inhalt);
})(Endabgabe || (Endabgabe = {}));
/* Artikel von der Shopseite müssen aus Local Storage (?) wieder erzeugt werden, aber als Liste (Aufzählungsicon Eis)
- Behälter: ...
- Eissorten: ...
- Toppings: ...
- Preis: ...
(div für einzelne Bestellungen)
darunter Gesamtpreis: ...
dann Form Bestelldaten
nach dem Absenden reset von Warenkorb Icon und Preis und Form und Bestellungen, Anzeige "Danke für Ihre Bestellung"-Seite mit "zurück zum Start"
*/ 
//# sourceMappingURL=warenkorb.js.map