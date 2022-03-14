const express = require('express');
const router = express.Router();

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
readTextbyLine('maquinas-guerra/blindados.txt',blindados);

// --- Aviones --- //
readTextbyLine('maquinas-guerra/aviones.txt',aviones);

// --- Navíos --- //
readTextbyLine('maquinas-guerra/navios.txt',navios);

// Para agregar vehículos:

function add(archivo,dato){
    fs.appendFile(archivo, dato + "\n", (err) => {
        if (err) throw err;
        console.log("Agregado correctamente!");
    });
}

// BLINDADOS:
router.get('/nuevoBlindado', (request, response, next) => {
    console.log('GET /nuevoBlindado');

    let answer = '';
    
    answer = answer +('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>')
    answer = answer +('<!DOCTYPE html>');
    answer = answer +('<html lang="es-mx"><head>');
    answer = answer +('<meta charset="utf-8">');

    answer = answer +('<title>Blindados</title>');
    answer = answer +('</head><body>');
    answer = answer +('<nav class="navbar navbar-dark bg-dark">');
    answer = answer +('<div class="container-fluid">');
    answer = answer +('<a class="navbar-brand" href="/vehiculos">');
    answer = answer +('<img src="https://static.wikia.nocookie.net/battlefield/images/d/d1/BF4_T-90A_Master_Dog_Tag.png" alt="" width="64" height="32" class="d-inline-block align-text-top">');
    answer = answer +('Maquinas de Guerra');
    answer = answer +('</a>');
    answer = answer +('<span class="navbar-text">')
    answer = answer +('<b>José Manuel Medina Rodríguez</b><br>Construcción de Software y Toma de Decisiones (Gpo. 402)<br>Lab10')
    answer = answer +('</span></div></nav>')
    answer = answer +('<div class="container ">')
    answer = answer +('<h1 id="main">Aquí algunos de los Blindados más geniales</h1><br>');
    answer = answer +('<h2>Agrega un nuevo Blindado:</h2>');
    answer = answer +('<br>');

    answer = answer +('<form action="/vehiculos/nuevoBlindado" method="POST">');
    answer = answer +('<label for="nombre">Nombre del Blindado: </label> ');
    answer = answer +('<input type="text" id="nombre" name="nombre" placeholder="BMD-2"');
    answer = answer +('<br><br>');
    answer = answer +('<a href="/vehiculos"><input type ="submit" value="Enviar"></a>')
    answer = answer +('</form>');
    answer = answer +('<br><br>');
    answer = answer +('<a href="/vehiculos"><button type="button" class="btn btn-secondary">Regresar a las Máquinas de Guerra</button></a>');
    answer = answer +('</div>')
    answer = answer +('</body>');
    response.send(answer);
});

router.post('/nuevoBlindado', (request, response, next) => {
    console.log('POST /nuevoBlindado');;
    let nuevo_dato = request.body.nombre;
    console.log(nuevo_dato)
    blindados.push(nuevo_dato);
    console.log(blindados)
    response.redirect('/vehiculos');
    add("maquinas-guerra/blindados.txt", nuevo_dato )
});

// AVIONES:
router.get('/nuevoAvion', (request, response, next) => {
    console.log('GET /nuevoAvion');

    let answer = '';

    answer = answer +('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>')
    answer = answer +('<!DOCTYPE html>');
    answer = answer +('<html lang="es-mx"><head>');
    answer = answer +('<meta charset="utf-8">');

    answer = answer +('<title>Aviones</title>');
    answer = answer +('</head><body>');
    answer = answer +('<nav class="navbar navbar-dark bg-dark">');
    answer = answer +('<div class="container-fluid">');
    answer = answer +('<a class="navbar-brand" href="/vehiculos">');
    answer = answer +('<img src="https://static.wikia.nocookie.net/battlefield/images/d/d1/BF4_T-90A_Master_Dog_Tag.png" alt="" width="64" height="32" class="d-inline-block align-text-top">');
    answer = answer +('Maquinas de Guerra');
    answer = answer +('</a>');
    answer = answer +('<span class="navbar-text">')
    answer = answer +('<b>José Manuel Medina Rodríguez</b><br>Construcción de Software y Toma de Decisiones (Gpo. 402)<br>Lab10')
    answer = answer +('</span></div></nav>')
    answer = answer +('<div class="container ">')
    answer = answer +('<h1 id="main">Aquí algunos de los Aviones más geniales</h1><br>');
    answer = answer +('<h2>Agrega un nuevo Avión:</h2>');
    answer = answer +('<br>');

    answer = answer +('<form action="/vehiculos/nuevoAvion" method="POST">');
    answer = answer +('<label for="nombre">Nombre del Avion: </label> ');
    answer = answer +('<input type="text" id="nombre" name="nombre" placeholder="Su-34"');
    answer = answer +('<br><br>');
    answer = answer +('<a href="/vehiculos"><input type ="submit" value="Enviar"></a>')
    answer = answer +('</form>');
    answer = answer +('<br><br>');
    answer = answer +('<a href="/vehiculos"><button type="button" class="btn btn-secondary">Regresar a las Máquinas de Guerra</button></a>');
    answer = answer +('</div>')
    answer = answer +('</body>');
    response.send(answer);
});

router.post('/nuevoAvion', (request, response, next) => {
    console.log('POST /nuevoAvion');;
    let nuevo_dato = request.body.nombre;
    console.log(nuevo_dato)
    aviones.push(nuevo_dato);
    console.log(aviones)
    response.redirect('/vehiculos');
    add("maquinas-guerra/aviones.txt", nuevo_dato )
});

// NAVÍOS:
router.get('/nuevoNavio', (request, response, next) => {
    console.log('GET /nuevoNavio');

    let answer = '';

    answer = answer +('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>')
    answer = answer +('<!DOCTYPE html>');
    answer = answer +('<html lang="es-mx"><head>');
    answer = answer +('<meta charset="utf-8">');

    answer = answer +('<title>Navíos</title>');
    answer = answer +('</head><body>');
    answer = answer +('<nav class="navbar navbar-dark bg-dark">');
    answer = answer +('<div class="container-fluid">');
    answer = answer +('<a class="navbar-brand" href="/vehiculos">');
    answer = answer +('<img src="https://static.wikia.nocookie.net/battlefield/images/d/d1/BF4_T-90A_Master_Dog_Tag.png" alt="" width="64" height="32" class="d-inline-block align-text-top">');
    answer = answer +('Maquinas de Guerra');
    answer = answer +('</a>');
    answer = answer +('<span class="navbar-text">')
    answer = answer +('<b>José Manuel Medina Rodríguez</b><br>Construcción de Software y Toma de Decisiones (Gpo. 402)<br>Lab10')
    answer = answer +('</span></div></nav>')
    answer = answer +('<div class="container ">')
    answer = answer +('<h1 id="main">Aquí algunos de los Navíos más geniales</h1><br>');
    answer = answer +('<h2>Agrega un nuevo Navío:</h2>');
    answer = answer +('<br>');

    answer = answer +('<form action="/vehiculos/nuevoNavio" method="POST">');
    answer = answer +('<label for="nombre">Nombre del Navío: </label> ');
    answer = answer +('<input type="text" id="nombre" name="nombre" placeholder="Pyotr Veiliki"');
    answer = answer +('<br><br>');
    answer = answer +('<a href="/vehiculos"><input type ="submit" value="Enviar"></a>')
    answer = answer +('</form>');
    answer = answer +('<br><br>');
    answer = answer +('<a href="/vehiculos"><button type="button" class="btn btn-secondary">Regresar a las Máquinas de Guerra</button></a>');
    answer = answer +('</div>')
    answer = answer +('</body>');
    response.send(answer);
});

router.post('/nuevoNavio', (request, response, next) => {
    console.log('POST /nuevoNavio');;
    let nuevo_dato = request.body.nombre;
    console.log(nuevo_dato)
    navios.push(nuevo_dato);
    console.log(navios)
    response.redirect('/vehiculos');
    add("maquinas-guerra/navios.txt", nuevo_dato )
});

// MAIN:
router.use('/', (request, response, next) => {
    console.log('Main');

    let answer = '';

    answer = answer +('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>');
    answer = answer +('<!DOCTYPE html>');
    answer = answer +('<html lang="es-mx"><head>');
    answer = answer +('<meta charset="utf-8">');

    // La página web línea por línea:

    answer = answer +('<title>Lab10</title>');
    answer = answer +('</head><body>');
    answer = answer +('<nav class="navbar navbar-dark bg-dark">');
    answer = answer +('<div class="container-fluid">');
    answer = answer +('<a class="navbar-brand" href="/">');
    answer = answer +('<img src="https://static.wikia.nocookie.net/battlefield/images/d/d1/BF4_T-90A_Master_Dog_Tag.png" alt="" width="64" height="32" class="d-inline-block align-text-top">');
    answer = answer +('Maquinas de Guerra');
    answer = answer +('</a>');
    answer = answer +('<span class="navbar-text">')
    answer = answer +('<b>José Manuel Medina Rodríguez</b><br>Construcción de Software y Toma de Decisiones (Gpo. 402)<br>Lab10')
    answer = answer +('</span></div></nav>')
    answer = answer +('<div class="container ">')
    answer = answer +('<h1 id="main">Este sitio es de Blindados, Aviones y Navíos potentes</h1><br>');
    answer = answer +('<p>Estas son algunas máquinas de guerra:</p>');

    // BLINDADOS:
    answer = answer +('<br><p>Blindados:</p>');
    answer = answer +('<ul class="list-group">');
    for (let i in blindados) {
        answer = answer +('<li class = "list-group-item list-group-item-dark">' + blindados[i] + '</li>');
    }
    console.log(blindados)
    answer = answer +('</ul>');
    answer = answer +('<br>');
    answer = answer +('<a href="/nuevoBlindado"><button type="button" class="btn btn-outline-secondary">Agregar un nuevo Blindado</button></a>');
    answer = answer +('<br><br>');

    // AVIONES:
    answer = answer +('<br><p>Aviones:</p>');
    answer = answer +('<ul class="list-group">');
    for (let i in aviones) {
        answer = answer +('<li class = "list-group-item list-group-item-dark">' + aviones[i] + '</li>');
    }
    console.log(aviones)
    answer = answer +('</ul>');
    answer = answer +('<br>');
    answer = answer +('<a href="/nuevoAvion"><button type="button" class="btn btn-outline-secondary">Agregar un nuevo Avión</button></a>');
    answer = answer +('<br><br>');

    // NAVÍOS:
    answer = answer +('<br><p>Navíos:</p>');
    answer = answer +('<ul class="list-group">');
    for (let i in navios) {
        answer = answer +('<li class = "list-group-item list-group-item-dark">' + navios[i] + '</li>');
    }
    console.log(navios)
    answer = answer +('</ul>');
    answer = answer +('<br>');
    answer = answer +('<a href="/nuevoNavio"><button type="button" class="btn btn-outline-secondary">Agregar un nuevo Navío</button></a>');
    answer = answer +('<br><br>');

    answer = answer +('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>');
    answer = answer +(' </div>');
    answer = answer +('</body>');
    response.send(answer);
});

module.exports = router;