const filesystem = require('fs');
const http = require('http');

let string_html = filesystem.readFileSync('Lab6.html');
console.log ("si funciona");

const server = http.createServer( (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write(string_html);
    response.end();

});