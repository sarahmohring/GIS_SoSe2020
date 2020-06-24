"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe_09 = void 0;
const Http = require("http");
const Url = require("url");
var Aufgabe_09;
(function (Aufgabe_09) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            if (path == "//html") {
                for (let key in url.query) {
                    _response.write(key + ": " + url.query[key] + "<br/>");
                }
            }
            else if (path == "//json") {
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
            }
            else if (path == "//Aufgabe_08") {
                _response.write(_request.url);
            }
        }
        _response.end();
    }
})(Aufgabe_09 = exports.Aufgabe_09 || (exports.Aufgabe_09 = {}));
//# sourceMappingURL=server.js.map