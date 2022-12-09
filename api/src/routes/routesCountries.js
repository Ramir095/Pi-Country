const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getAllCountries, getCountryId } = require('../services/countriesServices');

const router = Router();

// Configurar los routers
router.get('/', getAllCountries);
router.get('/:id', getCountryId);


module.exports = router;
