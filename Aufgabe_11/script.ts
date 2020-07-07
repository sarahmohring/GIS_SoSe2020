namespace Aufgabe_11 {

  let formData: FormData;
  let buttonDatenbank: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonDatenbank");
  buttonDatenbank.addEventListener("click", handleClickStore);

  let buttonJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonJSON");
  buttonJSON.addEventListener("click", handleClickRetrieve);

  async function handleClickRetrieve(): Promise<void> {
    let serverURL: string = "https://gis-sose2020.herokuapp.com";
    serverURL += "/retrieve";
    let response: Response = await fetch(serverURL);
    let responseText: string = await response.text();
    (<HTMLElement>document.getElementById("serverResponse")).innerHTML = responseText;
  }

  async function handleClickStore(): Promise<void> {
    formData = new FormData(document.forms[0]);
    let serverURL: string = "https://gis-sose2020.herokuapp.com";
    serverURL += "/store";

    let query: URLSearchParams = new URLSearchParams(<any>formData);
    serverURL += "?" + query.toString();

    let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("form");
    formular.reset();

    await fetch(serverURL);
  }
}