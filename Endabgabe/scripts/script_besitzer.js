"use strict";
var Endabgabe;
(function (Endabgabe) {
    let divAnzeige = document.getElementById("bestellungenAnzeigen");
    let buttonDisplay = document.getElementById("buttonRetrieve");
    buttonDisplay.addEventListener("click", handleDisplay);
    let buttonDeleteOne = document.getElementById("buttonDeleteOne");
    buttonDeleteOne.addEventListener("click", handleDeleteOne);
    let buttonDeleteAll = document.getElementById("buttonDeleteAll");
    buttonDeleteAll.addEventListener("click", handleDeleteAll);
    let buttonEdit = document.getElementById("buttonEdit");
    buttonEdit.addEventListener("click", handleEdit);
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
    async function handleDisplay() {
        let serverURL = "https://gis-sose2020.herokuapp.com";
        serverURL += "/retrieve";
        let response = await fetch(serverURL);
        let responseText = await response.text();
        document.getElementById("bestellungenAnzeigen").innerHTML = responseText;
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