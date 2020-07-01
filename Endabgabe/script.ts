namespace Endabgabe {
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
    let divBehaelter: HTMLElement = <HTMLElement>document.getElementById("behaelter");
    let divEissorten: HTMLElement = <HTMLElement>document.getElementById("eissorten");
    let divToppings: HTMLElement = <HTMLElement>document.getElementById("toppings");

    export function auswahlErzeugen(): void {

        for (let index: number = 0; index < auswahl.length; index++) {

            // umgebender Div-Block pro Produkt
            let divProdukt: HTMLElement = document.createElement("div");
            divProdukt.setAttribute("class", "produkte");
            if (auswahl[index].kategorie == "Behaelter") {
                divBehaelter.appendChild(divProdukt);
            }
            else if (auswahl[index].kategorie == "Eissorte") {
                divEissorten.appendChild(divProdukt);
            }
            else {
                divToppings.appendChild(divProdukt);
            }

            // Bild
            let url: HTMLElement = document.createElement("img");
            url.setAttribute("src", auswahl[index].url);
            url.setAttribute("alt", auswahl[index].name);
            divProdukt.appendChild(url);

            // Produktname
            let h3Name: HTMLParagraphElement = document.createElement("h3");
            h3Name.innerHTML = auswahl[index].name;
            divProdukt.appendChild(h3Name);

        }

    }

}
            /*warenkorb.addEventListener("click", handleClick);

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
    kamerasDiv.style.display = "flex";

    let titelKamera: HTMLElement = <HTMLElement>document.getElementById("titel1");
    titelKamera.hidden = false;

    let zubehoerDiv: HTMLElement = <HTMLElement>document.getElementById("zubehoer"); //zubehoer bereits verwendet??
    zubehoerDiv.style.display = "none";

    let titelZubehoer: HTMLElement = <HTMLElement>document.getElementById("titel2");
    titelZubehoer.hidden = true;
}

function handleZubehoer(): void { // Klick im Menu auf "Zubehoer" - Titel und Produkte Kamera verstecken

    let kamerasDiv: HTMLElement = <HTMLElement>document.getElementById("kameras");
    kamerasDiv.style.display = "none";

    let titelKameras: HTMLElement = <HTMLElement>document.getElementById("titel1");
    titelKameras.hidden = true;

    let zubehoerDiv: HTMLElement = <HTMLElement>document.getElementById("zubehoer");
    zubehoerDiv.style.display = "flex";

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
}*/

