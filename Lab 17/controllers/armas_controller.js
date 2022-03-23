const path = require('path');
const Armas = require('../models/armas/armas');
const Manufactureros = require('../models/armas/manufactureros');

// --- ARMAS --- //
exports.get_nueva_arma = (request, response, next) => {
    console.log('GET /armas/nuevaArma');
    response.render('nuevaArma', {username: request.session.username ? request.session.username : ''});
};

exports.post_nueva_arma = (request, response, next) => {
    console.log('POST /armas/nuevaArma');
    console.log(request.body);
    let arm = new Armas(request.body.nombre);
    arm.save();
    response.setHeader('Set-Cookie', 'ultima_arma='+arm.nombre+'; HttpOnly', 'utf8');
    response.redirect('/armas');
};

// --- MANUFACTUREROS --- //
exports.get_nuevo_manufacturero = (request, response, next) => {
    console.log('GET /armas/nuevoManufacturero');
    response.render('nuevoManufacturero', {username: request.session.username ? request.session.username : ''});
};

exports.post_nuevo_manufacturero = (request, response, next) => {
    console.log('POST /armas/nuevoManufacturero');
    console.log(request.body);
    let man = new Manufactureros(request.body.nombre);
    man.save();
    response.setHeader('Set-Cookie', 'ultimo_man='+man.nombre+'; HttpOnly', 'utf8');
    response.redirect('/armas');
};

// --- MAIN --- //
exports.principal = (request, response, next) => {
    console.log('Main Armas');
    Armas.fetchAllArmas()
        .then(([armas, fieldData]) => {
            Manufactureros.fetchAllManufactureros()
            .then(([manufactureros,fieldData]) => {
                response.render('listaArmas', {
                    armas: armas,
                    manufactureros:manufactureros,
                    username: request.session.username ? request.session.username : '',
                    ultima_arma: request.cookies.ultima_arma ? request.cookies.ultima_arma : '',
                    ultimo_man: request.cookies.ultimo_man ? request.cookies.ultimo_man : ''
                })
            }).catch(error => {
                console.log(error);
            });
        }).catch(error =>{
            console.log(error);
        });
    }