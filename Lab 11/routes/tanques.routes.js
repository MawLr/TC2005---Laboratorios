const express = require('express');

const router = express.Router();

const tanques = ["T-64", "T-72", "T-90"];

router.get('/', (request, response, next) => {
    console.log(request.body);
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Tanques</title><meta charset="utf-8"></meta></head><body><h1>Bienvenido a este sitio de Tanques chidos</h1><main><h2>Aquí se habla de Tanques</h2><p>Estos son nuestros Tanques:</p><ol>';
    for (let i in tanques) {
        respuesta += '<li>' + tanques[i] + '</li>';
    }
    respuesta += '</ol><a href="/tanques/nuevo">Agregar un nuevo Tanque</a></main></body></html>';
    response.send(respuesta);
});

router.get('/nuevo', (request, response, next) => {
    console.log(request.body);
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Tanques</title><meta charset="utf-8"></meta></head><body><h1>Bienvenido a este sitio de Tanques</h1><main><h2>Aquí se habla de nuevos Tanques</h2><p>Ingresa los datos del nuevo Tanque:</p><form action="/tanques/nuevo" method="POST"><label for="nombre">Nombre del nuevo Tanque: </label><input type="text" name="nombre" required><input type="submit" value="Enviar"></form><br><br><a href="/tanques/">Regresar a la lista de Tanques</a></br></body></html>';
    response.send(respuesta);
});

router.post('/nuevo', (request, response, next) => {
    console.log(request.body);
    caballos.push(request.body.nombre);
    console.log(caballos);
    response.redirect('/tanques/');
});

module.exports = router;