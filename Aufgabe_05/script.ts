namespace Aufgabe_05 {

    let divElemAll: HTMLDivElement = document.createElement("div");
    divElemAll.setAttribute("class", "flexProdukte");

    let divHeader: HTMLElement = document.createElement("div");
    divHeader.setAttribute("class", "kategorie");
    let hElemDiv: HTMLElement = document.createElement("h1");
    hElemDiv.setAttribute("id", "kategorie1");
    hElemDiv.innerHTML = "Kameras";
    divHeader.appendChild(hElemDiv);
    divElemAll.appendChild(divHeader);

    for (let index: number = 0; index < produkteKamera.length; index++) {

        let divElem: HTMLDivElement = document.createElement("div");
        divElem.setAttribute("class", "kameras");
        divElemAll.appendChild(divElem);

        let imgElem: HTMLImageElement = document.createElement("img");
        imgElem.setAttribute("src", produkteKamera[index].imgurl);
        imgElem.setAttribute("alt", produkteKamera[index].name);
        divElem.appendChild(imgElem);

        let p1Elem: HTMLParagraphElement = document.createElement("p");
        divElem.appendChild(p1Elem);
        p1Elem.innerHTML = produkteKamera[index].name;

        let p2Elem: HTMLParagraphElement = document.createElement("p");
        divElem.appendChild(p2Elem);
        p2Elem.innerHTML = produkteKamera[index].beschreibung;

        let p3Elem: HTMLParagraphElement = document.createElement("p");
        divElem.appendChild(p3Elem);
        p3Elem.innerHTML = produkteKamera[index].preis;
        
        let buttonElem: HTMLButtonElement = document.createElement("button");
        buttonElem.innerHTML = "In den Warenkorb!";
        divElem.appendChild(buttonElem);
    }

    let divHeader2: HTMLElement = document.createElement("div");
    divHeader2.setAttribute("class", "kategorie");
    let hElemDiv2: HTMLElement = document.createElement("h1");
    hElemDiv2.setAttribute("id", "kategorie2");
    hElemDiv2.innerHTML = "Zubehör";
    divHeader2.appendChild(hElemDiv2);
    divElemAll.appendChild(divHeader2);

    for (let index: number = 0; index < produkteZubehoer.length; index++) {

        let divElem: HTMLDivElement = document.createElement("div");
        divElem.setAttribute("class", "zubehoer");
        divElemAll.appendChild(divElem);

        let imgElem: HTMLImageElement = document.createElement("img");
        imgElem.setAttribute("src", produkteZubehoer[index].imgurl);
        imgElem.setAttribute("alt", produkteZubehoer[index].name);
        divElem.appendChild(imgElem);

        let p1Elem: HTMLParagraphElement = document.createElement("p");
        divElem.appendChild(p1Elem);
        p1Elem.innerHTML = produkteZubehoer[index].name;

        let p2Elem: HTMLParagraphElement = document.createElement("p");
        divElem.appendChild(p2Elem);
        p2Elem.innerHTML = produkteZubehoer[index].beschreibung;

        let p3Elem: HTMLParagraphElement = document.createElement("p");
        divElem.appendChild(p3Elem);
        p3Elem.innerHTML = produkteZubehoer[index].preis;

        let buttonElem: HTMLButtonElement = document.createElement("button");
        buttonElem.innerHTML = "In den Warenkorb!";
        divElem.appendChild(buttonElem);
    }

    document.getElementById("main")?.appendChild(divElemAll);
}