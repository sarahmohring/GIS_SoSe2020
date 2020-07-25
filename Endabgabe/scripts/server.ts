import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
import { ParsedUrlQuery } from "querystring";

export namespace Endabgabe {

    interface Orders {

        // tslint:disable-next-line: no-any
        [type: string]: string[] | undefined;
    }

    let retrievedData: Orders[];
    let orders: Mongo.Collection; // data = orders
    let port: number = Number(process.env.PORT);
    if (port == undefined)
        port = 5001;

    let databaseUrl: string = "";

    //local oder remote
    let args: string[] = process.argv.slice(2);
    if (args[0] == "local")
        databaseUrl = "mongodb://localhost:27017";
    else // default: remote
        databaseUrl = "mongodb+srv://new-user:new-user@sarahgis2020-cv3gn.mongodb.net/Aufgabe_11?retryWrites=true&w=majority";

    startingServer(port);
    connectToDatabase(databaseUrl);

    function startingServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();

        console.log("Server starting on port: " + _port);

        server.listen(_port);
        server.addListener("request", handleRequest);
    }

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("EISDIELE").collection("Bestellungen");
        console.log("Database connection", orders != undefined); // Ausgabe true - hat geklappt; false - hat nicht geklappt
    }
    /*
        function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
            console.log("What's up?");
    
            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
    
            if (_request.url) {
                let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + "<br/>");
                }
    
                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);
    
                storeOrder(url.query);
            }
    
            _response.end();
        }
    
    
        function storeOrder(_order: Order): void {
            orders.insert(_order);
        } */

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!");

        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

            if (url.pathname == "/store") { // Bestellung vom Kunde wird eingetragen in DB
                orders.insertOne(url.query);
            }

            else if (url.pathname == "/retrieve") { // Bestellung wird von Besitzer abgerufen
                await retrieveDB(_response);
                /*//_response.write(JSON.stringify(await orders.find().toArray()));
                let bestellungDB: Mongo.Cursor<string> = orders.find(); //liest die Dokumente der Datenbank aus
                let bestellungArray: string[] = await bestellungDB.toArray();
                let jsonString: string = JSON.stringify(bestellungArray);
                _response.write(jsonString);*/
            }

            else if (url.pathname == "/deleteOne") { // !!!
                let objectID: Mongo.ObjectID = getID();
                let jsonString: string = JSON.stringify(await orders.deleteOne({ "_id": objectID }));
                _response.write(jsonString);
            }

            else if (url.pathname == "/deleteAll") {
                orders.drop();
            }

            function getID(): Mongo.ObjectID {
                // Quelle: Beispiellösung A11 - https://github.com/Plagiatus/GIS_SoSe2020/blob/master/Aufgabe11/Server/database.ts#L29
                let query: ParsedUrlQuery = url.query;
                let id: string = <string>query["id"];   //wählt den richtigen Teil der query aus
                console.log(id);

                let objectID: Mongo.ObjectID = new Mongo.ObjectID(id);
                return objectID;
            }

            /*
            if (url.pathname == "/edit") {

                let objectID: Mongo.ObjectID = getID();

                //Quelle: https://www.guru99.com/mongodb-update-document.html
                orders.update
                    (
                        {
                            "_id": objectID    //wählt das Document in der DB aus, welches verändert werden soll
                        },
                        {
                            $set:
                            {
                                "street": "sent"   //verändert den Wert von street
                            }
                        }
                    );
            }
            */
        }
        _response.end();
    }


    async function retrieveDB(_response: Http.ServerResponse): Promise<void> {
        //tslint:disable-next-line: no-any
        retrievedData = await orders.find().toArray();
        for (let index: number = 0; index <= retrievedData.length; index++) {

            if (retrievedData[index]) {

                let current: Orders = <Orders>retrievedData[index];
                for (let key in current) {
                    _response.write(key + ": " + JSON.stringify(current[key]) + "<br>");
                }
                _response.write("<br>");
            }

        }
    }
}