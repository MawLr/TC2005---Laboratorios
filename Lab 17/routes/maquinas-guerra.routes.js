const express = require('express');
const router = express.Router();

const userController = require('../controllers/maquinas-guerra_controller');


router.get('/maquinas-guerra', userController.maquinasguerra);

module.exports = router;