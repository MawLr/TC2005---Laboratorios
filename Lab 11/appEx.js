const fs = require('fs');
const readline = require('readline');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutas_vehiculos = require('./routes/vehiculos.routes');
const rutas_armas = require('./routes/armas.routes');

//Ruta para páginas de Vehículos (Blindados, aviones, navíos):
app.use('/vehiculos', rutas_vehiculos);

//Ruta para páginas de armas:
app.use('/armas', rutas_armas);

//Página principal:

app.use((request, response,next) => {
    let answer = '';
    // Formatos de la página web, casi siempre es igual.

    answer = answer +('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>');
    answer = answer +('<!DOCTYPE html>');
    answer = answer +('<html lang="es-mx"><head>');
    answer = answer + ('<meta charset="utf-8">');

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
    answer = answer +('<h1 id="main">Este sitio es de Blindados, Aviones, Navíos potentes y armas</h1><br>');
    answer = answer +('<p>Estas son algunas máquinas de guerra:</p>');

    respuesta = respuesta +('<br>');
    respuesta = respuesta +('<p>Vehículos (Blindados, aviones y navíos):</p>');
    respuesta = respuesta +('<a href="/vehiculos"><button type="button" class="btn btn-outline-secondary">Vehículos</button></a>');
    respuesta = respuesta +('<br><br>');
    respuesta = respuesta +('<p>Armas:</p>');
    respuesta = respuesta +('<a href="/armas"><button type="button" class="btn btn-outline-secondary">Armas</button></a>');
    respuesta = respuesta +('<br><br>');
    respuesta = respuesta + (' </div>')
    respuesta = respuesta + ('</body>');
    
    response.send(respuesta)
    next();
});

app.use((request, response,next) => {
    console.log("Error 404")
    response.statusCode = 404;
    response.send("Esa arma o vehículo aún no existe!"); //Manda la respuesta
});

app.listen(3000);