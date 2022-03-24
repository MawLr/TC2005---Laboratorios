const path = require('path');
const Armas = require('../models/armas/armas');
const Manufactureros = require('../models/armas/manufactureros');

// --- ARMAS --- //
exports.get_nueva_arma = (request, response, next) => {
    Armas.fetchAllArmas()
        .then(([rows, fieldData]) => {
            response.render('nuevaArma', {
                armas: rows,
                username: request.session.username ? request.session.username : '',
            })
        })
        .catch(err => console.log(err));
};

exports.post_nueva_arma = (request, response, next) => {    
    const arma = new Armas(request.body.nombre, request.body.descArma,request.body.imagen);
    arma.save().then(() => {
        response.setHeader('Set-Cookie', 'ultima_arma='+arma.nombre+'; HttpOnly', 'utf8');
        response.render()
    }).catch(err => console.log(err));
};

exports.getArma = (request, response, next) => {
    console.log(request.params.idArma);
    console.log(request.cookies);

    Armas.fetchOneArma(request.params.idArma)
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.render('arma', {
                armas: rows,
                username: request.session.username ? request.session.username : '',
                ultima_arma: request.cookies.ultima_arma ? request.cookies.ultima_arma : '',
            }); 
        })
        .catch(err => {
            console.log(err);
        }); 
}

// --- MANUFACTUREROS --- //
exports.get_nuevo_man = (request, response, next) => {
    Manufactureros.fetchAllMan()
        .then(([rows, fieldData]) => {
            response.render('nuevoManufacturero', {
                manufactureros: rows,
                username: request.session.username ? request.session.username : '',
            })
        })
        .catch(err => console.log(err));
};

exports.post_nuevo_man = (request, response, next) => {    
    const man = new Manufactureros(request.body.nombre, request.body.descMan,request.body.imagen);
    man.save().then(() => {
        response.setHeader('Set-Cookie', 'ultimo_man='+man.nombre+'; HttpOnly', 'utf8');
        response.render()
    }).catch(err => console.log(err));
};

exports.getMan = (request, response, next) => {
    console.log(request.params.idMan);
    console.log(request.cookies);

    Manufactureros.fetchOneMan(request.params.idMan)
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.render('arma', {
                manufactureros: rows,
                username: request.session.username ? request.session.username : '',
                ultimo_man: request.cookies.ultimo_man ? request.cookies.ultimo_man : '',
            }); 
        })
        .catch(err => {
            console.log(err);
        }); 
}

// --- MAIN --- //
exports.principal = (request, response, next) => {
    console.log('Main Armas');
    Armas.fetchAllArmas()
        .then(([armas, fieldData]) => {
            Manufactureros.fetchAllMan()
            .then(([manufactureros,fieldData]) => {
                response.render('listaArmas', {
                    armas:armas,
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