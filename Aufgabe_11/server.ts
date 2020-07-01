import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe_11 {

    interface Order {
        [type: string]: string | string[] | undefined;
    }

    let orders: Mongo.Collection;

    let databaseUrl: string = "mongodb://localhost:27017";

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
        orders = mongoClient.db("CocktailBar").collection("Orders");
        console.log("Database connection", orders != undefined); // Ausgabe true - hat geklappt; false - hat nicht geklappt
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");

        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");


        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);

            storeOrder(url.query);
        }

        _response.end();
    }

    function storeOrder(_order: Order): void {
        orders.insert(_order);
    }
}