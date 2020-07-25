namespace Endabgabe {
    let divAnzeige: HTMLDivElement = <HTMLDivElement>document.getElementById("bestellungenAnzeigen");

    let buttonDisplay: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonRetrieve");
    buttonDisplay.addEventListener("click", handleDisplay);

    let buttonDeleteAll: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonDeleteAll");
    buttonDeleteAll.addEventListener("click", handleDeleteAll);

    // gibt aktuelle Einträge der Datenbank aus
    async function handleDisplay(): Promise<void> { // falls FOramtierung nicht klappt

        let url: string = "https://gis-sose2020.herokuapp.com";
        url += "/retrieve";

        let response: Response = await fetch(url);
        let responseString: string = await response.text(); //JSON String 

        document.getElementById("bestellungenAnzeigen")!.style.display = "none";

        let order: Order[] = JSON.parse(responseString);

        console.log(order);

        /*let formData: FormData;
    
        async function handleDisplay(): Promise<void> {
            formData = new FormData(document.forms[0]);
            let serverURL: string = "https://gis-sose2020.herokuapp.com";
            serverURL += "/retrieve";
            // tslint:disable-next-line: no-any
            let query: URLSearchParams = new URLSearchParams(<any>formData);
            serverURL += "?" + query.toString();
            let response: Response = await fetch(serverURL);
            let responseText: string = await response.text();
            // (<HTMLElement>document.getElementById("bestellungenAnzeigen")).innerHTML = responseText;
    
            document.getElementById("bestellungenAnzeigen")!.style.display = "none";
    
            let order: Order[] = JSON.parse(responseText);
    
            console.log(order);*/

        for (let index: number = 0; index < order.length; index++) {
            //HTML Gerüst der Bestellung aufbauen
            let orderDiv: HTMLDivElement = document.createElement("div");
            orderDiv.setAttribute("class", "orderSpan");
            divAnzeige.appendChild(orderDiv);

            let orderHeading: HTMLHeadingElement = document.createElement("h3");
            let orderIndex: number = index + 1;
            orderHeading.innerHTML = "Bestellung " + orderIndex;
            orderDiv.appendChild(orderHeading);

            let outputSpan: HTMLSpanElement = document.createElement("span");
            let ausgabeString: string = "";

            //Produktausgabe
            ausgabeString += "Eis: " + order[index].Produkte + "<br>";
            ausgabeString += "Name: " + order[index].Name + "<br>";
            ausgabeString += "Adresse: " + order[index].Adresse + "<br>";
            ausgabeString += "Anmerkungen: " + order[index].Anmerkungen + "<br>";

            let buttonDeleteOne: HTMLButtonElement = document.createElement("button");
            buttonDeleteOne.addEventListener("click", handleDeleteOne);
            buttonDeleteOne.setAttribute("orderid", order[index]._id);

            let buttonEdit: HTMLButtonElement = document.createElement("button");
            buttonEdit.addEventListener("click", handleEdit);
            buttonDeleteOne.setAttribute("orderid", order[index]._id);

            outputSpan.innerHTML = ausgabeString;
            orderDiv.appendChild(outputSpan);
            orderDiv.appendChild(buttonDeleteOne);
            orderDiv.appendChild(buttonEdit);
        }
    }

    async function handleDeleteOne(_event: Event): Promise<void> { // ???
        let clickedButton: HTMLElement = <HTMLElement>_event.target;
        let orderID: string = <string>clickedButton.getAttribute("orderid");

        let url: string = "https://gis-sose2020.herokuapp.com";
        url += "/deleteOne" + "?" + "id=" + orderID;

        await fetch(url);

        update();

    }

    async function handleDeleteAll(): Promise<void> {
        let url: string = "https://gis-sose2020.herokuapp.com";
        url += "/deleteAll";

        await fetch(url);

        while (divAnzeige.hasChildNodes()) {
            divAnzeige.removeChild(<Node>divAnzeige.firstChild);
        }
    }

    async function handleEdit(_event: Event): Promise<void> {
        let clickedButton: HTMLElement = <HTMLElement>_event.target;
        let orderID: string = <string>clickedButton.getAttribute("orderid");

        let url: string = "https://gis-sose2020.herokuapp.com";
        url += "/edit" + "?" + "id=" + orderID;

        await fetch(url);

        update();

    }


    function update(): void {
        while (divAnzeige.hasChildNodes()) {
            divAnzeige.removeChild(<Node>divAnzeige.firstChild);
        }

        if (document.getElementById("buttonDiv") != null) {
            document.getElementById("main")?.removeChild(<Node>document.getElementById("buttonDiv"));
        }

        handleDisplay();
    }
}