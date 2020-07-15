namespace Endabgabe {
   
    let orderDiv: HTMLElement = <HTMLElement>document.getElementById("order");
    let bestellung: string  = <string>localStorage.getItem("Produkte");
    let inhalt: HTMLElement = document.createElement("p");
    inhalt.innerHTML = bestellung;
    orderDiv.appendChild(inhalt);
}
/* Artikel von der Shopseite müssen aus Local Storage (?) wieder erzeugt werden, aber als Liste (Aufzählungsicon Eis)
- Behälter: ...
- Eissorten: ...
- Toppings: ...
- Preis: ...
(div für einzelne Bestellungen)
darunter Gesamtpreis: ...
dann Form Bestelldaten
nach dem Absenden reset von Warenkorb Icon und Preis und Form und Bestellungen, Anzeige "Danke für Ihre Bestellung"-Seite mit "zurück zum Start"
*/