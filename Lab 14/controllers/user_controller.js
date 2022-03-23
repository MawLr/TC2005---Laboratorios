const User = require('../models/user');

exports.get_login = (request, response, next) => {
    response.render('login', {
        username: request.session.username ? request.session.username : '',
        info: ''
    }); 
};

exports.maquinas_guerra = (request, response, next) => {
    response.render('index', {
        username: request.session.username ? request.session.username : '',
        info: ''
    }); 
};

exports.login = (request, response, next) => {
    if (User.login(request.body.username, request.body.password)) {
        request.session.username = request.body.username;
        response.redirect('/users/maquinas_guerra'); 
    } else {
        response.redirect('/users/login'); 
    }
    
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.root = (request, response, next) => {
    response.redirect('/users/login'); 
};