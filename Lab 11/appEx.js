const fs = require('fs');
const readline = require('readline');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));


const rutas_tanques = require('./routes/tanques.routes');
const rutas_jets = require('./routes/jets.routes');

//Ruta Tanques
app.use('/tanques', rutas_tanques);

//Ruta Jets
app.use('/jets', rutas_jets);

//Página principal
app.use((request, response,next) => {

    let respuesta = '';//('Content-Type', 'text/html');
    respuesta = respuesta +('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">')
    respuesta = respuesta +('<!DOCTYPE html>');
    respuesta = respuesta +('<html lang="es-mx"><head>');
    respuesta = respuesta +('<meta charset="utf-8">');
    respuesta = respuesta +('<title>Lab11</title>');
    respuesta = respuesta +('</head><body>');
    respuesta = respuesta +('<nav class="navbar navbar-dark bg-dark">')
    respuesta = respuesta +('<div class="container-fluid">')
    respuesta = respuesta +('<a class="navbar-brand" href="/">')
    respuesta = respuesta +('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Military_Symbol_-_Friendly_Unit_%28Solid_Light_1.5x1_Frame%29-_Armour_%28NATO_APP-6%29.svg/600px-Military_Symbol_-_Friendly_Unit_%28Solid_Light_1.5x1_Frame%29-_Armour_%28NATO_APP-6%29.svg.png" alt="" width="60" height="40" class="d-inline-block align-text-top">')
    respuesta = respuesta +('MEJORES')
    respuesta = respuesta +('</a>')
    respuesta = respuesta +('<span class="navbar-text">')
    respuesta = respuesta +('<b>José Manuel Medina A01706212</b><br>Construcción de software y toma de decisiones (Gpo 401)<br>Lab11')
    respuesta = respuesta +('</span></div></nav>')
    respuesta = respuesta +(' <div class="container ">')
    respuesta = respuesta +('<h1 id="principal">Este sitio es contiene los mejores Tanques y Jets </h1><br>');
    respuesta = respuesta +('<p>Eston son los MEJORES:</p>');
    
    respuesta = respuesta +('<br>');
    respuesta = respuesta +('<p>Tanques (MBTs y BTRs):</p>');
    respuesta = respuesta +('<a href="/tanques"><button type="button" class="btn btn-outline-secondary">Mejores Tanques y Blindados</button></a>');
    respuesta = respuesta +('<br><br>');
    respuesta = respuesta +('<p>Jets (F,CAS,B):</p>');
    respuesta = respuesta +('<a href="/jets"><button type="button" class="btn btn-outline-secondary">Mejores jets de combate</button></a>');
    respuesta = respuesta +('<br><br>');
    respuesta = respuesta + (' </div>')
    respuesta = respuesta + ('</body>');
    
    response.send(respuesta)
    next();
    
});

app.use((request, response,next) => {
    console.log("Error 404")
    response.statusCode = 404;
    response.send("Este top no existe, lo sentimos :("); //Manda la respuesta
});

app.listen(3000);