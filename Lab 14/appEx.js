const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutas_vehiculos = require('./routes/vehiculos.routes');
const rutas_armas = require('./routes/armas.routes');
const rutas_users = require('./routes/user.routes');
const rutas_maquinasguerra = require('./routes/maquinas-guerra.routes');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: 'Prueba de Cookies', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use('/users', rutas_users);
app.use('/vehiculos', rutas_vehiculos);
app.use('/armas', rutas_armas);

//Middleware
app.use((request, response, next) => {
    response.redirect('/users');
    next();
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.render('Nada'); //Manda la respuesta
});

app.listen(3000);