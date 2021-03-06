"use strict";
var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", handleLoad);
    let form;
    // document.getElementById("reset")?.addEventListener("click", resetOrder);
    async function handleLoad(_event) {
        let response = await fetch("../scripts/auswahl.json"); // Daten aus JSON laden
        let artikel = await response.text();
        let inhalt = JSON.parse(artikel);
        Endabgabe.produkteErzeugen(inhalt);
        form = document.querySelector("form");
        form.addEventListener("change", handleChange);
        displayOrder();
    }
    function handleChange(_event) {
        displayOrder();
    }
    function displayOrder() {
        let preis = 0;
        let bestellung = document.querySelector("div#order");
        bestellung.innerHTML = "";
        let formData = new FormData(form);
        for (let entry of formData) {
            let selector = "[value='" + entry[1] + "']";
            let auswahl = document.querySelector(selector);
            let auswahlPreis = Number(auswahl.getAttribute("preis"));
            bestellung.innerHTML += auswahl.value + ": " + auswahlPreis.toFixed(2) + " €" + "<br>";
            preis += auswahlPreis;
            localStorage.setItem("Produkte", JSON.stringify(bestellung.innerHTML));
        }
        // Preis an Bestellung anhängen und in LocalStorage
        bestellung.innerHTML += "<p><strong>Gesamtsumme: " + preis.toFixed(2) + " €";
        localStorage.setItem("Gesamtsumme", "<b>Gesamtsumme: </b>" + JSON.stringify(preis.toFixed(2) + " €"));
    }
    /*export function resetOrder(_event: Event): void { // funktioniert über Javascript im HTML
        window.location.reload(true);
        window.localStorage.clear();
        let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("bestellung");
        if (formular) {
            formular.reset();
            let divOrder: HTMLElement = <HTMLElement>document.getElementById("order");
            divOrder.innerHTML = "";
            displayOrder();
            document.getElementById("order")?.removeChild(<Node>document.getElementById("order")?.lastChild);
        }
    }*/
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script.js.map