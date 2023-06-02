const { Router } = require('express');
const axios = require("axios")
const {Pokemon, Type} = require('../db')
const router = Router()

    router.post('/', async (req, res, next) => {
        const { name, weight, height, attack, speed, defense, hp, image, type} = req.body
        try {
            if(!name) return res.status(500).send('Se requiere nombre')
            else if(/[^a-zA-Z, ]/g.test(name)) return res.status(500).send('El nombre solo puede contener letras!')
            if(!weight || !height || !attack || !speed || !defense || !hp) return res.status(500).send('Se requieren todas las estadisticas')        
            let newPokemon = await Pokemon.create({
                name,
                weight,
                height,
                attack,
                speed,
                defense,
                hp,
                image,
            })
            let typeDb = await Type.findAll({
                where:{ name: type }
            })
            
            await newPokemon.addTypes(typeDb)

            res.send('ok')
        } catch (error) {
            next(error)
        }
    })  
    
  router.get('/', async (req, res, next) => {
    const { name } = req.query
    if (name){
        const pokemon = await Pokemon.findOne({
            where: {
              name: name
            }
          })
          if (pokemon){
            try{
                return res.send(pokemon)
            }
            catch (err){
                next ("El nombre que introduciste no fue correcto!")
            }
          }
        try{
    
            const getPokemon = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
            let pokemon = getPokemon.data
            let elpoke = {}
            elpoke.name = pokemon.name
            elpoke.image = pokemon.sprites.front_default
            elpoke.weight = pokemon.weight
            elpoke.height = pokemon.height
            pokemon.stats.forEach(stat => {
                elpoke[stat.stat.name] = stat.base_stat
            })
            elpoke.type = []
            pokemon.types.forEach(type => {
                elpoke.type = elpoke.type + type.type.name + " "
            })
            return res.send(elpoke)
            }
            catch (err){
                next ("El nombre que introduciste no fue correcto!")
            }
    }
    else {
    try{
        const getPokemons = await axios(`https://pokeapi.co/api/v2/pokemon?limit=40`)
        let pokemons = getPokemons.data.results
        let pokemonsFromAPI = pokemons.map(p => {
            return{
                id: p.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/',''),
                name: p.name,

            }
        })
      for(let i in pokemonsFromAPI){
            const getPokemon = await axios(`https://pokeapi.co/api/v2/pokemon/${pokemonsFromAPI[i].id}`)
            elpoke = getPokemon.data
            pokemonsFromAPI[i].weight = elpoke.weight
            pokemonsFromAPI[i].height = elpoke.height
            pokemonsFromAPI[i].image = elpoke.sprites.front_default

            elpoke.stats.forEach(stat => {
                pokemonsFromAPI[i][stat.stat.name] = stat.base_stat
            })
            pokemonsFromAPI[i].type = elpoke.types.map(t => t.type.name)        
        } 
          const pokemonsFromDB = (await Pokemon.findAll({
            include: Type
        })) 
        let pokemonsDB = pokemonsFromDB.map(p => {
            return{
                id: p.id,
                name: p.name,
                weight: p.weight,
                height: p.height,
                attack: p.attack,
                hp: p.hp,
                image: p.image,
                speed: p.speed,
                defense: p.defense,
            }
        }) 
        for (i in pokemonsDB){
            types = await pokemonsFromDB[i].getTypes()
            pokemonsDB[i].type = types.map(t => t.name)   

        }
        let allPokemons = [...pokemonsFromAPI, ...pokemonsDB]
            res.send([...allPokemons])
    } catch (error){ 
        next(error)
    }

  }})

    router.get('/:pokemonID', async (req, res, next) => {
        const { pokemonID } = req.params
        try {
                if(String(pokemonID).length === 36){
                    var pokemon = await Pokemon.findByPk(pokemonID)
                    types = await pokemon.getTypes()
                    pokemon.dataValues.type = types.map(t => t.name)
                    await pokemon.save()
                    res.send(pokemon)
            }
                else{
                    const getPokemon = await axios(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
                    let pokemon = getPokemon.data
                    let elpoke = {}
                    elpoke.name = pokemon.name
                    elpoke.weight = pokemon.weight
                    elpoke.image = pokemon.sprites.front_default
                    elpoke.height = pokemon.height
                    pokemon.stats.forEach(stat => {
                        elpoke[stat.stat.name] = stat.base_stat
                    })
                    elpoke.type = []
                    pokemon.types.forEach(type => {
                        elpoke.type = elpoke.type + type.type.name + " "
                    })
                    return res.send(elpoke)
                }}
                catch (err){
                    next (err)
                }})



module.exports = router;