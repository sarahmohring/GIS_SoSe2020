namespace Endabgabe {

    // allgemeines Interface mit allen Aspekten eines Artikels
    export interface Auswahl {
        url: string;
        name: string;
        preis: number;
        kategorie: string;
    }

    // Produkte aus JSON-Datei einladen
    export let auswahl: Auswahl[];
    loadProducts("auswahl.json");

    async function loadProducts(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let jsonArray: JSON = await response.json();
        auswahl = await JSON.parse(JSON.stringify(jsonArray));
        auswahlErzeugen();
    }
}