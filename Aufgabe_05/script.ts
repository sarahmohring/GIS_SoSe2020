namespace Aufgabe_05 {

    // großes Div-Element erstellen, dass alle zu generierenden Artikel umfassen wird
    let divProdukte: HTMLDivElement = document.createElement("div");
    divProdukte.setAttribute("class", "flexProdukte");

    // Titelzeile für Produktkategorie 1 (Kameras)
    let divTitel: HTMLDivElement = document.createElement("div");
    divTitel.setAttribute("class", "kategorie");
    let h1Kateg: HTMLHeadingElement = document.createElement("h1");
    h1Kateg.setAttribute("id", "kategorie1");
    h1Kateg.innerHTML = "Kameras";
    divTitel.appendChild(h1Kateg);
    divProdukte.appendChild(divTitel);

    // Schleife generiert alle Kamera-Produkte aus der scriptProduktdaten.ts-Datei
    for (let index: number = 0; index < produkteKamera.length; index++) {

        // umgebender Div-Block pro Produkt
        let divKamera: HTMLDivElement = document.createElement("div");
        divKamera.setAttribute("class", "kameras");
        divProdukte.appendChild(divKamera);

        // Bild einfuegen
        let imgURL: HTMLImageElement = document.createElement("img");
        imgURL.setAttribute("src", produkteKamera[index].imgurl);
        imgURL.setAttribute("alt", produkteKamera[index].name);
        divKamera.appendChild(imgURL);

        // Produktname einfuegen
        let p1Name: HTMLParagraphElement = document.createElement("p");
        divKamera.appendChild(p1Name);
        p1Name.innerHTML = produkteKamera[index].name;


        // Beschreibung einfuegen
        let p2Beschr: HTMLParagraphElement = document.createElement("p");
        divKamera.appendChild(p2Beschr);
        p2Beschr.innerHTML = produkteKamera[index].beschreibung;


        // Preis einfuegen
        let p3Preis: HTMLParagraphElement = document.createElement("p");
        divKamera.appendChild(p3Preis);
        p3Preis.innerHTML = produkteKamera[index].preis;

        // Warenkorb-Button einfuegen
        let warenkorb: HTMLButtonElement = document.createElement("button");
        divKamera.appendChild(warenkorb);
        warenkorb.innerHTML = "In den Warenkorb!";
    }

    // Titelzeile für Produktkategorie 2 (Zubehoer)
    let divTitel2: HTMLDivElement = document.createElement("div");
    divTitel2.setAttribute("class", "kategorie");
    let h1Kateg2: HTMLHeadingElement = document.createElement("h1");
    h1Kateg2.setAttribute("id", "kategorie2");
    h1Kateg2.innerHTML = "Zubehör";
    divTitel2.appendChild(h1Kateg2);
    divProdukte.appendChild(divTitel2);

    // Schleife generiert alle Zubehoer-Produkte aus der scriptProduktdaten.ts-Datei
    for (let index: number = 0; index < produkteZubehoer.length; index++) {

        // umgebender Div-Block pro Produkt
        let divZubeh: HTMLDivElement = document.createElement("div");
        divZubeh.setAttribute("class", "zubehoer");
        divProdukte.appendChild(divZubeh);

        // Bild einfuegen
        let imgURL: HTMLImageElement = document.createElement("img");
        imgURL.setAttribute("src", produkteZubehoer[index].imgurl);
        imgURL.setAttribute("alt", produkteZubehoer[index].name);
        divZubeh.appendChild(imgURL);

        // Produktname einfuegen
        let p1Name: HTMLParagraphElement = document.createElement("p");
        divZubeh.appendChild(p1Name);
        p1Name.innerHTML = produkteZubehoer[index].name;

        // Beschreibung einfuegen
        let p2Beschr: HTMLParagraphElement = document.createElement("p");
        divZubeh.appendChild(p2Beschr);
        p2Beschr.innerHTML = produkteZubehoer[index].beschreibung;

        // Preis einfuegen
        let p3Preis: HTMLParagraphElement = document.createElement("p");
        divZubeh.appendChild(p3Preis);
        p3Preis.innerHTML = produkteZubehoer[index].preis;

        // Warenkorb-Button einfuegen
        let warenkorb: HTMLButtonElement = document.createElement("button");
        divZubeh.appendChild(warenkorb);
        warenkorb.innerHTML = "In den Warenkorb!";
    }
    // Div an im HTML-Code vorhandenes main-Element anhaengen
    document.getElementById("main")?.appendChild(divProdukte);
}