namespace Aufgabe_05 {

    let divElemAll: HTMLElement = document.createElement("div");
    divElemAll.setAttribute("class", "flexProdukte");

    for (let index: number = 0; index < produkteKamera.length; index++) {

        let divElem: HTMLElement = document.createElement("div");
        divElem.setAttribute("class", "kameras");
        divElemAll.appendChild(divElem);

        let imgElem: HTMLElement = document.createElement("img");
        imgElem.setAttribute("src", produkteKamera[index].imgurl);
        divElem.appendChild(imgElem);

        let p1Elem: HTMLElement = document.createElement("p");
        divElem.appendChild(p1Elem);
        p1Elem.innerHTML = produkteKamera[index].name;

        let p2Elem: HTMLElement = document.createElement("p");
        divElem.appendChild(p2Elem);
        p2Elem.innerHTML = produkteKamera[index].beschreibung;

        let p3Elem: HTMLElement = document.createElement("p");
        divElem.appendChild(p3Elem);
        p3Elem.innerHTML = produkteKamera[index].preis;
    }

    for (let index: number = 0; index < produkteZubehoer.length; index++) {

        let divElem: HTMLElement = document.createElement("div");
        divElem.setAttribute("class", "zubehoer");                  //?????
        divElemAll.appendChild(divElem);

        let imgElem: HTMLElement = document.createElement("img");
        imgElem.setAttribute("src", produkteZubehoer[index].imgurl);
        divElem.appendChild(imgElem);

        let p1Elem: HTMLElement = document.createElement("p");
        divElem.appendChild(p1Elem);
        p1Elem.innerHTML = produkteZubehoer[index].beschreibung;

        let p2Elem: HTMLElement = document.createElement("p");
        divElem.appendChild(p2Elem);
        p2Elem.innerHTML = produkteZubehoer[index].beschreibung;

        let p3Elem: HTMLElement = document.createElement("p");
        divElem.appendChild(p3Elem);
    //  p3Elem.setAttribute("class", "preis");
        p3Elem.innerHTML = produkteZubehoer[index].preis;

        /*let buttonElem: InputEventInit = document.createElement("input");
        buttonElem.value = "In den Warenkorb!";
        buttonElem.type = "submit";
        divElem.appendChild(buttonElem);*/
    }

    document.getElementById("main")?.appendChild(divElemAll);

}

/* button ???
let buttonElem = document.createElement("input");
    buttonElem.value = "In den Warenkorb!";
    buttonElem.type = "submit";
    divElem.appendChild(newB);
} */