"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe_11 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe_11;
(function (Aufgabe_11) {
    let data;
    let databaseUrl;
    //local oder remote
    let args = process.argv.slice(2);
    if (args[0] == "local")
        databaseUrl = "mongodb://localhost:27017";
    else // Wenn nicht lokal dann immer remote
        databaseUrl = "mongodb+srv://new-user:new-user@sarahgis2020-cv3gn.mongodb.net/Aufgabe_11?retryWrites=true&w=majority";
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
        data = mongoClient.db("Aufgabe_11").collection("Collection_11");
        console.log("Database connection", data != undefined); // Ausgabe true - hat geklappt; false - hat nicht geklappt
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let pfad = url.pathname;
            if (pfad == "/retrieve") {
                data.find({}).toArray(function (err, result) {
                    if (err)
                        throw err;
                    let resultString = "";
                    for (let i = 0; i < result.length; i++) {
                        resultString += JSON.stringify(result[i]) + ",";
                    }
                    console.log(resultString);
                    _response.write(JSON.stringify(resultString));
                    _response.end();
                });
            }
            else if (pfad == "/store")
                data.insertOne(url.query);
        }
    }
})(Aufgabe_11 = exports.Aufgabe_11 || (exports.Aufgabe_11 = {}));
//# sourceMappingURL=server.js.map