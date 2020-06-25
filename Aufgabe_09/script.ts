namespace Aufgabe_09 {

    document.getElementById("buttonHTML")?.addEventListener("click", buttonHandlerHTML);
    document.getElementById("buttonJSON")?.addEventListener("click", buttonHandlerJSON);

    async function buttonHandlerHTML(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gis-sose2020.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/html" + "?" + query.toString();

        let response: Response = await fetch(url);
        let responseToClient: string = await response.text();
        let serverResponse: HTMLElement = <HTMLElement>document.getElementById("serverResponse");
        serverResponse.innerHTML = responseToClient;
    }

    async function buttonHandlerJSON(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gis-sose2020.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/json" + "?" + query.toString();

        let response: Response = await fetch(url);
        let responseToClient: string = await response.json();
        console.log(responseToClient);
    }
} 