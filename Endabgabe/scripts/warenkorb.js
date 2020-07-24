"use strict";
var Endabgabe;
(function (Endabgabe) {
    let orderDiv = document.getElementById("order");
    let bestellung = localStorage.getItem("Produkte");
    let gesamtpreis = localStorage.getItem("Gesamtsumme");
    let inhalt = document.createElement("p");
    inhalt.innerHTML = bestellung + "<br>" + gesamtpreis;
    orderDiv.appendChild(inhalt);
    let url = "https://gis-sose2020.herokuapp.com/";
    let form = document.querySelector("form");
    let submit = document.querySelector("button[type=button]");
    console.log(submit);
    // form.addEventListener("change", handleChange);
    submit.addEventListener("click", sendOrder);
    async function sendOrder(_event) {
        console.log("Send order");
        let formData = new FormData(form);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        //alert(responseText);
        alert("Danke für deine Bestellung!");
    }
})(Endabgabe || (Endabgabe = {}));
/* Artikel von der Shopseite müssen aus Local Storage wieder erzeugt werden, aber als Liste (Aufzählungsicon Eis)
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