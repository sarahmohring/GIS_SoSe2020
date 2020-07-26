"use strict";
var Endabgabe;
(function (Endabgabe) {
    let divAnzeige = document.getElementById("bestellungenAnzeigen");
    let buttonRetrieve = document.getElementById("buttonRetrieve");
    buttonRetrieve.addEventListener("click", handleRetrieve);
    let buttonDeleteAll = document.getElementById("buttonDeleteAll");
    buttonDeleteAll.addEventListener("click", handleDeleteAll);
    let buttonRefresh = document.getElementById("buttonRefresh");
    buttonRefresh.addEventListener("click", update);
    // gibt aktuelle Einträge der Datenbank aus
    async function handleRetrieve() {
        let url = "https://gis-sose2020.herokuapp.com/retrieve";
        // let url: string = "http://localhost:8100/retrieve";
        let response = await fetch(url);
        let responseString = await response.text(); //JSON String enthält alle DB-Einträge
        let order = JSON.parse(responseString); // String formatieren in Array
        for (let i = 0; i < order.length; i++) {
            // Bestellung ansprechend darstellen
            let divDB = document.createElement("div");
            divDB.setAttribute("class", "divDB");
            divAnzeige.appendChild(divDB);
            let orderTitel = document.createElement("h3");
            let orderNummer = i + 1;
            orderTitel.innerHTML = "Bestellung " + orderNummer;
            divDB.appendChild(orderTitel);
            let bestellSpan = document.createElement("span");
            let inhaltString = "";
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
            let buttonDeleteOne = document.createElement("img"); // Button, um einen DB-Eintrag zu löschen
            buttonDeleteOne.addEventListener("click", handleDeleteOne);
            buttonDeleteOne.setAttribute("orderid", order[i]._id);
            buttonDeleteOne.setAttribute("src", "../images/loeschen.png");
            buttonDeleteOne.setAttribute("alt", "löschen");
            buttonDeleteOne.setAttribute("class", "orderDiv");
            let buttonEdit = document.createElement("img"); // Button, um einen DB-Eintrag zu bearbeiten
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
    async function handleDeleteOne(_event) {
        let clickedButton = _event.target;
        let orderID = clickedButton.getAttribute("orderid");
        let url = "https://gis-sose2020.herokuapp.com";
        // let url: string = "http://localhost:8100";
        url += "/deleteOne" + "?" + "id=" + orderID;
        await fetch(url);
        update();
    }
    async function handleDeleteAll() {
        let url = "https://gis-sose2020.herokuapp.com";
        // let url: string = "http://localhost:8100";
        url += "/deleteAll";
        await fetch(url);
        while (divAnzeige.hasChildNodes()) {
            divAnzeige.removeChild(divAnzeige.firstChild);
        }
    }
    async function handleEdit(_event) {
        let clickedButton = _event.target;
        let orderID = clickedButton.getAttribute("orderid");
        let url = "https://gis-sose2020.herokuapp.com";
        // let url: string = "http://localhost:8100";
        url += "/edit" + "?" + "id=" + orderID;
        await fetch(url);
        update();
    }
    async function update() {
        while (divAnzeige.hasChildNodes()) {
            divAnzeige.removeChild(divAnzeige.firstChild);
        }
        if (document.getElementById("buttonRetrieve") != null) {
            document.getElementById("formular")?.removeChild(document.getElementById("buttonRetrieve"));
        }
        handleRetrieve();
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script_besitzer.js.map