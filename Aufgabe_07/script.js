"use strict";
var Aufgabe_07;
(function (Aufgabe_07) {
    //Liste für Einkaufswagen
    let cartItems = [];
    if (localStorage.getItem("Produkte") != null) {
        let schonDrin = JSON.parse(localStorage.getItem("Produkte"));
        cartItems = schonDrin;
    }
    // Zaehler für Anzahl der Produkte
    let zaehler = [];
    if (localStorage.getItem("Summe") != null) {
        let vorhandenerZaehler = parseFloat(localStorage.getItem("Summe"));
        zaehler[0] = vorhandenerZaehler;
    }
    // Produkte erzeugen aus JSON
    let divKameras = document.getElementById("kameras"); //rispo
    //document.getElementById("kameras")?.appendChild(divKameras);
    let divZubehoer = document.getElementById("zubehoer"); //kekse
    //document.getElementById("zubehoer")?.appendChild(divZubehoer);
    function produkteErzeugen() {
        for (let index = 0; index < Aufgabe_07.produkte.length; index++) {
            // umgebender Div-Block pro Produkt
            let divProdukt = document.createElement("div");
            if (Aufgabe_07.produkte[index].kategorie == "kam") {
                divProdukt.setAttribute("class", "produkteKamera");
                divKameras.appendChild(divProdukt);
            }
            else {
                divProdukt.setAttribute("class", "produkteZubehoer");
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
                let kreisDiv = document.getElementById("kreisDiv");
                zaehler.push(Aufgabe_07.produkte[index].preis);
                cartItems.push(Aufgabe_07.produkte[index]);
                let anzahl = cartItems.length;
                kreisDiv.innerHTML = "" + anzahl;
                /*function handleClick2(): void { // wird aufgerufen bei Klick auf "In den Warenkorb!"
                    document.getElementById("zahl")?.remove();
    
                    let zaehlerDiv: HTMLElement = document.createElement("div"); // Div fuer kleinen Kreis am Warenkorb-Icon
                    zaehlerDiv.setAttribute("id", "zaehler");
                    document.getElementById("kreisIcon")?.appendChild(zaehlerDiv);
    
                    let zahlIcon: HTMLElement = document.createElement("p"); // Zahl im Kreis
                    zahlIcon.setAttribute("id", "zahl");
                    zaehlerDiv.appendChild(zahlIcon);
    
                    zaehler.push(produkte[index].preis);
    
                    zahlIcon.innerHTML = "" + zaehler.length; // Zahl der Produkte im Warenkorb erhoehen bei Klick*/
                let summe = 0;
                for (let i = 0; i < zaehler.length; i++) {
                    summe = summe + zaehler[i];
                }
                localStorage.setItem("Artikel", JSON.stringify(cartItems));
                localStorage.setItem("Summe", summe.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" }));
                // console.log("Summe:" + summe.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" }));
            }
        }
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
    }
    Aufgabe_07.produkteErzeugen = produkteErzeugen;
})(Aufgabe_07 || (Aufgabe_07 = {}));
/*namespace Aufgabe_07 {

    let divKameras: HTMLElement = <HTMLElement>document.getElementById("kameras");
    let divZubehoer: HTMLElement = <HTMLElement>document.getElementById("zubehoer");

    let zaehler: number[] = []; // Variable fuer Produktzaehlerfunktion

    export function produkteErzeugen(): void {

        // Schleife generiert alle Produkte aus der scriptProduktdaten.ts-Datei
        for (let index: number = 0; index < produkte.length; index++) {

            // umgebender Div-Block pro Produkt
            let divProdukt: HTMLDivElement = document.createElement("div");
            if (produkte[index].kategorie == "kam") {
                divProdukt.setAttribute("class", "produkteKamera");
                divKameras.appendChild(divProdukt);
            }
            else {
                divProdukt.setAttribute("class", "produkteZubehoer");
                divZubehoer.appendChild(divProdukt);
            }

            // Bild
            let imgURL: HTMLImageElement = document.createElement("img");
            imgURL.setAttribute("src", produkte[index].imgurl);
            imgURL.setAttribute("alt", produkte[index].name);
            divProdukt.appendChild(imgURL);

            // Produktname
            let h3Name: HTMLParagraphElement = document.createElement("h3");
            h3Name.innerHTML = produkte[index].name;
            divProdukt.appendChild(h3Name);

            // Beschreibung
            let pBeschr: HTMLParagraphElement = document.createElement("p");
            pBeschr.innerHTML = produkte[index].beschreibung;
            divProdukt.appendChild(pBeschr);

            // Preis
            let pPreis: HTMLParagraphElement = document.createElement("p");
            pPreis.innerHTML = "Preis: " + produkte[index].preis.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" });
            divProdukt.appendChild(pPreis);

            // #region Warenkorb-Button + Funktion
            let warenkorb: HTMLButtonElement = document.createElement("button");
            warenkorb.innerHTML = "In den Warenkorb!";
            divProdukt.appendChild(warenkorb);

            warenkorb.addEventListener("click", handleClick);

            function handleClick(): void { // wird aufgerufen bei Klick auf "In den Warenkorb!"
                document.getElementById("zahl")?.remove();

                let zaehlerDiv: HTMLElement = document.createElement("div"); // Div fuer kleinen Kreis am Warenkorb-Icon
                zaehlerDiv.setAttribute("id", "zaehler");
                document.getElementById("kreisIcon")?.appendChild(zaehlerDiv);

                let zahlIcon: HTMLElement = document.createElement("p"); // Zahl im Kreis
                zahlIcon.setAttribute("id", "zahl");
                zaehlerDiv.appendChild(zahlIcon);

                zaehler.push(produkte[index].preis);

                zahlIcon.innerHTML = "" + zaehler.length; // Zahl der Produkte im Warenkorb erhoehen bei Klick

                let summe: number = 0;
                for (let index: number = 0; index < zaehler.length; index++) { // Preis der neuen Produkte zum bisherigen Preis addieren
                    summe = summe + zaehler[index];
                }

                console.log("Summe:" + summe.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" })); // Gesamtpreis in Konsole ausgeben
                // #endregion
            }
        }
    }

    // Eventlistener fuer Navigation - Filter nach Kategorie
    let nurKameras: HTMLElement = <HTMLElement>document.getElementById("nurKameras");
    nurKameras.addEventListener("click", handleKameras);

    let nurZubehoer: HTMLElement = <HTMLElement>document.getElementById("nurZubehoer");
    nurZubehoer.addEventListener("click", handleZubehoer);

    let alleProdukte: HTMLElement = <HTMLElement>document.getElementById("alleProdukte");
    alleProdukte.addEventListener("click", handleAlleProdukte);

    // Funktionen, um nach den 3 Kategorien zu filtern
    function handleKameras(): void { // Klick im Menu auf "Kameras" - Titel und Produkte Zubehoer verstecken

        let kamerasDiv: HTMLElement = <HTMLElement>document.getElementById("kameras"); //tag doppelt?
        kamerasDiv.hidden = false;

        let titelKamera: HTMLElement = <HTMLElement>document.getElementById("titel1");
        titelKamera.hidden = false;

        let zubehoerDiv: HTMLElement = <HTMLElement>document.getElementById("zubehoer"); //zubehoer bereits verwendet??
        zubehoerDiv.hidden = true;

        let titelZubehoer: HTMLElement = <HTMLElement>document.getElementById("titel2");
        titelZubehoer.hidden = true;
    }

    function handleZubehoer(): void { // Klick im Menu auf "Zubehoer" - Titel und Produkte Kamera verstecken

        let kamerasDiv: HTMLElement = <HTMLElement>document.getElementById("kameras");
        kamerasDiv.hidden = true;

        let titelKameras: HTMLElement = <HTMLElement>document.getElementById("titel1");
        titelKameras.hidden = true;

        let zubehoerDiv: HTMLElement = <HTMLElement>document.getElementById("zubehoer");
        zubehoerDiv.hidden = false;

        let titelZubehoer: HTMLElement = <HTMLElement>document.getElementById("titel2");
        titelZubehoer.hidden = false;
    }

    function handleAlleProdukte(): void { // Klick im Menu auf "Alle Artikel" - nichts verstecken

        let kamerasDiv: HTMLElement = <HTMLElement>document.getElementById("kameras");
        kamerasDiv.hidden = false;

        let titelKameras: HTMLElement = <HTMLElement>document.getElementById("titel1");
        titelKameras.hidden = false;

        let zubehoerDiv: HTMLElement = <HTMLElement>document.getElementById("zubehoer");
        zubehoerDiv.hidden = false;

        let titelZubehoer: HTMLElement = <HTMLElement>document.getElementById("titel2");
        titelZubehoer.hidden = false;
    }
    // #endregion

    /*let divParent: HTMLElement = <HTMLElement>current.parentNode;
        //localStorage.setItem("divId" + itemNumber, divParent.id);
        let childNodes: NodeListOf<ChildNode> = divParent.childNodes;
        let childNode: HTMLImageElement = <HTMLImageElement>childNodes[0];
        localStorage.setItem("imgurl" + itemNumber, <string>childNode.src);
        localStorage.setItem("name" + itemNumber, <string>childNodes[2].textContent);
        localStorage.setItem("beschreibung" + itemNumber, <string>childNodes[4].textContent);
        localStorage.setItem("preis" + itemNumber, <string>childNodes[6].textContent);
        itemNumber++;
        localStorage.setItem("AnzahlItems", "" + itemNumber);
        localStorage.setItem("gesamtpreis", "" + gesamtpreis);*/
//# sourceMappingURL=script.js.map