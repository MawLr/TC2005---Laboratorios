const path = require('path');

exports.tops = (request, response, next) => {
    console.log('Ruta /maquinasguerra');
    //console.log(request.get('Cookie').split('=')[1]);
    response.render('index', {
        username: request.session.username ? request.session.username : '',
    }); 
}