"use strict";
var Aufgabe_07;
(function (Aufgabe_07) {
    //Liste für Einkaufswagen
    let cartContent = [];
    if (localStorage.getItem("Produkte") != null) {
        let schonDrin = JSON.parse(localStorage.getItem("Produkte"));
        cartContent = schonDrin;
    }
    // Zaehler für Anzahl der Produkte
    let zaehler = [];
    if (localStorage.getItem("Summe") != null) {
        let vorhandenerZaehler = parseFloat(localStorage.getItem("Summe"));
        zaehler[0] = vorhandenerZaehler;
    }
    // Produkte erzeugen aus JSON
    let divKameras = document.getElementById("kameras");
    let divZubehoer = document.getElementById("zubehoer");
    function produkteErzeugen() {
        for (let index = 0; index < Aufgabe_07.produkte.length; index++) {
            // umgebender Div-Block pro Produkt
            let divProdukt = document.createElement("div");
            divProdukt.setAttribute("class", "produkte");
            if (Aufgabe_07.produkte[index].kategorie == "kam") {
                divKameras.appendChild(divProdukt);
            }
            else {
                divZubehoer.appendChild(divProdukt);
            }
            // Bild
            let imgURL = document.createElement("img");
            imgURL.setAttribute("src", Aufgabe_07.produkte[index].imgurl);
            imgURL.setAttribute("alt", Aufgabe_07.produkte[index].name);
            divProdukt.appendChild(imgURL);
            // Produktname
            let h3Name = document.createElement("h3");
            h3Name.innerHTML = Aufgabe_07.produkte[index].name;
            divProdukt.appendChild(h3Name);
            // Beschreibung
            let pBeschr = document.createElement("p");
            pBeschr.innerHTML = Aufgabe_07.produkte[index].beschreibung;
            divProdukt.appendChild(pBeschr);
            // Preis
            let pPreis = document.createElement("p");
            pPreis.innerHTML = "Preis: " + Aufgabe_07.produkte[index].preis.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" });
            divProdukt.appendChild(pPreis);
            // #region Warenkorb-Button + Funktion 
            let warenkorb = document.createElement("button");
            warenkorb.innerHTML = "In den Warenkorb!";
            divProdukt.appendChild(warenkorb);
            warenkorb.addEventListener("click", handleClick);
            function handleClick() {
                let kreisDiv = document.getElementById("kreisIcon");
                zaehler.push(Aufgabe_07.produkte[index].preis);
                cartContent.push(Aufgabe_07.produkte[index]);
                let anzahl = cartContent.length;
                kreisDiv.innerHTML = "" + anzahl;
                // Summe berechnen
                let summe = 0;
                for (let i = 0; i < zaehler.length; i++) {
                    summe = summe + zaehler[i];
                }
                localStorage.setItem("Produkte", JSON.stringify(cartContent));
                localStorage.setItem("Summe", summe.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" }));
                console.log("Summe:" + summe.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" }));
            }
        }
    }
    Aufgabe_07.produkteErzeugen = produkteErzeugen;
    // Eventlistener fuer Navigation - Filter nach Kategorie
    let nurKameras = document.getElementById("nurKameras");
    nurKameras.addEventListener("click", handleKameras);
    let nurZubehoer = document.getElementById("nurZubehoer");
    nurZubehoer.addEventListener("click", handleZubehoer);
    let alleProdukte = document.getElementById("alleProdukte");
    alleProdukte.addEventListener("click", handleAlleProdukte);
    // Funktionen, um nach den 3 Kategorien zu filtern
    function handleKameras() {
        let kamerasDiv = document.getElementById("kameras"); //tag doppelt?
        kamerasDiv.style.display = "flex";
        let titelKamera = document.getElementById("titel1");
        titelKamera.hidden = false;
        let zubehoerDiv = document.getElementById("zubehoer"); //zubehoer bereits verwendet??
        zubehoerDiv.style.display = "none";
        let titelZubehoer = document.getElementById("titel2");
        titelZubehoer.hidden = true;
    }
    function handleZubehoer() {
        let kamerasDiv = document.getElementById("kameras");
        kamerasDiv.style.display = "none";
        let titelKameras = document.getElementById("titel1");
        titelKameras.hidden = true;
        let zubehoerDiv = document.getElementById("zubehoer");
        zubehoerDiv.style.display = "flex";
        let titelZubehoer = document.getElementById("titel2");
        titelZubehoer.hidden = false;
    }
    function handleAlleProdukte() {
        let kamerasDiv = document.getElementById("kameras");
        kamerasDiv.hidden = false;
        let titelKameras = document.getElementById("titel1");
        titelKameras.hidden = false;
        let zubehoerDiv = document.getElementById("zubehoer");
        zubehoerDiv.hidden = false;
        let titelZubehoer = document.getElementById("titel2");
        titelZubehoer.hidden = false;
    }
})(Aufgabe_07 || (Aufgabe_07 = {}));
//# sourceMappingURL=script.js.map