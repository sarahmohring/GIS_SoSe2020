namespace Aufgabe_08 {

    let formData: FormData = new FormData(document.forms[0]);
    document.getElementById("button")?.addEventListener("click", buttonHandler);

    async function addToURL(): Promise<string> {
        
        let url: string = "https://gis-sose2020.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += url + "?" + query.toString();
        return url;
    }
    async function buttonHandler(): Promise<void> {
        getResponse(await addToURL());
    }

    async function getResponse(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let resp2: string = await response.text();
        console.log("Response", resp2);
    }

    for (let entry of formData) {
        console.log(entry);
        console.log("name: " + entry[0]);
        console.log("value: " + entry[1]);
    }
    

}