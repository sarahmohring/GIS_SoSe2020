namespace Aufgabe_08 {

    document.getElementById("button")?.addEventListener("click", buttonHandler);
    let formData: FormData = new FormData(document.forms[0]);

    async function zuURL(): Promise<string> {
        let url: string = "https://gis-sose2020.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += url + "?" + query.toString();
        console.log(url);
        return url;
    }

    async function buttonHandler(): Promise<void> {
        responseHolen(await zuURL());
    }

    async function responseHolen(_url: RequestInfo): Promise<void> {
        let response1: Response = await fetch(_url);
        let response2: string = await response1.text();
        console.log("Response", response2);
    }
}
