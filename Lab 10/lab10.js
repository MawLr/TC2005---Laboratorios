// A01706212 - José Manuel Medina
// Laboratorio 10

const fs = require('fs');
const readline = require('readline');

const blindados = [];
const aviones = [];
const navios = [];

// Para lectura de Archivos de texto:

function readTextbyLine (archivo,array){
    const readInterface = readline.createInterface({
        input: fs.createReadStream(archivo),
        output: process.stdout,
        console: false
    });

    readInterface.on('line', function(line) {
        array.push(line)
    });
}

// Lectura de Archivos:

// --- Blindados --- //
readTextbyLine('blindados.txt',blindados);

// --- Aviones --- //
readTextbyLine('aviones.txt',aviones);

// --- Navíos --- //
readTextbyLine('navios.txt',navios);

// Para agregar vehículos:

function add(archivo,dato){
    fs.appendFile(archivo, dato + "\n", (err) => {
        if (err) throw err;
        console.log("Agregado correctamente!");
    });
}

const http = require('http');

// Este estilo de código lo vi siendo utilizado por una compañera y decidí implementarlo también,
// aún así ella merece todo el crédito.

const server = http.createServer( (request, response) => {

    if (request.url === '/') {

        // Formatos de la página web, casi siempre es igual.

        response.setHeader('Content-Type', 'text/html');
        response.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>')
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<meta charset="utf-8">');

        // La página web línea por línea:

        response.write('<title>Lab10</title>');
        response.write('</head><body>');
        response.write('<nav class="navbar navbar-dark bg-dark">');
        response.write('<div class="container-fluid">');
        response.write('<a class="navbar-brand" href="/">');
        response.write('<img src="https://static.wikia.nocookie.net/battlefield/images/d/d1/BF4_T-90A_Master_Dog_Tag.png" alt="" width="64" height="32" class="d-inline-block align-text-top">');
        response.write('Maquinas de Guerra');
        response.write('</a>');
        response.write('<span class="navbar-text">')
        response.write('<b>José Manuel Medina Rodríguez</b><br>Construcción de Software y Toma de Decisiones (Gpo. 402)<br>Lab10')
        response.write('</span></div></nav>')
        response.write('<div class="container ">')
        response.write('<h1 id="main">Este sitio es de Blindados, Aviones y Navíos potentes</h1><br>');
        response.write('<p>Estas son algunas máquinas de guerra:</p>');

        // BLINDADOS:
        response.write('<br><p>Blindados:</p>');
        response.write('<ul class="list-group">');
        for (let i in blindados) {
            response.write('<li class = "list-group-item list-group-item-dark">' + blindados[i] + '</li>');
        }
        console.log(blindados)
        response.write('</ul>');
        response.write('<br>');
        response.write('<a href="/nuevoBlindado"><button type="button" class="btn btn-outline-secondary">Agregar un nuevo Blindado</button></a>');
        response.write('<br><br>');

        // AVIONES:
        response.write('<br><p>Aviones:</p>');
        response.write('<ul class="list-group">');
        for (let i in aviones) {
            response.write('<li class = "list-group-item list-group-item-dark">' + aviones[i] + '</li>');
        }
        console.log(aviones)
        response.write('</ul>');
        response.write('<br>');
        response.write('<a href="/nuevoAvion"><button type="button" class="btn btn-outline-secondary">Agregar un nuevo Avión</button></a>');
        response.write('<br><br>');

        // NAVÍOS:
        response.write('<br><p>Navíos:</p>');
        response.write('<ul class="list-group">');
        for (let i in navios) {
            response.write('<li class = "list-group-item list-group-item-dark">' + navios[i] + '</li>');
        }
        console.log(navios)
        response.write('</ul>');
        response.write('<br>');
        response.write('<a href="/nuevoNavio"><button type="button" class="btn btn-outline-secondary">Agregar un nuevo Navío</button></a>');
        response.write('<br><br>');

        response.write('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>')
        response.write(' </div>')
        response.write('</body>');
        response.end();

    // Ruta BLINDADOS:
    } else if (request.url === '/nuevoBlindado' && request.method === 'GET'){
        
        response.setHeader('Content-Type', 'text/html');
        response.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>')
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<meta charset="utf-8">');

        response.write('<title>Blindados</title>');
        response.write('</head><body>');
        response.write('<nav class="navbar navbar-dark bg-dark">');
        response.write('<div class="container-fluid">');
        response.write('<a class="navbar-brand" href="/">');
        response.write('<img src="https://static.wikia.nocookie.net/battlefield/images/d/d1/BF4_T-90A_Master_Dog_Tag.png" alt="" width="64" height="32" class="d-inline-block align-text-top">');
        response.write('Maquinas de Guerra');
        response.write('</a>');
        response.write('<span class="navbar-text">')
        response.write('<b>José Manuel Medina Rodríguez</b><br>Construcción de Software y Toma de Decisiones (Gpo. 402)<br>Lab10')
        response.write('</span></div></nav>')
        response.write('<div class="container ">')
        response.write('<h1 id="main">Aquí algunos de los Blindados más geniales</h1><br>');
        response.write('<h2>Agrega un nuevo Blindado:</h2>');
        response.write('<br>');

        response.write('<form action="/nuevoBlindado" method="POST">');
        response.write('<label for="nombre">Nombre del Blindado: </label> ');
        response.write('<input type="text" id="nombre" name="nombre" placeholder="BMD-2"');
        response.write('<br><br>');
        response.write('<a href="/"><input type ="submit" value="Enviar"></a>')
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="/"><button type="button" class="btn btn-secondary">Regresar a las Máquinas de Guerra</button></a>');
        response.write('</div>')
        response.write('</body>');
        response.end();

    } else if (request.url === '/nuevoBlindado' && request.method === 'POST') {
        console.log("POST");
        const datos = [];
            request.on('data', (dato) => {
            //console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            console.log(datos);
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nuevo_dato = datos_completos.split('=')[1];
            console.log(nuevo_dato);
            blindados.push(nuevo_dato);
            add('blindados.txt',nuevo_dato);

            // Cargamos nuevamente la página original:

            response.setHeader('Content-Type', 'text/html');
            response.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>');
            response.write('<!DOCTYPE html>');
            response.write('<html lang="es-mx"><head>');
            response.write('<meta charset="utf-8">');

            // La página web línea por línea:

            response.write('<title>Lab10</title>');
            response.write('</head><body>');
            response.write('<nav class="navbar navbar-dark bg-dark">');
            response.write('<div class="container-fluid">');
            response.write('<a class="navbar-brand" href="/">');
            response.write('<img src="https://static.wikia.nocookie.net/battlefield/images/d/d1/BF4_T-90A_Master_Dog_Tag.png" alt="" width="64" height="32" class="d-inline-block align-text-top">');
            response.write('Maquinas de Guerra');
            response.write('</a>');
            response.write('<span class="navbar-text">')
            response.write('<b>José Manuel Medina Rodríguez</b><br>Construcción de Software y Toma de Decisiones (Gpo. 402)<br>Lab10')
            response.write('</span></div></nav>')
            response.write('<div class="container ">')
            response.write('<h1 id="main">Este sitio es de Blindados, Aviones y Navíos potentes</h1><br>');
            response.write('<p>Estas son algunas máquinas de guerra:</p>');

            // BLINDADOS:
            response.write('<br><p>Blindados:</p>');
            response.write('<ul class="list-group">');
            for (let i in blindados) {
                response.write('<li class = "list-group-item list-group-item-dark">' + blindados[i] + '</li>');
            }
            console.log(blindados)
            response.write('</ul>');
            response.write('<br>');
            response.write('<a href="/nuevoBlindado"><button type="button" class="btn btn-outline-secondary">Agregar un nuevo Blindado</button></a>');
            response.write('<br><br>');

            // AVIONES:
            response.write('<br><p>Aviones:</p>');
            response.write('<ul class="list-group">');
            for (let i in aviones) {
                response.write('<li class = "list-group-item list-group-item-dark">' + aviones[i] + '</li>');
            }
            console.log(aviones)
            response.write('</ul>');
            response.write('<br>');
            response.write('<a href="/nuevoAvion"><button type="button" class="btn btn-outline-secondary">Agregar un nuevo Avión</button></a>');
            response.write('<br><br>');

            // NAVÍOS:
            response.write('<br><p>Navíos:</p>');
            response.write('<ul class="list-group">');
            for (let i in navios) {
                response.write('<li class = "list-group-item list-group-item-dark">' + navios[i] + '</li>');
            }
            console.log(navios)
            response.write('</ul>');
            response.write('<br>');
            response.write('<a href="/nuevoNavio"><button type="button" class="btn btn-outline-secondary">Agregar un nuevo Navío</button></a>');
            response.write('<br><br>');

            response.write(' </div>')
            response.write('</body>');
            return response.end();
        });

    // Ruta AVIONES:
    } else if (request.url === '/nuevoAvion' && request.method === 'GET'){

        response.setHeader('Content-Type', 'text/html');
        response.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<meta charset="utf-8">');

        response.write('<title>Aviones</title>');
        response.write('</head><body>');
        response.write('<nav class="navbar navbar-dark bg-dark">');
        response.write('<div class="container-fluid">');
        response.write('<a class="navbar-brand" href="/">');
        response.write('<img src="https://static.wikia.nocookie.net/battlefield/images/d/d1/BF4_T-90A_Master_Dog_Tag.png" alt="" width="64" height="32" class="d-inline-block align-text-top">');
        response.write('Maquinas de Guerra');
        response.write('</a>');
        response.write('<span class="navbar-text">')
        response.write('<b>José Manuel Medina Rodríguez</b><br>Construcción de Software y Toma de Decisiones (Gpo. 402)<br>Lab10')
        response.write('</span></div></nav>')
        response.write('<div class="container ">')
        response.write('<h1 id="main">Aquí algunos de los Aviones más geniales</h1><br>');
        response.write('<h2>Agrega un nuevo Avión:</h2>');
        response.write('<br>');

        response.write('<form action="/nuevoAvion" method="POST">');
        response.write('<label for="nombre">Nombre del Avion: </label> ');
        response.write('<input type="text" id="nombre" name="nombre" placeholder="Su-34"');
        response.write('<br><br>');
        response.write('<a href="/"><input type ="submit" value="Enviar"></a>')
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="/"><button type="button" class="btn btn-secondary">Regresar a las Máquinas de Guerra</button></a>');
        response.write('</div>')
        response.write('</body>');
        response.end();
    } else if (request.url === '/nuevoAvion' && request.method === 'POST') {
        console.log("POST");
        const datos = [];
        request.on('data', (dato) => {
            //console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            console.log(datos);
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nuevo_dato = datos_completos.split('=')[1];
            console.log(nuevo_dato);
            aviones.push(nuevo_dato);
            add('aviones.txt',nuevo_dato);

            // Cargamos nuevamente la página original:

            response.setHeader('Content-Type', 'text/html');
            response.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>');
            response.write('<!DOCTYPE html>');
            response.write('<html lang="es-mx"><head>');
            response.write('<meta charset="utf-8">');

            // La página web línea por línea:

            response.write('<title>Lab10</title>');
            response.write('</head><body>');
            response.write('<nav class="navbar navbar-dark bg-dark">');
            response.write('<div class="container-fluid">');
            response.write('<a class="navbar-brand" href="/">');
            response.write('<img src="https://static.wikia.nocookie.net/battlefield/images/d/d1/BF4_T-90A_Master_Dog_Tag.png" alt="" width="64" height="32" class="d-inline-block align-text-top">');
            response.write('Maquinas de Guerra');
            response.write('</a>');
            response.write('<span class="navbar-text">')
            response.write('<b>José Manuel Medina Rodríguez</b><br>Construcción de Software y Toma de Decisiones (Gpo. 402)<br>Lab10')
            response.write('</span></div></nav>')
            response.write('<div class="container ">')
            response.write('<h1 id="main">Este sitio es de Blindados, Aviones y Navíos potentes</h1><br>');
            response.write('<p>Estas son algunas máquinas de guerra:</p>');

            // BLINDADOS:
            response.write('<br><p>Blindados:</p>');
            response.write('<ul class="list-group">');
            for (let i in blindados) {
                response.write('<li class = "list-group-item list-group-item-dark">' + blindados[i] + '</li>');
            }
            console.log(blindados)
            response.write('</ul>');
            response.write('<br>');
            response.write('<a href="/nuevoBlindado"><button type="button" class="btn btn-outline-secondary">Agregar un nuevo Blindado</button></a>');
            response.write('<br><br>');

            // AVIONES:
            response.write('<br><p>Aviones:</p>');
            response.write('<ul class="list-group">');
            for (let i in aviones) {
                response.write('<li class = "list-group-item list-group-item-dark">' + aviones[i] + '</li>');
            }
            console.log(aviones)
            response.write('</ul>');
            response.write('<br>');
            response.write('<a href="/nuevoAvion"><button type="button" class="btn btn-outline-secondary">Agregar un nuevo Avión</button></a>');
            response.write('<br><br>');

            // NAVÍOS:
            response.write('<br><p>Navíos:</p>');
            response.write('<ul class="list-group">');
            for (let i in navios) {
                response.write('<li class = "list-group-item list-group-item-dark">' + navios[i] + '</li>');
            }
            console.log(navios)
            response.write('</ul>');
            response.write('<br>');
            response.write('<a href="/nuevoNavio"><button type="button" class="btn btn-outline-secondary">Agregar un nuevo Navío</button></a>');
            response.write('<br><br>');

            response.write(' </div>')
            response.write('</body>');
            return response.end();
        });

    // RUTA NAVÍOS:
    } else if (request.url === '/nuevoNavio' && request.method === 'GET') {

        response.setHeader('Content-Type', 'text/html');
        response.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<meta charset="utf-8">');

        response.write('<title>Navíos</title>');
        response.write('</head><body>');
        response.write('<nav class="navbar navbar-dark bg-dark">');
        response.write('<div class="container-fluid">');
        response.write('<a class="navbar-brand" href="/">');
        response.write('<img src="https://static.wikia.nocookie.net/battlefield/images/d/d1/BF4_T-90A_Master_Dog_Tag.png" alt="" width="64" height="32" class="d-inline-block align-text-top">');
        response.write('Maquinas de Guerra');
        response.write('</a>');
        response.write('<span class="navbar-text">')
        response.write('<b>José Manuel Medina Rodríguez</b><br>Construcción de Software y Toma de Decisiones (Gpo. 402)<br>Lab10')
        response.write('</span></div></nav>')
        response.write('<div class="container ">')
        response.write('<h1 id="main">Aquí algunos de los Navíos más geniales</h1><br>');
        response.write('<h2>Agrega un nuevo Navío:</h2>');
        response.write('<br>');

        response.write('<form action="/nuevoNavio" method="POST">');
        response.write('<label for="nombre">Nombre del Navío: </label> ');
        response.write('<input type="text" id="nombre" name="nombre" placeholder="Aurora"');
        response.write('<br><br>');
        response.write('<a href="/"><input type ="submit" value="Enviar"></a>')
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="/"><button type="button" class="btn btn-secondary">Regresar a las Máquinas de Guerra</button></a>');
        response.write('</div>')
        response.write('</body>');
        response.end();

    } else if (request.url === '/nuevoNavio' && request.method === 'POST') {
        console.log("POST");
        const datos = [];
        request.on('data', (dato) => {
            //console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            console.log(datos);
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nuevo_dato = datos_completos.split('=')[1];
            console.log(nuevo_dato);
            navios.push(nuevo_dato);
            add('navios.txt',nuevo_dato);

            // Cargamos nuevamente la página original:

            response.setHeader('Content-Type', 'text/html');
            response.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>');
            response.write('<!DOCTYPE html>');
            response.write('<html lang="es-mx"><head>');
            response.write('<meta charset="utf-8">');

            // La página web línea por línea:

            response.write('<title>Lab10</title>');
            response.write('</head><body>');
            response.write('<nav class="navbar navbar-dark bg-dark">');
            response.write('<div class="container-fluid">');
            response.write('<a class="navbar-brand" href="/">');
            response.write('<img src="https://static.wikia.nocookie.net/battlefield/images/d/d1/BF4_T-90A_Master_Dog_Tag.png" alt="" width="64" height="32" class="d-inline-block align-text-top">');
            response.write('Maquinas de Guerra');
            response.write('</a>');
            response.write('<span class="navbar-text">')
            response.write('<b>José Manuel Medina Rodríguez</b><br>Construcción de Software y Toma de Decisiones (Gpo. 402)<br>Lab10')
            response.write('</span></div></nav>')
            response.write('<div class="container ">')
            response.write('<h1 id="main">Este sitio es de Blindados, Aviones y Navíos potentes</h1><br>');
            response.write('<p>Estas son algunas máquinas de guerra:</p>');

            // BLINDADOS:
            response.write('<br><p>Blindados:</p>');
            response.write('<ul class="list-group">');
            for (let i in blindados) {
                response.write('<li class = "list-group-item list-group-item-dark">' + blindados[i] + '</li>');
            }
            console.log(blindados)
            response.write('</ul>');
            response.write('<br>');
            response.write('<a href="/nuevoBlindado"><button type="button" class="btn btn-outline-secondary">Agregar un nuevo Blindado</button></a>');
            response.write('<br><br>');

            // AVIONES:
            response.write('<br><p>Aviones:</p>');
            response.write('<ul class="list-group">');
            for (let i in aviones) {
                response.write('<li class = "list-group-item list-group-item-dark">' + aviones[i] + '</li>');
            }
            console.log(aviones)
            response.write('</ul>');
            response.write('<br>');
            response.write('<a href="/nuevoAvion"><button type="button" class="btn btn-outline-secondary">Agregar un nuevo Avión</button></a>');
            response.write('<br><br>');

            // NAVÍOS:
            response.write('<br><p>Navíos:</p>');
            response.write('<ul class="list-group">');
            for (let i in navios) {
                response.write('<li class = "list-group-item list-group-item-dark">' + navios[i] + '</li>');
            }
            console.log(navios)
            response.write('</ul>');
            response.write('<br>');
            response.write('<a href="/nuevoNavio"><button type="button" class="btn btn-outline-secondary">Agregar un nuevo Navío</button></a>');
            response.write('<br><br>');

            response.write(' </div>')
            response.write('</body>');
            return response.end();
        });
    
    // CUALQUIER OTRA RUTA:
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">');
        response.write('<html><head>');
        response.write('<meta charset="utf-8">');
        response.write('<title>Lab10| Not found</title>');
        response.write('</head><body>');
        response.write('<h1 id="principal">Ese vehículo aún no se inventa, soldado!</h1>');
        response.write('</body>');
        response.end();
    }
});

server.listen(3000);
