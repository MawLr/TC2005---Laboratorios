const express = require('express');
const router = express.Router();

const fs = require('fs');

var armas = [];
var manufactureros = [];

// Lectura de ARMAS:
fs.readFile('./maquinas-guerra/armas.json', (err, data) => {
    if (err) throw err;
    armas = JSON.parse(data);
    console.log(armas)
});

// Lectura de MANUFACTUREROS:
fs.readFile('./maquinas-guerra/manufactureros.json', (err, data) => {
    if (err) throw err;
    manufactureros = JSON.parse(data);
    console.log(manufactureros)
});


// --- ARMAS --- //
router.get('/nuevaArma', (request, response, next) => {
    console.log('GET /nuevaArma');
    response.render('nuevaArma');
});

router.post('/nuevaArma', (request, response, next) => {
    console.log('POST /nuevaArma');;
    console.log(request.body);
    armas.push(request.body);
    let blind = JSON.stringify(armas);
    fs.writeFileSync('./maquinas-guerra/armas.json', blind, 'utf8');
    response.redirect('/armas');
});

// --- MANUFACTUREROS --- //
router.get('/nuevoManufacturero', (request, response, next) => {
    console.log('GET /nuevoManufacturero');
    response.render('nuevoManufacturero');
});

router.post('/nuevoManufacturero', (request, response, next) => {
    console.log('POST /nuevoManufacturero');;
    console.log(request.body);
    manufactureros.push(request.body);
    let avi = JSON.stringify(manufactureros);
    fs.writeFileSync('./maquinas-guerra/manufactureros.json', avi, 'utf8');
    response.redirect('/armas');
});


// MAIN
router.use('/', (request, response, next) => {
    console.log('Main');
    response.render('listaArmas', {armas:armas, manufactureros:manufactureros})
});

module.exports = router;