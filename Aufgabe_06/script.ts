namespace Aufgabe_06 {

    // großes Div-Element erstellen, dass alle zu generierenden Artikel umfassen wird
    let kategorie: HTMLDivElement = document.createElement("div");
    kategorie.setAttribute("id", "kamerasDiv");

    function produkteErzeugen(_produktliste: Produkt[], produktDiv: HTMLElement): void {

        // Schleife generiert alle Produkte aus der scriptProduktdaten.ts-Datei
        for (let index: number = 0; index < _produktliste.length; index++) {

            // umgebender Div-Block pro Produkt
            let divProdukt: HTMLDivElement = document.createElement("div");
            divProdukt.setAttribute("class", "produkte"); //??
            produktDiv.appendChild(divProdukt);

            // Bild einfuegen
            let imgURL: HTMLImageElement = document.createElement("img");
            imgURL.setAttribute("src", _produktliste[index].imgurl);
            imgURL.setAttribute("alt", _produktliste[index].name);
            divProdukt.appendChild(imgURL);

            // Produktname einfuegen
            let h3Name: HTMLParagraphElement = document.createElement("h3");
            h3Name.innerHTML = _produktliste[index].name;
            divProdukt.appendChild(h3Name);

            // Beschreibung einfuegen
            let pBeschr: HTMLParagraphElement = document.createElement("p");
            pBeschr.innerHTML = _produktliste[index].beschreibung;
            divProdukt.appendChild(pBeschr);

            // Preis einfuegen
            let pPreis: HTMLParagraphElement = document.createElement("p");
            pPreis.setAttribute("class", "preis");
            pPreis.innerHTML = "Preis: " + _produktliste[index].preis + "€";
            divProdukt.appendChild(pPreis);

            // Warenkorb-Button einfuegen
            let warenkorb: HTMLButtonElement = document.createElement("button");
            warenkorb.setAttribute("type", "button");
            warenkorb.setAttribute("class", "knopf");
            divProdukt.appendChild(warenkorb);
            warenkorb.innerHTML = "In den Warenkorb!";
            //warenkorb.addEventListener("click", handleClick);
        }

    }

    produkteErzeugen(produkteKamera, kategorie);

    document.getElementById("kameras")?.appendChild(kategorie);

    let kategorie2: HTMLElement = document.createElement("div");
    kategorie2.setAttribute("id", "zubehoerDiv");

    produkteErzeugen(produkteZubehoer, kategorie2);

    document.getElementById("zubehoer")?.appendChild(kategorie2);


    let nurKameras: HTMLElement = <HTMLElement>document.getElementById("nurKameras");
    nurKameras.addEventListener("click", handleKameras);

    let nurZubehoer: HTMLElement = <HTMLElement>document.getElementById("nurZubehoer");
    nurZubehoer.addEventListener("click", handleZubehoer);

    let alleProdukte: HTMLElement = <HTMLElement>document.getElementById("alleProdukte");
    alleProdukte.addEventListener("click", handleAlleProdukte);

    //Funktionen für Filter

    function handleKameras(): void {

        let kamerasDiv: HTMLElement = <HTMLElement>document.getElementById("kameras"); //tag doppelt?
        kamerasDiv.hidden = false;

        let titelKamera: HTMLElement = <HTMLElement>document.getElementById("titel1");
        titelKamera.hidden = false;
        
        let zubehoerDiv: HTMLElement = <HTMLElement>document.getElementById("zubehoer"); //zubehoer bereits verwendet??
        zubehoerDiv.hidden = true;

        let titelZubehoer: HTMLElement = <HTMLElement>document.getElementById("titel2");
        titelZubehoer.hidden = true;
    }

    function handleZubehoer(): void {

        let kamerasDiv: HTMLElement = <HTMLElement>document.getElementById("kameras");
        kamerasDiv.hidden = true;

        let titelKameras: HTMLElement = <HTMLElement>document.getElementById("titel1");
        titelKameras.hidden = true;

        let zubehoerDiv: HTMLElement = <HTMLElement>document.getElementById("zubehoer");
        zubehoerDiv.hidden = false;

        let titelZubehoer: HTMLElement = <HTMLElement>document.getElementById("titel2");
        titelZubehoer.hidden = false;
    }

    function handleAlleProdukte(): void {

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