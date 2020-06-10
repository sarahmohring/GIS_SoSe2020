namespace Aufgabe_07 {

    // allgemeines Interface mit allen Aspekten eines Artikels
    export interface Produkt {
        imgurl: string;
        name: string;
        beschreibung: string;
        preis: number;
        kategorie: string;

    }

    // Produkte aus JSON-Datei einladen
    export let produkte: Produkt[];
    loadArticles("artikel.json");

    async function loadArticles(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let jsonArray: JSON = await response.json();
        produkte = await JSON.parse(JSON.stringify(jsonArray));
        produkteErzeugen();
    }
}