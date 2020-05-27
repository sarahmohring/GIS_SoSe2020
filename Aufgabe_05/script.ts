namespace Aufgabe_05 {

    let divElemAll: HTMLDivElement = document.createElement("div");
    divElemAll.setAttribute("class", "flexProdukte");

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
    }

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
        buttonElem.setAttribute("src", "shoppingcart.png");
        divElem.appendChild(buttonElem);
    }

    document.getElementById("main")?.appendChild(divElemAll);
}