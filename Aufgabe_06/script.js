"use strict";
var Aufgabe_06;
(function (Aufgabe_06) {
    // großes Div-Element erstellen, dass alle zu generierenden Artikel umfassen wird
    let divProdukte = document.createElement("div");
    divProdukte.setAttribute("class", "flexProdukte");
    // Titelzeile für Produktkategorie 1 (Kameras)
    let divTitel = document.createElement("div");
    divTitel.setAttribute("class", "kategorie");
    let h1Kateg = document.createElement("h1");
    h1Kateg.setAttribute("id", "kategorie1");
    h1Kateg.innerHTML = "Kameras";
    divTitel.appendChild(h1Kateg);
    divProdukte.appendChild(divTitel);
    // Schleife generiert alle Kamera-Produkte aus der scriptProduktdaten.ts-Datei
    for (let index = 0; index < Aufgabe_06.produkteKamera.length; index++) {
        // umgebender Div-Block pro Produkt
        let divKamera = document.createElement("div");
        divKamera.setAttribute("class", "kameras");
        divProdukte.appendChild(divKamera);
        // Bild einfuegen
        let imgURL = document.createElement("img");
        imgURL.setAttribute("src", Aufgabe_06.produkteKamera[index].imgurl);
        imgURL.setAttribute("alt", Aufgabe_06.produkteKamera[index].name);
        divKamera.appendChild(imgURL);
        // Produktname einfuegen
        let p1Name = document.createElement("p");
        divKamera.appendChild(p1Name);
        p1Name.innerHTML = Aufgabe_06.produkteKamera[index].name;
        // Beschreibung einfuegen
        let p2Beschr = document.createElement("p");
        divKamera.appendChild(p2Beschr);
        p2Beschr.innerHTML = Aufgabe_06.produkteKamera[index].beschreibung;
        // Preis einfuegen
        let p3Preis = document.createElement("p");
        divKamera.appendChild(p3Preis);
        p3Preis.innerHTML = `${Aufgabe_06.produkteKamera[index].preis.toString()} €`;
        // Warenkorb-Button einfuegen
        let warenkorb = document.createElement("button");
        warenkorb.setAttribute("class", "knopf");
        divKamera.appendChild(warenkorb);
        warenkorb.innerHTML = "In den Warenkorb!";
    }
    // Titelzeile für Produktkategorie 2 (Zubehoer)
    let divTitel2 = document.createElement("div");
    divTitel2.setAttribute("class", "kategorie");
    let h1Kateg2 = document.createElement("h1");
    h1Kateg2.setAttribute("id", "kategorie2");
    h1Kateg2.innerHTML = "Zubehör";
    divTitel2.appendChild(h1Kateg2);
    divProdukte.appendChild(divTitel2);
    // Schleife generiert alle Zubehoer-Produkte aus der scriptProduktdaten.ts-Datei
    for (let index = 0; index < Aufgabe_06.produkteZubehoer.length; index++) {
        // umgebender Div-Block pro Produkt
        let divZubeh = document.createElement("div");
        divZubeh.setAttribute("class", "zubehoer");
        divProdukte.appendChild(divZubeh);
        // Bild einfuegen
        let imgURL = document.createElement("img");
        imgURL.setAttribute("src", Aufgabe_06.produkteZubehoer[index].imgurl);
        imgURL.setAttribute("alt", Aufgabe_06.produkteZubehoer[index].name);
        divZubeh.appendChild(imgURL);
        // Produktname einfuegen
        let p1Name = document.createElement("p");
        divZubeh.appendChild(p1Name);
        p1Name.innerHTML = Aufgabe_06.produkteZubehoer[index].name;
        // Beschreibung einfuegen
        let p2Beschr = document.createElement("p");
        divZubeh.appendChild(p2Beschr);
        p2Beschr.innerHTML = Aufgabe_06.produkteZubehoer[index].beschreibung;
        // Preis einfuegen
        let p3Preis = document.createElement("p");
        divZubeh.appendChild(p3Preis);
        p3Preis.innerHTML = `${Aufgabe_06.produkteKamera[index].preis.toString()} €`;
        // Warenkorb-Button einfuegen
        let warenkorb = document.createElement("button");
        divZubeh.appendChild(warenkorb);
        warenkorb.innerHTML = "In den Warenkorb!";
    }
    // Div an im HTML-Code vorhandenes main-Element anhaengen
    document.getElementById("main")?.appendChild(divProdukte);
})(Aufgabe_06 || (Aufgabe_06 = {}));
//# sourceMappingURL=script.js.map