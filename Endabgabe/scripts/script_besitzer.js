"use strict";
/* retrieve */
var Endabgabe;
(function (Endabgabe) {
    let divOutput = document.getElementById("output");
    let requestOrdersButton = document.getElementById("requestOrders");
    requestOrdersButton.addEventListener("click", handleOutput);
    //Gives Output of current Entries in DB
    async function handleOutput() {
        let url = "https://gis-sose2020.herokuapp.com";
        url += "/retrieve";
        let response = await fetch(url);
        let responseString = await response.text(); //JSON String 
        document.getElementById("bestellungenAnzeigen").style.display = "none";
        let auswahl = JSON.parse(responseString);
        console.log(auswahl);
    }
    let buttonDeleteOne = document.getElementById("buttonDeleteOne");
    buttonDeleteOne.addEventListener("click", deleteOne);
    let buttonDeleteAll = document.getElementById("buttonDeleteAll");
    buttonDeleteAll.addEventListener("click", deleteAll);
    let buttonEdit = document.getElementById("buttonEdit");
    buttonEdit.addEventListener("click", editOne);
    async function deleteOne(_event) {
        let clickedButton = _event.target;
        let orderID = clickedButton.getAttribute("orderid");
        let url = "https://gissose2020jacquelinekoch.herokuapp.com";
        url += "/deleteOne" + "?" + "id=" + orderID;
        await fetch(url);
        update();
    }
    async function deleteAll() {
        let url = "https://gissose2020jacquelinekoch.herokuapp.com";
        url += "/deleteAll";
        await fetch(url);
        while (divOutput.hasChildNodes()) {
            divOutput.removeChild(divOutput.firstChild);
        }
    }
    async function editOne(_event) {
        let clickedButton = _event.target;
        let orderID = clickedButton.getAttribute("orderid");
        let url = "https://gissose2020jacquelinekoch.herokuapp.com";
        url += "/edit" + "?" + "id=" + orderID;
        await fetch(url);
        update();
    }
    function update() {
        while (divOutput.hasChildNodes()) {
            divOutput.removeChild(divOutput.firstChild);
        }
        if (document.getElementById("buttonDiv") != null) {
            document.getElementById("main")?.removeChild(document.getElementById("buttonDiv"));
        }
        handleOutput();
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script_besitzer.js.map