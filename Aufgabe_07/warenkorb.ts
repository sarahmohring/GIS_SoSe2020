namespace Aufgabe_07 {

    //Liste der Produkte im Warenkorb
    let cartContent: Produkt[] = JSON.parse(localStorage.getItem("Produkte")!);

    //Produkte in Warenkorb laden
    let cartItem: HTMLElement = <HTMLElement>document.getElementById("cartItem");
    let flexDiv: HTMLElement = <HTMLElement>document.createElement("div");
    cartItem.appendChild(flexDiv);
    flexDiv.setAttribute("id", "warenkorbFlex");

    for (let index: number = 0; index < cartContent.length; index++) {
        let divArtikel: HTMLElement = document.createElement("div");
        divArtikel.setAttribute("class", "produkte");
        flexDiv.appendChild(divArtikel);

        let imgURL: HTMLElement = document.createElement("img");
        imgURL.setAttribute("src", cartContent[index].imgurl);
        imgURL.setAttribute("alt", cartContent[index].name);
        divArtikel.appendChild(imgURL);

        let h3name: HTMLElement = document.createElement("h3");
        h3name.innerHTML = cartContent[index].name;
        divArtikel.appendChild(h3name);

        let pBeschr: HTMLElement = document.createElement("p");
        pBeschr.innerHTML = cartContent[index].beschreibung;
        divArtikel.appendChild(pBeschr);

        let pPreis: HTMLElement = document.createElement("p");
        pPreis.setAttribute("class", "preis");
        pPreis.innerHTML = cartContent[index].preis.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" });
        divArtikel.appendChild(pPreis);

        //einzelnes Produkt entfernen (Button)
        let deleteItem: HTMLElement = document.createElement("button");
        deleteItem.innerText = "aus Warenkorb entfernen";
        divArtikel.appendChild(deleteItem);
        deleteItem.addEventListener("click", handleEntfernen);

        //einzelnes Produkt entfernen (Funktion)
        function handleEntfernen(): void {

            divArtikel.remove();

            let itemsVorher: Produkt[] = JSON.parse(localStorage.getItem("Produkte")!);
            itemsVorher.splice(index, 1);
            let itemsNachher: Produkt[] = itemsVorher;
            localStorage.setItem("Produkte", JSON.stringify(itemsNachher));

            let newSum: number = 0;
            for (let index: number = 0; index < itemsNachher.length; index++) {

                newSum = newSum + itemsNachher[index].preis;
            }

            let newSumCurrency: string = newSum.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" });

            localStorage.removeItem("Summe");
            localStorage.setItem("Summe", newSumCurrency);

            window.location.reload();
        }
    }

    //Gesamtpreis anzeigen
    let gesamtpreis: HTMLElement = <HTMLElement>document.getElementById("gesamtpreis");
    let summe: string = localStorage.getItem("Summe")!;
    gesamtpreis.innerText = "Gesamtpreis: " + summe;

    //Button zum Warenkorb leeren
    let deleteAll: HTMLElement = <HTMLElement>document.getElementById("deleteAll");
    deleteAll.addEventListener("click", handleDeleteAll);

    //Funktion zum Warenkorb leeren
    function handleDeleteAll(): void {

        localStorage.clear();
        document.getElementById("cartItem")?.remove();
        gesamtpreis.innerText = "Gesamtpreis: 0,00 €";
    }
}