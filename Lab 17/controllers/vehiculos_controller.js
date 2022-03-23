const path = require('path');
const Blindados = require('../models/vehiculos/blindados');
const Aviones = require('../models/vehiculos/aviones');
const Navios = require('../models/vehiculos/navios');

// --- BLINDADOS --- //
exports.get_nuevo_blindado = (request, response, next) => {
    console.log('GET /vehiculos/nuevoBlindado');
    response.render('nuevoBlindado' , {username: request.session.username ? request.session.username : ''});
};

exports.post_nuevo_blindado = (request, response, next) => {
    console.log('POST /vehiculos/nuevoBlindado');
    console.log(request.body);
    let blind = new Blindados(request.body.nombre);
    blind.save();
    response.setHeader('Set-Cookie', 'ultimo_blindado='+blind.nombre+'; HttpOnly', 'utf8');
    response.redirect('/vehiculos');
};

// --- AVIONES --- //
exports.get_nuevo_avion = (request, response, next) => {
    console.log('GET /vehiculos/nuevoAvion');
    response.render('nuevoAvion', {username: request.session.username ? request.session.username : ''});
};

exports.post_nuevo_avion = (request, response, next) => {
    console.log('POST /vehiculos/nuevoAvion');
    console.log(request.body);
    let avi = new Aviones(request.body.nombre);
    avi.save();
    response.setHeader('Set-Cookie', 'ultimo_avion='+avi.nombre+'; HttpOnly', 'utf8');
    response.redirect('/vehiculos');
};

// --- NAVIOS --- // 
exports.get_nuevo_navio = (request, response, next) => {
    console.log('GET /vehiculos/nuevoNavio');
    response.render('nuevoNavio', {username: request.session.username ? request.session.username : ''});
};

exports.post_nuevo_navio = (request, response, next) => {
    console.log('POST /vehiculos/nuevoNavio');
    console.log(request.body);
    let nav = new Navios(request.body.nombre);
    nav.save();
    response.setHeader('Set-Cookie', 'ultimo_navio='+nav.nombre+'; HttpOnly', 'utf8');
    response.redirect('/vehiculos');
};

// --- MAIN --- //
exports.principal = (request, response, next) => {
    console.log('Main Vehiculos');
    response.render('listaVehiculos', {blindados:Blindados.fetchAllBlindados(), 
        aviones:Aviones.fetchAllAviones(), 
        navios:Navios.fetchAllNavios(), 
        username: request.session.username ? request.session.username : '',
        ultimo_blindado: request.cookies.ultimo_blindado ? request.cookies.ultimo_blindado : '',
        ultimo_avion: request.cookies.ultimo_avion ? request.cookies.ultimo_avion : '',
        ultimo_navio: request.cookies.ultimo_navio ? request.cookies.ultimo_navio : ''})
}