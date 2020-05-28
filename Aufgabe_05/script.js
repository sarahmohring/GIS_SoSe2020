"use strict";
var Aufgabe_05;
(function (Aufgabe_05) {
    // großes Div-Element erstellen, dass alle zu generierenden Artikel umfassen wird
    let divProdukte = document.createElement("div");
    divProdukte.setAttribute("class", "flexProdukte");
    // Div an im HTML-Code vorhandenes main-Element anhängen
    document.getElementById("main")?.appendChild(divProdukte);
    // Titelzeile für Produktkategorie 1 (Kameras)
    let divTitel = document.createElement("div");
    divTitel.setAttribute("class", "kategorie");
    let h1Kateg = document.createElement("h1");
    h1Kateg.setAttribute("id", "kategorie1");
    h1Kateg.innerHTML = "Kameras";
    divTitel.appendChild(h1Kateg);
    divProdukte.appendChild(divTitel);
    // Schleife generiert alle Kamera-Produkte aus der scriptProduktdaten.ts-Datei
    for (let index = 0; index < Aufgabe_05.produkteKamera.length; index++) {
        // umgebender Div-Block pro Produkt
        let divKamera = document.createElement("div");
        divKamera.setAttribute("class", "kameras");
        divProdukte.appendChild(divKamera);
        // Bild einfügen
        let imgURL = document.createElement("img");
        imgURL.setAttribute("src", Aufgabe_05.produkteKamera[index].imgurl);
        imgURL.setAttribute("alt", Aufgabe_05.produkteKamera[index].name);
        divKamera.appendChild(imgURL);
        // Produktname einfügen
        let p1Name = document.createElement("p");
        divKamera.appendChild(p1Name);
        p1Name.innerHTML = Aufgabe_05.produkteKamera[index].name;
        // Beschreibung einfügen
        let p2Beschr = document.createElement("p");
        divKamera.appendChild(p2Beschr);
        p2Beschr.innerHTML = Aufgabe_05.produkteKamera[index].beschreibung;
        // Preis einfügen
        let p3Preis = document.createElement("p");
        divKamera.appendChild(p3Preis);
        p3Preis.innerHTML = Aufgabe_05.produkteKamera[index].preis;
        // Warenkorb-Button einfügen
        let warenkorb = document.createElement("button");
        divKamera.appendChild(warenkorb);
        warenkorb.innerHTML = "In den Warenkorb!";
    }
    // Titelzeile für Produktkategorie 2 (Zubehör)
    let divTitel2 = document.createElement("div");
    divTitel2.setAttribute("class", "kategorie");
    let h1Kateg2 = document.createElement("h1");
    h1Kateg2.setAttribute("id", "kategorie2");
    h1Kateg2.innerHTML = "Zubehör";
    divTitel2.appendChild(h1Kateg);
    divProdukte.appendChild(divTitel2);
    // Schleife generiert alle Zubehör-Produkte aus der scriptProduktdaten.ts-Datei
    for (let index = 0; index < Aufgabe_05.produkteZubehoer.length; index++) {
        // umgebender Div-Block pro Produkt
        let divZubeh = document.createElement("div");
        divZubeh.setAttribute("class", "zubehoer");
        divProdukte.appendChild(divZubeh);
        // Bild einfügen
        let imgURL = document.createElement("img");
        imgURL.setAttribute("src", Aufgabe_05.produkteZubehoer[index].imgurl);
        imgURL.setAttribute("alt", Aufgabe_05.produkteZubehoer[index].name);
        divZubeh.appendChild(imgURL);
        // Produktname einfügen
        let p1Name = document.createElement("p");
        divZubeh.appendChild(p1Name);
        p1Name.innerHTML = Aufgabe_05.produkteZubehoer[index].name;
        // Beschreibung einfügen
        let p2Beschr = document.createElement("p");
        divZubeh.appendChild(p2Beschr);
        p2Beschr.innerHTML = Aufgabe_05.produkteZubehoer[index].beschreibung;
        // Preis einfügen
        let p3Preis = document.createElement("p");
        divZubeh.appendChild(p3Preis);
        p3Preis.innerHTML = Aufgabe_05.produkteZubehoer[index].preis;
        // Warenkorb-Button einfügen
        let warenkorb = document.createElement("button");
        divZubeh.appendChild(warenkorb);
        warenkorb.innerHTML = "In den Warenkorb!";
    }
})(Aufgabe_05 || (Aufgabe_05 = {}));
//# sourceMappingURL=script.js.map