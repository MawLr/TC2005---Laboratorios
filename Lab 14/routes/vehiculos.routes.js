const express = require('express');
const router = express.Router();

const fs = require('fs');

var blindados = [];
var aviones = [];
var navios = [];

// Lectura de BLINDADOS:
fs.readFile('./maquinas-guerra/blindados.json', (err, data) => {
    if (err) throw err;
    blindados = JSON.parse(data);
    console.log(blindados)
});

// Lectura de AVIONES:
fs.readFile('./maquinas-guerra/aviones.json', (err, data) => {
    if (err) throw err;
    aviones = JSON.parse(data);
    console.log(aviones)
});

// Lectura de NAVÍOS:
fs.readFile('./maquinas-guerra/navios.json', (err, data) => {
    if (err) throw err;
    navios = JSON.parse(data);
    console.log(navios)
});


// --- BLINDADOS --- //
router.get('/nuevoBlindado', (request, response, next) => {
    console.log('GET /nuevoBlindado');
    response.render('nuevoBlindado');
});

router.post('/nuevoBlindado', (request, response, next) => {
    console.log('POST /nuevoBlindado');;
    console.log(request.body);
    blindados.push(request.body);
    let blind = JSON.stringify(blindados);
    fs.writeFileSync('./maquinas-guerra/blindados.json', blind, 'utf8');
    response.redirect('/vehiculos');
});

// --- AVIONES --- //
router.get('/nuevoAvion', (request, response, next) => {
    console.log('GET /nuevoAvion');
    response.render('nuevoAvion');
});

router.post('/nuevoAvion', (request, response, next) => {
    console.log('POST /nuevoAvion');;
    console.log(request.body);
    aviones.push(request.body);
    let avi = JSON.stringify(aviones);
    fs.writeFileSync('./maquinas-guerra/aviones.json', avi, 'utf8');
    response.redirect('/vehiculos');
});

// --- NAVIOS --- //
router.get('/nuevoNavio', (request, response, next) => {
    console.log('GET /nuevoNavio');
    response.render('nuevoNavio');
});

router.post('/nuevoNavio', (request, response, next) => {
    console.log('POST /nuevoNavio');;
    console.log(request.body);
    navios.push(request.body);
    let nav = JSON.stringify(navios);
    fs.writeFileSync('./maquinas-guerra/navios.json', nav, 'utf8');
    response.redirect('/vehiculos');
});

router.use('/', (request, response, next) => {
    console.log('Main');
    response.render('listaVehiculos', {blindados:blindados, aviones:aviones, navios:navios})
});

module.exports = router;