const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const session = require('express-session');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const csrf = require('csurf');
const csrfProtection = csrf();

const multer = require('multer');

const rutas_vehiculos = require('./routes/vehiculos.routes');
const rutas_armas = require('./routes/armas.routes');
const rutas_users = require('./routes/user.routes');
const rutas_maquinasguerra = require('./routes/maquinas-guerra.routes');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: 'Prueba de Cookies', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

///fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().getTime() + '-' + file.originalname);
    },
});
//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 
//'archivo' es el nombre del input tipo file de la forma
app.use(multer({ storage: fileStorage }).single('imagen')); 

app.use(csrfProtection); 

app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

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
    response.send('Nada'); //Manda la respuesta
});

app.listen(3000);