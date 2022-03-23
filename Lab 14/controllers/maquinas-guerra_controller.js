const path = require('path');

exports.maquinas_guerra = (request, response, next) => {
    console.log('Ruta /maquinas_guerra');
    //console.log(request.get('Cookie').split('=')[1]);
    response.render('index', {
        username: request.session.username ? request.session.username : '',
    }); 
}