const express = require('express');
const router = express.Router();

const userController = require('../controllers/maquinas-guerra_controllers');


router.get('/maquinas-guerra', userController.tops);

module.exports = router;