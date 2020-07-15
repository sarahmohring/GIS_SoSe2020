"use strict";
var Endabgabe;
(function (Endabgabe) {
    /*//Liste für Einkaufswagen
    let cartContent: Auswahl[] = [];
    if (localStorage.getItem("Auswahl") != null) {
        let schonDrin: Auswahl[] = JSON.parse(localStorage.getItem("Auswahl")!);
        cartContent = schonDrin;
    }
    // Zaehler für Anzahl der Produkte
    let zaehler: number[] = [];
    if (localStorage.getItem("Summe") != null) {
        let vorhandenerZaehler: number = parseFloat(localStorage.getItem("Summe")!);
        zaehler[0] = vorhandenerZaehler;
    }*/
    // Produkte erzeugen aus JSON
    window.addEventListener("load", handleLoad);
    let form;
    let url = "http://localhost:5001";
    document.getElementById("reset")?.addEventListener("click", resetForm);
    async function handleLoad(_event) {
        let response = await fetch("auswahl.json");
        let artikel = await response.text();
        let inhalt = JSON.parse(artikel);
        Endabgabe.produkteErzeugen(inhalt);
        form = document.querySelector("form");
        let submit = document.querySelector("button[type=button]");
        console.log(submit);
        form.addEventListener("change", handleChange);
        submit.addEventListener("click", sendOrder);
        displayOrder();
    }
    async function sendOrder(_event) {
        console.log("Send order");
        let formData = new FormData(form);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        alert(responseText);
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
            let selector = "[value='" + entry[1] + "']"; // "[name='" + entry[0] + "'][value='" + entry[1] + "']";
            let auswahl = document.querySelector(selector);
            let auswahlPreis = Number(auswahl.getAttribute("preis"));
            bestellung.innerHTML += auswahl.value + ": " + auswahlPreis.toFixed(2) + " €" + "<br>";
            preis += auswahlPreis;
            localStorage.setItem("Produkte", JSON.stringify(bestellung.innerHTML));
        }
        bestellung.innerHTML += "<p><strong>Gesamtsumme: " + preis.toFixed(2) + " €";
        localStorage.setItem("Gesamtsumme", "<b>Gesamtsumme: </b>" + JSON.stringify(preis.toFixed(2) + " €"));
    }
    function resetForm() {
        let formular = document.getElementById("bestellung");
        if (formular)
            formular.reset();
        localStorage.removeItem("Gesamtsumme");
        localStorage.removeItem("Produkte");
    }
})(Endabgabe || (Endabgabe = {}));
/* LOCAL STORAGE, WARENKORB-ICON

warenkorb.addEventListener("click", handleClick);

            function handleClick(): void {

                let kreisDiv: HTMLElement = <HTMLElement>document.getElementById("kreisIcon");

                zaehler.push(produkte[index].preis);

                cartContent.push(produkte[index]);

                let anzahl: number = cartContent.length;

                kreisDiv.innerHTML = "" + anzahl;

                // Summe berechnen
                let summe: number = 0;
                for (let i: number = 0; i < zaehler.length; i++) {
                    summe = summe + zaehler[i];
                }

                localStorage.setItem("Produkte", JSON.stringify(cartContent));

                localStorage.setItem("Summe", summe.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" }));
                console.log("Summe:" + summe.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" }));
        }
    }
}

*/
//# sourceMappingURL=script.js.map