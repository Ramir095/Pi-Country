const { Router } = require('express');
const { postActivities } = require('../services/activitiesServices')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//const { getCountriesApi } = require('../services/countriesServices')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post('/', postActivities);


module.exports = router;
