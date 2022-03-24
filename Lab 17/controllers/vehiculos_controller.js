const path = require('path');
const Blindados = require('../models/vehiculos/blindados');
const Aviones = require('../models/vehiculos/aviones');
const Navios = require('../models/vehiculos/navios');

// --- BLINDADOS --- //
exports.get_nuevo_blindado = (request, response, next) => {
    Blindados.fetchAllBlindados()
        .then(([rows, fieldData]) => {
            response.render('nuevoBlindado', {
                blindados: rows,
                username: request.session.username ? request.session.username : '',
            })
        })
        .catch(err => console.log(err));
};

exports.post_nuevo_blindado = (request, response, next) => {    
    const blind = new Blindados(request.body.nombre, request.body.descBlindado,request.body.imagen);
    blind.save().then(() => {
        response.setHeader('Set-Cookie', 'ultimo_blindado='+blind.nombre+'; HttpOnly', 'utf8');
        response.render()
    }).catch(err => console.log(err));
};

// --- AVIONES --- //
exports.get_nuevo_avion = (request, response, next) => {
    Aviones.fetchAllAviones()
        .then(([rows, fieldData]) => {
            response.render('nuevoAvion', {
                aviones: rows,
                username: request.session.username ? request.session.username : '',
            })
        })
        .catch(err => console.log(err));
};

exports.post_nuevo_avion = (request, response, next) => {    
    const avi = new Aviones(request.body.nombre, request.body.descAvion,request.body.imagen);
    avi.save().then(() => {
        response.setHeader('Set-Cookie', 'ultimo_avion='+avi.nombre+'; HttpOnly', 'utf8');
        response.render()
    }).catch(err => console.log(err));
};

// --- NAVIOS --- // 
exports.get_nuevo_navio = (request, response, next) => {
    Navios.fetchAllNavios()
        .then(([rows, fieldData]) => {
            response.render('nuevoNavio', {
                navios: rows,
                username: request.session.username ? request.session.username : '',
            })
        })
        .catch(err => console.log(err));
};

exports.post_nuevo_navio = (request, response, next) => {    
    const nav = new Navios(request.body.nombre, request.body.descNavio,request.body.imagen);
    nav.save().then(() => {
        response.setHeader('Set-Cookie', 'ultimo_navio='+nav.nombre+'; HttpOnly', 'utf8');
        response.render()
    }).catch(err => console.log(err));
};

// --- MAIN --- //
exports.principal = (request, response, next) => {
    Blindados.fetchAllBlindados()
    .then(([blindados, fieldData]) => {
        Aviones.fetchAllAviones()
        .then(([aviones,fieldData]) =>{
            Navios.fetchAllNavios()
            .then(([navios,fieldData]) =>{
                response.render('listaVehiculos', {
                    blindados:blindados,
                    aviones:aviones,
                    navios:navios,
                    username: request.session.username ? request.session.username : '',
                    ultimo_blindado: request.cookies.ultimo_blindado ? request.cookies.ultimo_blindado : '',
                    ultimo_avion: request.cookies.ultimo_avion ? request.cookies.ultimo_avion : '',
                    ultimo_navio: request.cookies.ultimo_navio ? request.cookies.ultimo_navio : ''
                })
            }).catch(error => {
                console.log(error);
            });
        }).catch(error =>{
            console.log(error);
        });
    })
    .catch(err => console.log(err)); 

}