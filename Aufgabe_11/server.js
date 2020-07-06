"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe_11 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe_11;
(function (Aufgabe_11) {
    let orders;
    //let databaseUrl: string = "mongodb+srv://new-user:<new-user>@sarahgis2020-cv3gn.mongodb.net/<dbname>?retryWrites=true&w=majority"; -> dbname ändern
    let databaseUrl = "mongodb://localhost:27017";
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
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
        orders = mongoClient.db("CocktailBar").collection("Orders");
        console.log("Database connection", orders != undefined); // Ausgabe true - hat geklappt; false - hat nicht geklappt
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            storeOrder(url.query);
        }
        _response.end();
    }
    function storeOrder(_order) {
        orders.insert(_order);
    }
})(Aufgabe_11 = exports.Aufgabe_11 || (exports.Aufgabe_11 = {}));
//# sourceMappingURL=server.js.map