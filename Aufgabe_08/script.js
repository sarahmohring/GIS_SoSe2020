"use strict";
var Aufgabe_08;
(function (Aufgabe_08) {
    /*document.getElementById("button")?.addEventListener("click", buttonHandler);
    let formData: FormData = new FormData(document.forms[0]);

    async function zuURL(): Promise<void> {
        let url: string = "https://gis-sose2020.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += url + "?" + query.toString();
        console.log(url);
        
    }

    async function buttonHandler(): Promise<void> {
        responseHolen("https://gis-sose2020.herokuapp.com/");
    }

    async function responseHolen(_url: RequestInfo): Promise<void> {
        let response1: Response = await fetch(_url);
        let response2: string = await response1.text();
        console.log("Response", response2);
    }
}*/
    let formData;
    document.getElementById("button")?.addEventListener("click", buttonHandler);
    function buttonHandler() {
        responseHolen("https://gis-sose2020.herokuapp.com/");
    }
    async function responseHolen(_url) {
        formData = new FormData(document.forms[0]);
        let url = "" + _url;
        let query = new URLSearchParams(formData);
        url += url + "?" + query.toString();
        let response = await fetch(url);
        let responseToUser = await response.text();
        console.log(responseToUser);
    }
})(Aufgabe_08 || (Aufgabe_08 = {}));
//# sourceMappingURL=script.js.map