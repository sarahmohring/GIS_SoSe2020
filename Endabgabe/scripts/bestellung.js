"use strict";
var Endabgabe;
(function (Endabgabe) {
    let orderDiv = document.getElementById("order");
    orderDiv.innerHTML = "";
    let bestellung = localStorage.getItem("Produkte");
    let gesamtpreis = localStorage.getItem("Gesamtsumme");
    let inhalt = document.createElement("p");
    if (bestellung == null) {
        inhalt.innerHTML = "Keine Bestellung vorhanden";
    }
    else {
        inhalt.innerHTML = bestellung + "<br>" + gesamtpreis;
    }
    orderDiv.appendChild(inhalt);
    let formData;
    let buttonDatenbank = document.getElementById("buttonBestellen");
    buttonDatenbank.addEventListener("click", handleClickStore);
    async function handleClickStore() {
        let localStorageData = "";
        for (let index = 0; index < localStorage.length; index++) {
            let localKey = localStorage.key(index); //holt sich jeweils den key aus dem LS
            let localValue = localStorage.getItem(localKey); //holt sich jeweils den value aus dem LS
            localStorageData += localKey + "=" + localValue + "&"; //speichert Eintrag im String, damit dieser in die url übernommen werden kann
        }
        formData = new FormData(document.forms[0]);
        let serverURL = "https://gis-sose2020.herokuapp.com";
        // let serverURL: string = "http://localhost:8100";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        serverURL += "/store" + "?" + localStorageData + query.toString();
        let formular = document.getElementById("formCart");
        if (formular)
            formular.reset();
        await fetch(serverURL);
        alert("Danke für deine Bestellung!");
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=bestellung.js.map