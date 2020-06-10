"use strict";
console.log("Start");
communicate("https://hs-furtwangen.github.io/GIS-SoSe-2020/L07/test.txt");
console.log("End");
async function communicate(_url) {
    let response = await fetch(_url);
    response.text();
    console.log("Response", response);
}
/*

Kopiere obenstehenden asynchronen Code und bette ihn in ein neues Programm ein. Lasse vom Hauptprogramm aus die Funktion communicate mit dem Parameter "https://hs-furtwangen.github.io/GIS-SoSe-2020/L07/test.txt" aufrufen. Lasse vor und nach dem Aufruf von communicate in der Konsole die Zeichenketten “Start” und “End” ausgeben.
Starte nun das Programm, nachdem Du es lauffähig implementiert hast. Beschreibe deine Beobachtung. In welcher Reihenfolge kommen die Ausgabe in der Konsole?
Das ausgegebene Response-Objekt ist komplex und der eigentliche Inhalt der Serverantwort ist noch nicht zu sehen. Erweitere die Funktion communicate um eine Zeile, in der Du die Methode text() des Response-Objektes aufrufst. Achtung: text() gibt wieder eine Promise zurück. Nutzt Du aber auch hier await erhältst Du als Ergebnis des Ganzen eine Zeichenkette, die Du einer Variablen vom Typ string zuweist. Lasse so den Inhalt der Serverantwort ausgeben.
Versuche das gleiche nochmal mit dem Parameter "https://hs-furtwangen.github.io/GIS-SoSe-2020/L07/testjson.json" und der Funktion json() statt text().

Hinweis: fetch erwartet immer eine http(s):// Anfrage, wenn ihr es also lokal testen wollt, solltet ihr einen Live-Server verwenden, da sonst die Anfrage mit file:// beginnt.
*/
//# sourceMappingURL=demo.js.map