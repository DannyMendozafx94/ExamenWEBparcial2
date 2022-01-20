const { Router } = require('express');
const { check } = require('express-validator');

const router = require('../controllers').Tramite;

const { validarCampos } = require('../middlewares');



module.exports = router;