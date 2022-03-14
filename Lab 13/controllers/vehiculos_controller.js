const path = require('path');
const Blindados = require('../models/vehiculos/blindados');
const Aviones = require('../models/vehiculos/aviones');
const Navios = require('../models/vehiculos/navios');

// --- BLINDADOS --- //
exports.get_nuevo_blindado = (request, response, next) => {
    console.log('GET /vehiculos/nuevoBlindado');
    response.render('nuevoBlindado');
};

exports.post_nuevo_blindado = (request, response, next) => {
    console.log('POST /vehiculos/nuevoBlindado');
    console.log(request.body);
    let blind = new Blindados(request.body.nombre);
    blind.save();
    response.redirect('/vehiculos');
};

// --- AVIONES --- //
exports.get_nuevo_avion = (request, response, next) => {
    console.log('GET /vehiculos/nuevoAvion');
    response.render('nuevoAvion');
};

exports.post_nuevo_avion = (request, response, next) => {
    console.log('POST /vehiculos/nuevoAvion');
    console.log(request.body);
    let avi = new Aviones(request.body.nombre);
    avi.save();
    response.redirect('/vehiculos');
};

// --- NAVIOS --- // 
exports.get_nuevo_navio = (request, response, next) => {
    console.log('GET /vehiculos/nuevoNavio');
    response.render('nuevoNavio');
};

exports.post_nuevo_navio = (request, response, next) => {
    console.log('POST /vehiculos/nuevoNavio');
    console.log(request.body);
    let nav = new Navios(request.body.nombre);
    nav.save();
    response.redirect('/vehiculos');
};

// --- MAIN --- //
exports.principal = (request, response, next) => {
    console.log('Main Vehiculos');
    response.render('listaVehiculos', {blindados: Blindados.fetchAllBlindados(), aviones: Aviones.fetchAllAviones(), navios: Navios.fetchAllNavios()})
}