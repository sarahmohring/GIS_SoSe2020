"use strict";
var Aufgabe_06;
(function (Aufgabe_06) {
    let count = 0;
    let sum = 0;
    document.querySelector("").addEventListener("button", handleButton);
    document.querySelector("").addEventListener("button", preisRechner);
    function handleButton(_event) {
        count++;
        //console.log(_event);
    }
    function preisRechner(_event) {
        console.log(sum);
    }
})(Aufgabe_06 || (Aufgabe_06 = {}));
//# sourceMappingURL=scriptEvents.js.map