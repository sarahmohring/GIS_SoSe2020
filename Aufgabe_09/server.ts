import * as Http from "http";
import * as Url from "url";

export namespace Aufgabe_09 {
  console.log("Starting server");
  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.listen(port);

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { // Passen Sie Request Handler so an, dass der query/path string nicht nur auf der Webseite, sondern auch in der Konsole des Servers ausgegeben wird.
    console.log("I hear voices!");

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    if (_request.url) {
      let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
      for (let key in url.query) {
        _response.write(key + ":" + url.query[key] + "<br/>");
      }

      let jsonString: string = JSON.stringify(url.query);
      _response.write(jsonString);
    }
    _response.end();
  }
}