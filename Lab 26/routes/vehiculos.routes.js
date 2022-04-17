const express = require('express');
const isAuth = require('../util/is-auth');
const router = express.Router();

const visualController = require('../controllers/vehiculos_controller');

//Blindados
router.get('/nuevoBlindado', visualController.get_nuevo_blindado);
router.post('/nuevoBlindado', visualController.post_nuevo_blindado);
//router.get('/:idBlindado', visualController.getBlindado);

//Aviones
router.get('/nuevoAvion', visualController.get_nuevo_avion);
router.post('/nuevoAvion', visualController.post_nuevo_avion);

//Navíos
router.get('/nuevoNavio', visualController.get_nuevo_navio);
router.post('/nuevoNavio', visualController.post_nuevo_navio);

router.get('/buscarBlindado/:valor', isAuth, visualController.buscarBlindado);

router.use('/', visualController.principal);

router.get('/:idBlindado', isAuth,visualController.getBlindado);

module.exports = router;