const { Router } = require('express');
const axios = require("axios")
const { Type } = require("../db")
const router = Router()



  
  router.get('/', async (_req, res, next) => {
        try {
          const getTypes = await axios(`https://pokeapi.co/api/v2/type`)
          let types = getTypes.data.results
          let typesFromAPI = types.map(t => {
            Type.findOrCreate({ 
              where: { name: t.name } 
            });
            })
          let tipos = await Type.findAll()
          res.send(tipos)
          } 
          
          catch (err) {
            next(err)
          }
      })
    
module.exports = router;