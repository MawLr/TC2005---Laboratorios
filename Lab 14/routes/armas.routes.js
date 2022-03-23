const express = require('express');
const router = express.Router();

const visualController = require('../controllers/armas_controller');

//Para artistas
router.get('/nuevaArma', visualController.get_nueva_arma);
router.post('/nuevaArma', visualController.post_nueva_arma);

//Para bandas
router.get('/nuevoManufacturero', visualController.get_nuevo_manufacturero);
router.post('/nuevoManufacturero', visualController.post_nuevo_manufacturero);

router.use('/', visualController.principal);

module.exports = router;