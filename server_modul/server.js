const http = require('http');
const port = 8080;

const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain'); 
    res.statusCode = 200;
    res.end("Vizsga szerver")
});

server.listen(port, hostname, () => { 
    console.log("A szerver működik a http://${hostname}:${port}/ címen");
    console.log("A szerver működik a http://127.0.0.1:8080/ címen");
});
