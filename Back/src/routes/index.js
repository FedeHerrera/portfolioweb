const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Pokemons = require('../controlers/pokemonsC')
const Types = require('../controlers/typesC')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", Pokemons)
router.use("/types", Types)

module.exports = router;
