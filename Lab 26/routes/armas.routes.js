const express = require('express');
const router = express.Router();

const armasController = require('../controllers/armas_controller');

//Para artistas
router.get('/nuevaArma', armasController.get_nueva_arma);
router.post('/nuevaArma', armasController.post_nueva_arma);

//Para bandas
router.get('/nuevoManufacturero', armasController.get_nuevo_man);
router.post('/nuevoManufacturero', armasController.post_nuevo_man);

router.use('/', armasController.principal);

module.exports = router;