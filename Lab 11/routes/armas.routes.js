const express = require('express');
const router = express.Router();

const fs = require('fs');
const readline = require('readline');

const armas = [];
const manufactureros = [];

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

// --- Armas --- //
readTextbyLine('maquinas-guerra/armas.txt',armas);

// --- Manufactureros --- //
readTextbyLine('maquinas-guerra/manufactureros.txt',manufactureros);

// Para agregar Armas o Manufactureros:

function add(archivo,dato){
    fs.appendFile(archivo, dato + "\n", (err) => {
        if (err) throw err;
        console.log("Agregado correctamente!");
    });
}

// ARMAS:
router.get('/nuevaArma', (request, response, next) => {
    console.log('GET /nuevaArma');

    let answer = '';
    
    answer = answer +('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>')
    answer = answer +('<!DOCTYPE html>');
    answer = answer +('<html lang="es-mx"><head>');
    answer = answer +('<meta charset="utf-8">');

    answer = answer +('<title>Armas</title>');
    answer = answer +('</head><body>');
    answer = answer +('<nav class="navbar navbar-dark bg-dark">');
    answer = answer +('<div class="container-fluid">');
    answer = answer +('<a class="navbar-brand" href="/armas">');
    answer = answer +('<img src="https://static.wikia.nocookie.net/battlefield/images/d/d1/BF4_T-90A_Master_Dog_Tag.png" alt="" width="64" height="32" class="d-inline-block align-text-top">');
    answer = answer +('Maquinas de Guerra');
    answer = answer +('</a>');
    answer = answer +('<span class="navbar-text">')
    answer = answer +('<b>José Manuel Medina Rodríguez</b><br>Construcción de Software y Toma de Decisiones (Gpo. 402)<br>Lab10')
    answer = answer +('</span></div></nav>')
    answer = answer +('<div class="container ">')
    answer = answer +('<h1 id="main">Aquí algunas de las Armas más geniales</h1><br>');
    answer = answer +('<h2>Agrega una nueva Arma:</h2>');
    answer = answer +('<br>');

    answer = answer +('<form action="/armas/nuevaArma" method="POST">');
    answer = answer +('<label for="nombre">Nombre del Arma: </label> ');
    answer = answer +('<input type="text" id="nombre" name="nombre" placeholder="AK-12"');
    answer = answer +('<br><br>');
    answer = answer +('<a href="/armas"><input type ="submit" value="Enviar"></a>')
    answer = answer +('</form>');
    answer = answer +('<br><br>');
    answer = answer +('<a href="/armas"><button type="button" class="btn btn-secondary">Regresar a las Máquinas de Guerra</button></a>');
    answer = answer +('</div>')
    answer = answer +('</body>');
    response.send(answer);
});

router.post('/nuevaArma', (request, response, next) => {
    console.log('POST /nuevaArma');;
    let nuevo_dato = request.body.nombre;
    console.log(nuevo_dato)
    armas.push(nuevo_dato);
    console.log(armas)
    response.redirect('/armas');
    add("maquinas-guerra/armas.txt", nuevo_dato )
});

// MANUFACTUREROS:
router.get('/nuevoManufacturero', (request, response, next) => {
    console.log('GET /nuevoManufacturero');

    let answer = '';
    
    answer = answer +('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>')
    answer = answer +('<!DOCTYPE html>');
    answer = answer +('<html lang="es-mx"><head>');
    answer = answer +('<meta charset="utf-8">');

    answer = answer +('<title>Armas</title>');
    answer = answer +('</head><body>');
    answer = answer +('<nav class="navbar navbar-dark bg-dark">');
    answer = answer +('<div class="container-fluid">');
    answer = answer +('<a class="navbar-brand" href="/armas">');
    answer = answer +('<img src="https://static.wikia.nocookie.net/battlefield/images/d/d1/BF4_T-90A_Master_Dog_Tag.png" alt="" width="64" height="32" class="d-inline-block align-text-top">');
    answer = answer +('Maquinas de Guerra');
    answer = answer +('</a>');
    answer = answer +('<span class="navbar-text">')
    answer = answer +('<b>José Manuel Medina Rodríguez</b><br>Construcción de Software y Toma de Decisiones (Gpo. 402)<br>Lab10')
    answer = answer +('</span></div></nav>')
    answer = answer +('<div class="container ">')
    answer = answer +('<h1 id="main">Aquí algunos de los mejores manufactureros de armas!</h1><br>');
    answer = answer +('<h2>Agrega una nueva Arma:</h2>');
    answer = answer +('<br>');

    answer = answer +('<form action="/armas/nuevoManufacturero" method="POST">');
    answer = answer +('<label for="nombre">Nombre del Manufacturero: </label> ');
    answer = answer +('<input type="text" id="nombre" name="nombre" placeholder="Kalashnikov"');
    answer = answer +('<br><br>');
    answer = answer +('<a href="/armas"><input type ="submit" value="Enviar"></a>')
    answer = answer +('</form>');
    answer = answer +('<br><br>');
    answer = answer +('<a href="/armas"><button type="button" class="btn btn-secondary">Regresar a las Máquinas de Guerra</button></a>');
    answer = answer +('</div>')
    answer = answer +('</body>');
    response.send(answer);
});

router.post('/nuevoManufacturero', (request, response, next) => {
    console.log('POST /nuevoManufacturero');;
    let nuevo_dato = request.body.nombre;
    console.log(nuevo_dato)
    manufactureros.push(nuevo_dato);
    console.log(manufactureros)
    response.redirect('/armas');
    add("maquinas-guerra/manufactureros.txt", nuevo_dato )
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
    answer = answer +('<h1 id="main">Este sitio es de Armas y Manufactureros de armas</h1><br>');
    answer = answer +('<p>Estas son algunas máquinas de guerra:</p>');

    // ARMAS:
    answer = answer +('<br><p>Armas:</p>');
    answer = answer +('<ul class="list-group">');
    for (let i in armas) {
        answer = answer +('<li class = "list-group-item list-group-item-dark">' + armas[i] + '</li>');
    }
    console.log(armas)
    answer = answer +('</ul>');
    answer = answer +('<br>');
    answer = answer +('<a href="armas/nuevaArma"><button type="button" class="btn btn-outline-secondary">Agregar una nueva Arma</button></a>');
    answer = answer +('<br><br>');

    // MANUFACTUREROS:
    answer = answer +('<br><p>Manufactureros:</p>');
    answer = answer +('<ul class="list-group">');
    for (let i in manufactureros) {
        answer = answer +('<li class = "list-group-item list-group-item-dark">' + manufactureros[i] + '</li>');
    }
    console.log(aviones)
    answer = answer +('</ul>');
    answer = answer +('<br>');
    answer = answer +('<a href="armas/nuevoManufacturero"><button type="button" class="btn btn-outline-secondary">Agregar un nuevo Manufacturero</button></a>');
    answer = answer +('<br><br>');

    response.send(answer);
});

module.exports = router;