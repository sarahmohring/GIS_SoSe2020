import * as Http from "http";

export namespace Aufgabe_08 {
  console.log("Starting server");
  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);

  function handleListen(): void {
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { // Passen Sie den Request Handler so an, dass der query/path string nicht nur auf der Webseite, sondern auch in der Konsole des Servers ausgegeben wird.
    console.log("I hear voices!"); 

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    _response.write(_request.url);
    console.log(_request.url); // ???

    _response.end();
  }
}