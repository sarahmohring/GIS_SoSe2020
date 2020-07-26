"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endabgabe = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Endabgabe;
(function (Endabgabe) {
    let orders;
    let port = Number(process.env.PORT);
    if (port == undefined)
        port = 8100;
    let databaseUrl = "";
    //local oder remote
    let args = process.argv.slice(2);
    if (args[0] == "local")
        databaseUrl = "mongodb://localhost:27017";
    else // default: remote
        databaseUrl = "mongodb+srv://new-user:new-user@sarahgis2020-cv3gn.mongodb.net/Aufgabe_11?retryWrites=true&w=majority";
    startingServer(port);
    connectToDatabase(databaseUrl);
    function startingServer(_port) {
        let server = Http.createServer();
        console.log("Server starting on port: " + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("EISDIELE").collection("Bestellungen");
        console.log("Database connection", orders != undefined); // Ausgabe true - hat geklappt; false - hat nicht geklappt
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/store") { // Bestellung vom Kunde wird eingetragen in DB
                orders.insertOne(url.query);
            }
            else if (url.pathname == "/retrieve") { // Bestellung wird von Besitzer abgerufen
                let bestellungDB = orders.find(); //liest die einzelnen Dokumente der DB aus
                let bestellungArray = await bestellungDB.toArray();
                let jsonString = JSON.stringify(bestellungArray);
                _response.write(jsonString);
            }
            else if (url.pathname == "/deleteOne") { // einzelne Bestellung aus DB löschen
                let objectID = getID();
                let jsonString = JSON.stringify(await orders.deleteOne({ "_id": objectID }));
                _response.write(jsonString);
            }
            else if (url.pathname == "/deleteAll") { // alle Bestellungen aus DB löschen
                orders.drop();
            }
            function getID() {
                // Quelle: Beispiellösung A11 - https://github.com/Plagiatus/GIS_SoSe2020/blob/master/Aufgabe11/Server/database.ts#L29
                let query = url.query;
                let id = query["id"]; // richtigen URL-Teil auswählen
                let objectID = new Mongo.ObjectID(id);
                return objectID;
            }
            if (url.pathname == "/edit") { // Bestellung bearbeiten
                let objectID = getID();
                // Quelle: https://www.guru99.com/mongodb-update-document.html
                orders.updateOne({ "_id": objectID }, // richtiges Document identifizieren
                { $set: { "Anmerkungen": "gesendet" } } // verändert den Wert von "Anmerkungen"  
                );
            }
        }
        _response.end();
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=server.js.map