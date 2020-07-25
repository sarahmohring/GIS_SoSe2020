namespace Endabgabe {

    let divAnzeige: HTMLDivElement = <HTMLDivElement>document.getElementById("bestellungenAnzeigen");

    let buttonRetrieve: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonRetrieve");
    buttonRetrieve.addEventListener("click", handleRetrieve);

    let buttonDeleteAll: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonDeleteAll");
    buttonDeleteAll.addEventListener("click", handleDeleteAll);

    // gibt aktuelle Einträge der Datenbank aus
    async function handleRetrieve(): Promise<void> {

        let url: string = "https://gis-sose2020.herokuapp.com/retrieve";
        let response: Response = await fetch(url);
        let responseString: string = await response.text(); //JSON String enthält alle DB-Einträge

        let order: Order[] = JSON.parse(responseString); // String formatieren in Array

        for (let i: number = 0; i < order.length; i++) {
            // Bestellung ansprechend darstellen
            let divDB: HTMLDivElement = document.createElement("div");
            divDB.setAttribute("class", "divDB");
            divAnzeige.appendChild(divDB);

            let orderTitel: HTMLHeadingElement = document.createElement("h3");
            let orderNummer: number = i + 1;
            orderTitel.innerHTML = "Bestellung " + orderNummer;
            divDB.appendChild(orderTitel);

            let bestellSpan: HTMLSpanElement = document.createElement("span");
            let inhaltString: string = "";

            //Produktausgabe nach Kategorie
            inhaltString += "<b>Eis: </b>" + order[i].Produkte + "<br>";
            inhaltString += order[i].Gesamtsumme + "<br><br>";
            inhaltString += "<b>Name: </b>" + order[i].Name + "<br>";
            inhaltString += "<b>Adresse: </b>" + order[i].Adresse + "<br>";
            inhaltString += "<b>Anmerkungen: </b>" + order[i].Anmerkungen + "<br>";

            let buttonDeleteOne: HTMLImageElement = document.createElement("img");
            buttonDeleteOne.addEventListener("click", handleDeleteOne);
            buttonDeleteOne.setAttribute("orderid", order[i]._id);
            buttonDeleteOne.setAttribute("src", "../images/checkmark.png");
            buttonDeleteOne.setAttribute("alt", "abgeschlossen");
            buttonDeleteOne.setAttribute("class", "orderDiv");

            let buttonEdit: HTMLImageElement = document.createElement("img");
            buttonEdit.addEventListener("click", handleEdit);
            buttonEdit.setAttribute("orderid", order[i]._id);
            buttonEdit.setAttribute("src", "../images/edit.png");
            buttonEdit.setAttribute("alt", "bearbeiten");
            buttonEdit.setAttribute("class", "orderDiv");

            bestellSpan.innerHTML = inhaltString;
            divDB.appendChild(bestellSpan);
            divDB.appendChild(buttonDeleteOne);
            divDB.appendChild(buttonEdit);
        }
    }

    async function handleDeleteOne(_event: Event): Promise<void> { // löscht einzelne Bestellung
        let clickedButton: HTMLElement = <HTMLElement>_event.target;
        let orderID: string = <string>clickedButton.getAttribute("orderid");
        let url: string = "https://gis-sose2020.herokuapp.com";
        url += "/deleteOne" + "?" + "id=" + orderID;
        await fetch(url);
        update();
    }

    async function handleDeleteAll(): Promise<void> {
        let url: string = "https://gis-sose2020.herokuapp.com";
        url += "/deleteAll";
        await fetch(url);
        while (divAnzeige.hasChildNodes()) {
            divAnzeige.removeChild(<Node>divAnzeige.firstChild);
        }
    }

    async function handleEdit(_event: Event): Promise<void> { // reparieren!!
        let clickedButton: HTMLElement = <HTMLElement>_event.target;
        let orderID: string = <string>clickedButton.getAttribute("orderid");
        let url: string = "https://gis-sose2020.herokuapp.com";
        url += "/edit" + "?" + "id=" + orderID;
        await fetch(url);
        update();
    }

    function update(): void { // soll eigentlich nicht alle Bestellungen verdoppeln?!
        while (divAnzeige.hasChildNodes()) {
            divAnzeige.removeChild(<Node>divAnzeige.firstChild);
        }
        if (document.getElementById("formular") != null) {
            document.getElementById("main")?.removeChild(<Node>document.getElementById("bestellungenAnzeigen"));
        }
        handleRetrieve();
    }
}