namespace Endabgabe { // basierend auf EIA-Cocktailbar

    // allgemeines Interface mit allen Aspekten eines Artikels
    export interface Auswahl {
        url: string;
        name: string;
        preis: number;
    }

    // Format JSON
    export interface Inhalt {
        [kategorie: string]: Auswahl[];
    }

    // JSON Artikel nach Kategorien aufteilen
    export function produkteErzeugen(_inhalt: Inhalt): void {
        for (let kategorie in _inhalt) {
            let auswahl: Auswahl[] = _inhalt[kategorie];

            let group: HTMLElement | null = null;
            switch (kategorie) {
                case "Behaelter":
                    group = radioAuswahl(auswahl, kategorie);
                    break;
                case "Eissorten":
                    group = checkboxAuswahl(auswahl, kategorie);
                    break;
                case "Toppings":
                    group = checkboxAuswahl(auswahl, kategorie);
                    break;
                default:
                    break;
            }
            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + kategorie);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }

    // Behälter-Auswahl über Radio-Buttons
    function radioAuswahl(_auswahl: Auswahl[], _kategorie: string): HTMLElement | null {
        let group: HTMLSpanElement = document.createElement("span");
        for (let auswahl of _auswahl) {
            let divElem: HTMLDivElement = document.createElement("div");
            divElem.setAttribute("id", "flexDiv");
            group.appendChild(divElem);

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = auswahl.name;
            label.htmlFor = auswahl.name;
            label.setAttribute("id", "flexLabel");

            let radio: HTMLInputElement = document.createElement("input");
            radio.type = "radio";
            radio.setAttribute("preis", auswahl.preis.toFixed(2));
            radio.value = auswahl.name;
            radio.name = _kategorie;
            radio.id = auswahl.name;
            label.appendChild(radio);

            let imgURL: HTMLImageElement = document.createElement("img");
            imgURL.setAttribute("src", auswahl.url);
            imgURL.setAttribute("alt", auswahl.name);
            label.appendChild(imgURL);

            divElem.appendChild(label);
        }
        return group;
    }

    // Eissorten- und Topping-Auswahl über Checkboxen
    function checkboxAuswahl(_auswahl: Auswahl[], _kategorie: string): HTMLElement | null {
        let group: HTMLSpanElement = document.createElement("span");
        for (let auswahl of _auswahl) {
            let divElem: HTMLDivElement = document.createElement("div");
            divElem.setAttribute("id", "flexDiv");
            group.appendChild(divElem);

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = auswahl.name;
            label.htmlFor = auswahl.name;

            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("preis", auswahl.preis.toFixed(2));
            checkbox.value = auswahl.name;
            checkbox.name = _kategorie;
            checkbox.id = auswahl.name;
            label.appendChild(checkbox);

            let imgURL: HTMLImageElement = document.createElement("img");
            imgURL.setAttribute("src", auswahl.url);
            imgURL.setAttribute("alt", auswahl.name);
            label.appendChild(imgURL);

            divElem.appendChild(label);
        }
        return group;
    }

    // Interface für Besitzerseite/Anzeige der Bestellungen 
    export interface Order {

        _id: string;
        Produkte: string;
        Gesamtsumme: string;
        Name: string;
        Adresse: string;
        Anmerkungen: string;
    }
}