namespace Endabgabe {

    let orderDiv: HTMLElement = <HTMLElement>document.getElementById("order");
    orderDiv.innerHTML = "";
    let bestellung: string = <string>localStorage.getItem("Produkte");

    let gesamtpreis: string = <string>localStorage.getItem("Gesamtsumme");
    let inhalt: HTMLElement = document.createElement("p");

    if (bestellung == null) {
        inhalt.innerHTML = "Keine Bestellung vorhanden";
    }
    else {
        inhalt.innerHTML = bestellung + "<br>" + gesamtpreis;
    }

    orderDiv.appendChild(inhalt);

    let formData: FormData;
    let buttonDatenbank: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonBestellen");
    buttonDatenbank.addEventListener("click", handleClickStore);

    async function handleClickStore(): Promise<void> {

        let localStorageData: string = "";

        for (let index: number = 0; index < localStorage.length; index++) {
            let localKey: string = <string>localStorage.key(index);                         //holt sich jeweils den key aus dem LS
            let localValue: string = <string>localStorage.getItem(localKey);                //holt sich jeweils den value aus dem LS

            localStorageData += localKey + "=" + localValue + "&";                          //speichert Eintrag im String, damit dieser in die url übernommen werden kann
        }

        formData = new FormData(document.forms[0]);
        let serverURL: string = "https://gis-sose2020.herokuapp.com";
        // let serverURL: string = "http://localhost:8100";

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        serverURL += "/store" + "?" + localStorageData + query.toString();
        
        let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formCart");
        if (formular)
            formular.reset();
        
        await fetch(serverURL);

        alert("Danke für deine Bestellung!");
    }
}