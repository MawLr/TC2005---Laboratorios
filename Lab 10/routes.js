const criminales = ["Dirlewanger", "Milosevic", "Beria", "Stalin"];
const nuevos_criminales = [];

const requestHandler = (request, response) => {
    console.log("Hola desde el servidor");
    console.log(request.url);

    if (request.url === "/criminales"){
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Servidor Node</title></head>');
        response.write("<body><h1>Criminales de Guerra</h1></body>");
        if (criminales.length == 0){
            response.write("<h2>Los criminales se han ido a La Haya</h2>");
        } else {
            response.write("<ul>");
            for (let criminal of criminales){
                response.write("<li>");
                response.write(criminal);
                response.write("</li>");
            }
            response.write("<ul>");
        }
        response.write("</html>");
        response.end();
    } else if(request.url == "/nuevo-criminal" && request.method === "GET"){
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Servidor Node</title></head>');
        response.write("<body><h1>Agrega un criminal</h1>");
        response.write('<form action="nuevo-criminal" method="POST"><input type="text" name="nombre"><input type="submit" value="Guardar criminal"></form>');
        response.write("</body>");
        response.write("</html>");
        response.end();
    } else if(request.url == "/nuevo-criminal" && request.method === "POST"){
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nuevo_personaje = datos_completos.split('=')[1];
            criminales.push(nuevo_personaje);
            nuevos_criminales.push(nuevo_personaje);
            console.log(nuevo_personaje);
            console.log(criminales);

            console.log("Criminales guardados en Criminales.txt");
            const filesystem = require('fs');
            filesystem.writeFileSync('Nuevos Criminales.txt', nuevos_criminales.toString());

            response.statusCode = 302; // Código de redirección
            response.setHeader('Location', '/criminales');
            return response.end();
        });
    } else if(request.url === "/"){
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Servidor Node</title></head>');
        response.write("<body><h1>Criminales de Guerra</h1></body>");
        response.write("</html>");
        response.end();
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Página no encontrada</title></head>');
        response.write("<body><h1>Parece que han sido todos condenados a muerte.</h1></body>");
        response.write("</html>");
        response.end();
    }
}

module.exports = requestHandler;