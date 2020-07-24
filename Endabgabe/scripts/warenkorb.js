"use strict";
/*namespace Endabgabe {

    let orderDiv: HTMLElement = <HTMLElement>document.getElementById("order");
    let bestellung: string = <string>localStorage.getItem("Produkte");
    let gesamtpreis: string = <string>localStorage.getItem("Gesamtsumme");
    let inhalt: HTMLElement = document.createElement("p");
    inhalt.innerHTML = bestellung + "<br>" + gesamtpreis;
    orderDiv.appendChild(inhalt);

    let url: string = "https://gis-sose2020.herokuapp.com/";
    let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
    let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]");
    console.log(submit);

    // form.addEventListener("change", handleChange);
    submit.addEventListener("click", sendOrder);

    /*async function sendOrder(_event: Event): Promise<void> {
        console.log("Send order");
        let formData: FormData = new FormData(form);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + "?" + query.toString());
        let responseText: string = await response.text();
        //alert(responseText);
        alert("Danke für deine Bestellung!");
    }*/
/*}/*
/* Artikel von der Shopseite müssen aus Local Storage wieder erzeugt werden, aber als Liste (Aufzählungsicon Eis)
- Behälter: ...
- Eissorten: ...
- Toppings: ...
- Preis: ...
(div für einzelne Bestellungen)
darunter Gesamtpreis: ...
dann Form Bestelldaten
nach dem Absenden reset von Warenkorb Icon und Preis und Form und Bestellungen, Anzeige "Danke für Ihre Bestellung"-Seite mit "zurück zum Start"
*/ 
//# sourceMappingURL=warenkorb.js.map