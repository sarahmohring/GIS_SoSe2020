"use strict";
var Aufgabe_06;
(function (Aufgabe_06) {
    let zaehler = []; // Variable fuer Produktzaehlerfunktion 
    // großes Div-Element, wird alle Kamera-Artikel umfassen
    let kategorie = document.createElement("div");
    kategorie.setAttribute("id", "kamerasDiv");
    function produkteErzeugen(_produktliste, _produktDiv) {
        // Schleife generiert alle Produkte aus der scriptProduktdaten.ts-Datei
        for (let index = 0; index < _produktliste.length; index++) {
            // umgebender Div-Block pro Produkt
            let divProdukt = document.createElement("div");
            divProdukt.setAttribute("class", "produkte");
            _produktDiv.appendChild(divProdukt);
            // Bild
            let imgURL = document.createElement("img");
            imgURL.setAttribute("src", _produktliste[index].imgurl);
            imgURL.setAttribute("alt", _produktliste[index].name);
            divProdukt.appendChild(imgURL);
            // Produktname
            let h3Name = document.createElement("h3");
            h3Name.innerHTML = _produktliste[index].name;
            divProdukt.appendChild(h3Name);
            // Beschreibung
            let pBeschr = document.createElement("p");
            pBeschr.innerHTML = _produktliste[index].beschreibung;
            divProdukt.appendChild(pBeschr);
            // Preis
            let pPreis = document.createElement("p");
            pPreis.innerHTML = "Preis: " + _produktliste[index].preis.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" });
            divProdukt.appendChild(pPreis);
            // #region Warenkorb-Button + Funktion 
            let warenkorb = document.createElement("button");
            warenkorb.innerHTML = "In den Warenkorb!";
            divProdukt.appendChild(warenkorb);
            warenkorb.addEventListener("click", handleClick);
            function handleClick() {
                document.getElementById("zahl")?.remove();
                let zaehlerDiv = document.createElement("div"); // Div fuer kleinen Kreis am Warenkorb-Icon
                zaehlerDiv.setAttribute("id", "zaehler");
                document.getElementById("kreisIcon")?.appendChild(zaehlerDiv);
                let zahlIcon = document.createElement("p"); // Zahl im Kreis
                zahlIcon.setAttribute("id", "zahl");
                zaehlerDiv.appendChild(zahlIcon);
                zaehler.push(_produktliste[index].preis);
                zahlIcon.innerHTML = "" + zaehler.length; // Zahl der Produkte im Warenkorb erhoehen bei Klick
                let summe = 0;
                for (let index = 0; index < zaehler.length; index++) { // Preis der neuen Produkte zum bisherigen Preis addieren
                    summe = summe + zaehler[index];
                }
                console.log("Summe:" + summe.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" })); // Gesamtpreis in Konsole ausgeben
                // #endregion
            }
        }
    }
    // #region Produkte erzeugen und je nach Klickverhalten anzeigen/verstecken
    produkteErzeugen(Aufgabe_06.produkteKamera, kategorie); // Kameraprodukte erzeugen und... 
    document.getElementById("kameras")?.appendChild(kategorie); // ...an am Anfang deklariertes Div anhaengen
    let kategorie2 = document.createElement("div"); // Div fuer Zubehoer erzeugen
    kategorie2.setAttribute("id", "zubehoerDiv");
    produkteErzeugen(Aufgabe_06.produkteZubehoer, kategorie2); // Zubehoerprodukte erzeugen
    document.getElementById("zubehoer")?.appendChild(kategorie2); // an Zubehoer-Div anhaengen 
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
        kamerasDiv.hidden = false;
        let titelKamera = document.getElementById("titel1");
        titelKamera.hidden = false;
        let zubehoerDiv = document.getElementById("zubehoer"); //zubehoer bereits verwendet??
        zubehoerDiv.hidden = true;
        let titelZubehoer = document.getElementById("titel2");
        titelZubehoer.hidden = true;
    }
    function handleZubehoer() {
        let kamerasDiv = document.getElementById("kameras");
        kamerasDiv.hidden = true;
        let titelKameras = document.getElementById("titel1");
        titelKameras.hidden = true;
        let zubehoerDiv = document.getElementById("zubehoer");
        zubehoerDiv.hidden = false;
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
    // #endregion
})(Aufgabe_06 || (Aufgabe_06 = {}));
//# sourceMappingURL=script.js.map