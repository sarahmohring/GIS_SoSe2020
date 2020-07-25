"use strict";
var Endabgabe;
(function (Endabgabe) {
    let divAnzeige = document.getElementById("bestellungenAnzeigen");
    let buttonDisplay = document.getElementById("buttonRetrieve");
    buttonDisplay.addEventListener("click", handleDisplay);
    let buttonDeleteAll = document.getElementById("buttonDeleteAll");
    buttonDeleteAll.addEventListener("click", handleDeleteAll);
    // gibt aktuelle Einträge der Datenbank aus
    /*async function handleDisplay(): Promise<void> {
 
         let url: string = "https://gis-sose2020.herokuapp.com";
         url += "/retrieve";
 
         let response: Response = await fetch(url);
         let responseString: string = await response.text(); //JSON String
 
         document.getElementById("bestellungenAnzeigen")!.style.display = "none";
 
         let auswahl: Auswahl[] = JSON.parse(responseString);
 
         console.log(auswahl);
 
     }*/
    let formData;
    async function handleDisplay() {
        formData = new FormData(document.forms[0]);
        let serverURL = "https://gis-sose2020.herokuapp.com";
        serverURL += "/retrieve";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        serverURL += "?" + query.toString();
        let response = await fetch(serverURL);
        let responseText = await response.text();
        // (<HTMLElement>document.getElementById("bestellungenAnzeigen")).innerHTML = responseText;
        document.getElementById("requestOrders").style.display = "none";
        let order = JSON.parse(responseText);
        console.log(order);
        for (let index = 0; index < order.length; index++) {
            //HTML Gerüst der Bestellung aufbauen
            let orderDiv = document.createElement("div");
            orderDiv.setAttribute("class", "orderSpan");
            divAnzeige.appendChild(orderDiv);
            let orderHeading = document.createElement("h3");
            let orderIndex = index + 1;
            orderHeading.innerHTML = "Bestellung " + orderIndex;
            orderDiv.appendChild(orderHeading);
            let outputSpan = document.createElement("span");
            let ausgabeString = "";
            //Produktausgabe
            ausgabeString += "Eis: " + order[index].Produkte + "<br>";
            ausgabeString += "Name: " + order[index].Name + "<br>";
            ausgabeString += "Adresse: " + order[index].Adresse + "<br>";
            ausgabeString += "Anmerkungen: " + order[index].Anmerkungen + "<br>";
            let buttonDeleteOne = document.createElement("button");
            buttonDeleteOne.addEventListener("click", handleDeleteOne);
            buttonDeleteOne.setAttribute("orderid", order[index]._id);
            let buttonEdit = document.createElement("button");
            buttonEdit.addEventListener("click", handleEdit);
            buttonDeleteOne.setAttribute("orderid", order[index]._id);
            outputSpan.innerHTML = ausgabeString;
            orderDiv.appendChild(outputSpan);
            orderDiv.appendChild(buttonDeleteOne);
            orderDiv.appendChild(buttonEdit);
        }
    }
    async function handleDeleteOne(_event) {
        let clickedButton = _event.target;
        let orderID = clickedButton.getAttribute("orderid");
        let url = "https://gis-sose2020.herokuapp.com";
        url += "/deleteOne" + "?" + "id=" + orderID;
        await fetch(url);
        update();
    }
    async function handleDeleteAll() {
        let url = "https://gis-sose2020.herokuapp.com";
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
        url += "/edit" + "?" + "id=" + orderID;
        await fetch(url);
        update();
    }
    function update() {
        while (divAnzeige.hasChildNodes()) {
            divAnzeige.removeChild(divAnzeige.firstChild);
        }
        if (document.getElementById("buttonDiv") != null) {
            document.getElementById("main")?.removeChild(document.getElementById("buttonDiv"));
        }
        handleDisplay();
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script_besitzer.js.map