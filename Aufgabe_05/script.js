"use strict";
var Aufgabe_05;
(function (Aufgabe_05) {
    let divElemAll = document.createElement("div");
    divElemAll.setAttribute("class", "flexProdukte");
    for (let index = 0; index < Aufgabe_05.produkteKamera.length; index++) {
        let divElem = document.createElement("div");
        divElem.setAttribute("class", "kameras");
        divElemAll.appendChild(divElem);
        let imgElem = document.createElement("img");
        imgElem.setAttribute("src", Aufgabe_05.produkteKamera[index].imgurl);
        imgElem.setAttribute("alt", Aufgabe_05.produkteKamera[index].name);
        divElem.appendChild(imgElem);
        let p1Elem = document.createElement("p");
        divElem.appendChild(p1Elem);
        p1Elem.innerHTML = Aufgabe_05.produkteKamera[index].name;
        let p2Elem = document.createElement("p");
        divElem.appendChild(p2Elem);
        p2Elem.innerHTML = Aufgabe_05.produkteKamera[index].beschreibung;
        let p3Elem = document.createElement("p");
        divElem.appendChild(p3Elem);
        p3Elem.innerHTML = Aufgabe_05.produkteKamera[index].preis;
    }
    for (let index = 0; index < Aufgabe_05.produkteZubehoer.length; index++) {
        let divElem2 = document.createElement("div");
        divElem2.setAttribute("class", "zubehoer");
        divElemAll.appendChild(divElem2);
        let imgElem = document.createElement("img");
        imgElem.setAttribute("src", Aufgabe_05.produkteZubehoer[index].imgurl);
        imgElem.setAttribute("alt", Aufgabe_05.produkteZubehoer[index].name);
        divElem2.appendChild(imgElem);
        let p1Elem = document.createElement("p");
        divElem2.appendChild(p1Elem);
        p1Elem.innerHTML = Aufgabe_05.produkteZubehoer[index].beschreibung;
        let p2Elem = document.createElement("p");
        divElem2.appendChild(p2Elem);
        p2Elem.innerHTML = Aufgabe_05.produkteZubehoer[index].beschreibung;
        let p3Elem = document.createElement("p");
        divElem2.appendChild(p3Elem);
        p3Elem.innerHTML = Aufgabe_05.produkteZubehoer[index].preis;
        let buttonElem = document.createElement("button");
        buttonElem.setAttribute("src", "shoppingcart.png");
        divElem2.appendChild(buttonElem);
    }
    document.getElementById("main")?.appendChild(divElemAll);
})(Aufgabe_05 || (Aufgabe_05 = {}));
//# sourceMappingURL=script.js.map