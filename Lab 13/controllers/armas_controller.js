const path = require('path');
const Armas = require('../models/armas/armas');
const Manufactureros = require('../models/armas/manufactureros');

// --- ARMAS --- //
exports.get_nueva_arma = (request, response, next) => {
    console.log('GET /armas/nuevaArma');
    response.render('nuevaArma');
};

exports.post_nueva_arma = (request, response, next) => {
    console.log('POST /armas/nuevaArma');
    console.log(request.body);
    let arm = new Armas(request.body.nombre);
    arm.save();
    response.redirect('/armas');
};

// --- MANUFACTUREROS --- //
exports.get_nuevo_manufacturero = (request, response, next) => {
    console.log('GET /armas/nuevoManufacturero');
    response.render('nuevoManufacturero');
};

exports.post_nuevo_manufacturero = (request, response, next) => {
    console.log('POST /armas/nuevoManufacturero');
    console.log(request.body);
    let man = new Manufactureros(request.body.nombre);
    man.save();
    response.redirect('/armas');
};

// --- MAIN --- //
exports.principal = (request, response, next) => {
    console.log('Main Armas');
    response.render('listaArmas', {armas: Armas.fetchAllArmas(), manufactureros: Manufactureros.fetchAllManufactureros()})
}