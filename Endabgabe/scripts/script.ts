namespace Endabgabe {

    window.addEventListener("load", handleLoad);
    let form: HTMLFormElement;

    document.getElementById("reset")?.addEventListener("click", resetOrder);

    async function handleLoad(_event: Event): Promise<void> {

        let response: Response = await fetch("../scripts/auswahl.json");
        let artikel: string = await response.text();
        let inhalt: Inhalt = JSON.parse(artikel);

        produkteErzeugen(inhalt);

        form = <HTMLFormElement>document.querySelector("form");
        form.addEventListener("change", handleChange);

        displayOrder();
    }

    function handleChange(_event: Event): void {
        displayOrder();
    }

    function displayOrder(): void {
        let preis: number = 0;
        let bestellung: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        bestellung.innerHTML = "";

        let formData: FormData = new FormData(form);

        for (let entry of formData) {
            let selector: string = "[value='" + entry[1] + "']"; // "[name='" + entry[0] + "'][value='" + entry[1] + "']";
            let auswahl: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
            let auswahlPreis: number = Number(auswahl.getAttribute("preis"));
            bestellung.innerHTML += auswahl.value + ": " + auswahlPreis.toFixed(2) + " €" + "<br>";
            preis += auswahlPreis;
            localStorage.setItem("Produkte", JSON.stringify(bestellung.innerHTML));
        }

        bestellung.innerHTML += "<p><strong>Gesamtsumme: " + preis.toFixed(2) + " €";
        localStorage.setItem("Gesamtsumme", "<b>Gesamtsumme: </b>" + JSON.stringify(preis.toFixed(2) + " €"));
    }

    export function resetOrder(_event: Event): void { // hinkriegen ohne inline javascript!!
        window.location.reload(true);
        window.localStorage.clear();
        //localStorage.clear();
        //displayOrder();
        /*let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("bestellung");
        if (formular) {
            formular.reset();
            
            /*window.localStorage.clear();
            localStorage.removeItem("Gesamtsumme");
            localStorage.removeItem("Produkte");
            let divOrder: HTMLElement = <HTMLElement>document.getElementById("order");
            divOrder.innerHTML = "";
            displayOrder();
             document.getElementById("order")?.removeChild(<Node>document.getElementById("order")?.lastChild);
            
        } */
    }
}

