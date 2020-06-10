namespace Aufgabe_07 {
    //Liste für Einkaufswagen
    let cartContent: Produkt[] = [];
    if (localStorage.getItem("Produkte") != null) {
        let schonDrin: Produkt[] = JSON.parse(localStorage.getItem("Produkte")!);
        cartContent = schonDrin;
    }
    // Zaehler für Anzahl der Produkte
    let zaehler: number[] = [];
    if (localStorage.getItem("Summe") != null) {
        let vorhandenerZaehler: number = parseFloat(localStorage.getItem("Summe")!);
        zaehler[0] = vorhandenerZaehler;
    }

    // Produkte erzeugen aus JSON
    let divKameras: HTMLElement = <HTMLElement>document.getElementById("kameras");
    let divZubehoer: HTMLElement = <HTMLElement>document.getElementById("zubehoer");

    export function produkteErzeugen(): void {

        for (let index: number = 0; index < produkte.length; index++) {

            // umgebender Div-Block pro Produkt
            let divProdukt: HTMLElement = document.createElement("div");
            divProdukt.setAttribute("class", "produkte");
            if (produkte[index].kategorie == "kam") {
                divKameras.appendChild(divProdukt);
            }
            else {
                divZubehoer.appendChild(divProdukt);
            }

            // Bild
            let imgURL: HTMLElement = document.createElement("img");
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
    }
}
