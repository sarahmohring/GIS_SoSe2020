"use strict";
var Endabgabe;
(function (Endabgabe) {
    let divAnzeige = document.getElementById("bestellungenAnzeigen");
    let buttonDisplay = document.getElementById("buttonRetrieve");
    buttonDisplay.addEventListener("click", handleDisplay);
    let buttonDeleteAll = document.getElementById("buttonDeleteAll");
    buttonDeleteAll.addEventListener("click", handleDeleteAll);
    // gibt aktuelle Einträge der Datenbank aus
    async function handleDisplay() {
        let url = "https://gis-sose2020.herokuapp.com";
        url += "/retrieve";
        let response = await fetch(url);
        let responseString = await response.text(); //JSON String 
        //document.getElementById("bestellungenAnzeigen")!.style.display = "none";
        let order = JSON.parse(responseString);
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
            ausgabeString += "<b>Eis: </b>" + order[index].Produkte + "<br>";
            ausgabeString += order[index].Gesamtsumme + "<br><br>";
            ausgabeString += "<b>Name: </b>" + order[index].Name + "<br>";
            ausgabeString += "<b>Adresse: </b>" + order[index].Adresse + "<br>";
            ausgabeString += "<b>Anmerkungen: </b>" + order[index].Anmerkungen + "<br>";
            let buttonDeleteOne = document.createElement("img");
            buttonDeleteOne.addEventListener("click", handleDeleteOne);
            buttonDeleteOne.setAttribute("orderid", order[index]._id);
            buttonDeleteOne.setAttribute("src", "../images/checkmark.png");
            buttonDeleteOne.setAttribute("alt", "abgeschlossen");
            buttonDeleteOne.setAttribute("class", "orderDiv");
            let buttonEdit = document.createElement("img");
            buttonEdit.addEventListener("click", handleEdit);
            buttonEdit.setAttribute("orderid", order[index]._id);
            buttonEdit.setAttribute("src", "../images/edit.png");
            buttonEdit.setAttribute("alt", "edit");
            buttonEdit.setAttribute("class", "orderDiv");
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