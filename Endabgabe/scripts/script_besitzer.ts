/* retrieve */

namespace Endabgabe {
    let divOutput: HTMLDivElement = <HTMLDivElement>document.getElementById("output");

    let requestOrdersButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("requestOrders");
    requestOrdersButton.addEventListener("click", handleOutput);

    //Gives Output of current Entries in DB
    async function handleOutput(): Promise<void> {

        let url: string = "https://gis-sose2020.herokuapp.com";
        url += "/retrieve";

        let response: Response = await fetch(url);
        let responseString: string = await response.text(); //JSON String 

        document.getElementById("bestellungenAnzeigen")!.style.display = "none";

        let auswahl: Auswahl[] = JSON.parse(responseString);

        console.log(auswahl);

    }

    let buttonDeleteOne: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonDeleteOne");
    buttonDeleteOne.addEventListener("click", deleteOne);

    let buttonDeleteAll: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonDeleteAll");
    buttonDeleteAll.addEventListener("click", deleteAll);

    let buttonEdit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonEdit");
    buttonEdit.addEventListener("click", editOne);


    async function deleteOne(_event: Event): Promise<void> {
        let clickedButton: HTMLElement = <HTMLElement>_event.target;
        let orderID: string = <string>clickedButton.getAttribute("orderid");

        let url: string = "https://gissose2020jacquelinekoch.herokuapp.com";
        url += "/deleteOne" + "?" + "id=" + orderID;

        await fetch(url);

        update();

    }

    async function deleteAll(): Promise<void> {
        let url: string = "https://gissose2020jacquelinekoch.herokuapp.com";
        url += "/deleteAll";

        await fetch(url);

        while (divOutput.hasChildNodes()) {
            divOutput.removeChild(<Node>divOutput.firstChild);
        }
    }

    async function editOne(_event: Event): Promise<void> {
        let clickedButton: HTMLElement = <HTMLElement>_event.target;
        let orderID: string = <string>clickedButton.getAttribute("orderid");

        let url: string = "https://gissose2020jacquelinekoch.herokuapp.com";
        url += "/edit" + "?" + "id=" + orderID;

        await fetch(url);

        update();

    }


    function update(): void {
        while (divOutput.hasChildNodes()) {
            divOutput.removeChild(<Node>divOutput.firstChild);
        }

        if (document.getElementById("buttonDiv") != null) {
            document.getElementById("main")?.removeChild(<Node>document.getElementById("buttonDiv"));
        }

        handleOutput();
    }
}