namespace Endabgabe { // grob basierend auf meinen GiS-Semesteraufgaben

    let divAnzeige: HTMLDivElement = <HTMLDivElement>document.getElementById("bestellungenAnzeigen");

    let buttonRetrieve: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonRetrieve");
    buttonRetrieve.addEventListener("click", handleRetrieve);

    let buttonDeleteAll: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonDeleteAll");
    buttonDeleteAll.addEventListener("click", handleDeleteAll);

    let buttonRefresh: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonRefresh");
    buttonRefresh.addEventListener("click", update);

    // gibt aktuelle Einträge der Datenbank aus
    async function handleRetrieve(): Promise<void> {

        let url: string = "https://gis-sose2020.herokuapp.com/retrieve";
        // let url: string = "http://localhost:8100/retrieve";
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

            if (order[i].Anmerkungen == "gesendet") { // soll eigentlich das Document in der DB verändern
                inhaltString += "<b>Status:<b> Bestellung erfolgreich versandt <br>";
            }
            else {
                inhaltString += "<b>Anmerkungen: </b>" + order[i].Anmerkungen + "<br>";
            }

            let buttonDeleteOne: HTMLImageElement = document.createElement("img"); // Button, um einen DB-Eintrag zu löschen
            buttonDeleteOne.addEventListener("click", handleDeleteOne);
            buttonDeleteOne.setAttribute("orderid", order[i]._id);
            buttonDeleteOne.setAttribute("src", "../images/loeschen.png");
            buttonDeleteOne.setAttribute("alt", "löschen");
            buttonDeleteOne.setAttribute("class", "orderDiv");

            let buttonEdit: HTMLImageElement = document.createElement("img"); // Button, um einen DB-Eintrag zu bearbeiten
            buttonEdit.addEventListener("click", handleEdit);
            buttonEdit.setAttribute("orderid", order[i]._id);
            buttonEdit.setAttribute("src", "../images/abgehakt.png");
            buttonEdit.setAttribute("alt", "abgehakt");
            buttonEdit.setAttribute("class", "orderDiv");

            bestellSpan.innerHTML = inhaltString; // Div füllen mit DB-Eintrag und Buttons
            divDB.appendChild(bestellSpan);
            divDB.appendChild(buttonDeleteOne);
            divDB.appendChild(buttonEdit);
        }
    }

    async function handleDeleteOne(_event: Event): Promise<void> { // löscht einzelne Bestellung
        let clickedButton: HTMLElement = <HTMLElement>_event.target;
        let orderID: string = <string>clickedButton.getAttribute("orderid");
        let url: string = "https://gis-sose2020.herokuapp.com";
        // let url: string = "http://localhost:8100";
        url += "/deleteOne" + "?" + "id=" + orderID;
        await fetch(url);
        update();
    }

    async function handleDeleteAll(): Promise<void> { // löscht alle Bestellungen aus der DB
        let url: string = "https://gis-sose2020.herokuapp.com";
        // let url: string = "http://localhost:8100";
        url += "/deleteAll";
        await fetch(url);
        while (divAnzeige.hasChildNodes()) {
            divAnzeige.removeChild(<Node>divAnzeige.firstChild);
        }
    }

    /*async function handleEdit(_event: Event): Promise<void> { // verändert DB-Eintrag - Status: gesendet
        let clickedButton: HTMLElement = <HTMLElement>_event.target;
        let orderID: string = <string>clickedButton.getAttribute("orderid");
        let url: string = "https://gis-sose2020.herokuapp.com";
        // let url: string = "http://localhost:8100";
        url += "/edit" + "?" + "id=" + orderID;
        await fetch(url);
        update();*/

    async function handleEdit(_event: Event): Promise<void> {
        let clickedButton: HTMLElement = <HTMLElement>_event.target;
        let orderID: string = <string>clickedButton.getAttribute("orderid");
        let url: string = "https://gis-sose2020.herokuapp.com/edit" + "?_id=" + orderID;
        // let url: string = "http://localhost:8100/edit" + "?_id=" + orderID;
        await fetch(url);
        update();
    }


    async function update(): Promise<void> { // Datenbankanzeige aktualisieren
        while (divAnzeige.hasChildNodes()) {
            divAnzeige.removeChild(<Node>divAnzeige.firstChild);
        }
        if (document.getElementById("buttonRetrieve") != null) {
            document.getElementById("formular")?.removeChild(<Node>document.getElementById("buttonRetrieve"));
        }
        handleRetrieve();
    }
}