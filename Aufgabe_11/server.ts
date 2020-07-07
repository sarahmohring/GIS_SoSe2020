import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe_11 {

    let data: Mongo.Collection;
    let databaseUrl: string = "";

    //local oder remote
    let args: string[] = process.argv.slice(2);
    if (args[0] == "local")
        databaseUrl = "mongodb://localhost:27017";
    else // default: remote
        databaseUrl = "mongodb+srv://new-user:new-user@sarahgis2020-cv3gn.mongodb.net/Aufgabe_11?retryWrites=true&w=majority";

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;

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
        data = mongoClient.db("Aufgabe_11").collection("Collection_11");
        console.log("Database connection", data != undefined); // Ausgabe true - hat geklappt; false - hat nicht geklappt
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!");

        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let pfad: string | null = url.pathname;

            if (pfad == "/store") {
                data.insertOne(url.query);
            }

            else if (pfad == "/retrieve") {
                _response.write(JSON.stringify(await data.find().toArray()));
            }    
        }
        _response.end();
    }
}