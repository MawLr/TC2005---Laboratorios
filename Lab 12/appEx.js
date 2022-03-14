const fs = require('fs');
const readline = require('readline');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutas_vehiculos = require('./routes/vehiculos.routes');
const rutas_armas = require('./routes/armas.routes');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/vehiculos', rutas_vehiculos);
app.use('/armas', rutas_armas);

//Middleware
app.use((request, response, next) => {
    response.render('index');
    next();
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.render('lista.ejs'); //Manda la respuesta
});

app.listen(3000);