"use strict";
var Aufgabe_06;
(function (Aufgabe_06) {
    // großes Div-Element erstellen, dass alle zu generierenden Artikel umfassen wird
    let kategorie = document.createElement("div");
    kategorie.setAttribute("id", "kamerasDiv");
    function produkteErzeugen(_produktliste, produktDiv) {
        // Schleife generiert alle Produkte aus der scriptProduktdaten.ts-Datei
        for (let index = 0; index < _produktliste.length; index++) {
            // umgebender Div-Block pro Produkt
            let divProdukt = document.createElement("div");
            divProdukt.setAttribute("class", "produkte"); //??
            produktDiv.appendChild(divProdukt);
            // Bild einfuegen
            let imgURL = document.createElement("img");
            imgURL.setAttribute("src", _produktliste[index].imgurl);
            imgURL.setAttribute("alt", _produktliste[index].name);
            divProdukt.appendChild(imgURL);
            // Produktname einfuegen
            let h3Name = document.createElement("h3");
            h3Name.innerHTML = _produktliste[index].name;
            divProdukt.appendChild(h3Name);
            // Beschreibung einfuegen
            let pBeschr = document.createElement("p");
            pBeschr.innerHTML = _produktliste[index].beschreibung;
            divProdukt.appendChild(pBeschr);
            // Preis einfuegen
            let pPreis = document.createElement("p");
            pPreis.setAttribute("class", "preis");
            pPreis.innerHTML = "Preis: " + _produktliste[index].preis + "€";
            divProdukt.appendChild(pPreis);
            // Warenkorb-Button einfuegen
            let warenkorb = document.createElement("button");
            warenkorb.setAttribute("type", "button");
            warenkorb.setAttribute("class", "knopf");
            divProdukt.appendChild(warenkorb);
            warenkorb.innerHTML = "In den Warenkorb!";
            //warenkorb.addEventListener("click", handleClick);
        }
    }
    produkteErzeugen(Aufgabe_06.produkteKamera, kategorie);
    document.getElementById("kameras")?.appendChild(kategorie);
    let kategorie2 = document.createElement("div");
    kategorie2.setAttribute("id", "zubehoerDiv");
    produkteErzeugen(Aufgabe_06.produkteZubehoer, kategorie2);
    document.getElementById("zubehoer")?.appendChild(kategorie2);
    let nurKameras = document.getElementById("nurKameras");
    nurKameras.addEventListener("click", handleKameras);
    let nurZubehoer = document.getElementById("nurZubehoer");
    nurZubehoer.addEventListener("click", handleZubehoer);
    let alleProdukte = document.getElementById("alleProdukte");
    alleProdukte.addEventListener("click", handleAlleProdukte);
    //Funktionen für Filter
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
})(Aufgabe_06 || (Aufgabe_06 = {}));
//# sourceMappingURL=script.js.map