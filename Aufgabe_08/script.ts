namespace Aufgabe_08 {

    let formData: FormData;
    document.getElementById("button")?.addEventListener("click", buttonHandler);

    function buttonHandler(): void {
        responseHolen("https://gis-sose2020.herokuapp.com/");
    }

    async function responseHolen(_url: RequestInfo): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "" + _url;
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += url + "?" + query.toString();
        let response: Response = await fetch(url);
        let responseToUser: String = await response.text();
        console.log(responseToUser);
    }
} 
