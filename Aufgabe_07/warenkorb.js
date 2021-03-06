"use strict";
var Aufgabe_07;
(function (Aufgabe_07) {
    //Liste der Produkte im Warenkorb
    let cartContent = JSON.parse(localStorage.getItem("Produkte"));
    //Produkte in Warenkorb laden
    let cartItem = document.getElementById("cartItem");
    let flexDiv = document.createElement("div");
    cartItem.appendChild(flexDiv);
    flexDiv.setAttribute("id", "warenkorbFlex");
    for (let index = 0; index < cartContent.length; index++) {
        let divArtikel = document.createElement("div");
        divArtikel.setAttribute("class", "produkte");
        flexDiv.appendChild(divArtikel);
        let imgURL = document.createElement("img");
        imgURL.setAttribute("src", cartContent[index].imgurl);
        imgURL.setAttribute("alt", cartContent[index].name);
        divArtikel.appendChild(imgURL);
        let h3name = document.createElement("h3");
        h3name.innerHTML = cartContent[index].name;
        divArtikel.appendChild(h3name);
        let pBeschr = document.createElement("p");
        pBeschr.innerHTML = cartContent[index].beschreibung;
        divArtikel.appendChild(pBeschr);
        let pPreis = document.createElement("p");
        pPreis.setAttribute("class", "preis");
        pPreis.innerHTML = cartContent[index].preis.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" });
        divArtikel.appendChild(pPreis);
        //einzelnes Produkt entfernen (Button)
        let deleteItem = document.createElement("button");
        deleteItem.innerText = "aus Warenkorb entfernen";
        divArtikel.appendChild(deleteItem);
        deleteItem.addEventListener("click", handleEntfernen);
        //einzelnes Produkt entfernen (Funktion)
        function handleEntfernen() {
            divArtikel.remove();
            let itemsVorher = JSON.parse(localStorage.getItem("Produkte"));
            itemsVorher.splice(index, 1);
            let itemsNachher = itemsVorher;
            localStorage.setItem("Produkte", JSON.stringify(itemsNachher));
            let newSum = 0;
            for (let index = 0; index < itemsNachher.length; index++) {
                newSum = newSum + itemsNachher[index].preis;
            }
            let newSumCurrency = newSum.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" });
            localStorage.removeItem("Summe");
            localStorage.setItem("Summe", newSumCurrency);
            window.location.reload();
        }
    }
    //Gesamtpreis anzeigen
    let gesamtpreis = document.getElementById("gesamtpreis");
    let summe = localStorage.getItem("Summe");
    gesamtpreis.innerText = "Gesamtpreis: " + summe;
    //Button zum Warenkorb leeren
    let deleteAll = document.getElementById("deleteAll");
    deleteAll.addEventListener("click", handleDeleteAll);
    //Funktion zum Warenkorb leeren
    function handleDeleteAll() {
        localStorage.clear();
        document.getElementById("cartItem")?.remove();
        gesamtpreis.innerText = "Gesamtpreis: 0,00 €";
    }
})(Aufgabe_07 || (Aufgabe_07 = {}));
//# sourceMappingURL=warenkorb.js.map