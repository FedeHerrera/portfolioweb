import React from "react";
import Nav from "../Nav/Nav";
import { useDispatch, useSelector} from 'react-redux'
import PokemonCard from '../PokemonCard/PokemonCard'
import { getAllPokemons, order, orderAttack, filterTypes, filterMadeBy} from '../../actions'
import { useEffect, useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import Paginate from "../Paginate/Paginate";
import Filter from "../Filter/Filter";
import "./Home.css"
var filtrosActivados = ['none', 'none', 'none', 'none'] // [0] = Ordenado alfabeticamente, [1] = Ordenado por ataque, [2] = Filtro por usuario o API, [3] = Filtro por tipo


function Home() {
    const navigate = useNavigate()
    const [updatePage, setUpdatePage] = useState('')
    const [page, setPage] = useState(1)
    const numpokemons = 12
    const dispatch = useDispatch()
    const allPokemons = useSelector(state => state.pokemons)
    const pokemonFound = useSelector(state => state.pokemonsName)
    const [name, setName] = useState("");
    
    const indexLast = page * numpokemons
    const indexFirst = indexLast - numpokemons
    let currentPokemons = pokemonFound.length ? pokemonFound.slice(indexFirst, indexLast) : allPokemons.slice(indexFirst, indexLast)
    const handlePage = (num) => setPage(num)
    const totalPokemons = pokemonFound.length ? pokemonFound.length : allPokemons.length
    const numLength = Math.ceil(totalPokemons / numpokemons)
    const handleNext = () => {
      if(numLength !== page) setPage(page + 1)
    }
    const handlePrev = () => {
      if(page !== 1) setPage(page - 1)
    }

    
    useEffect(() => {
      dispatch(getAllPokemons())
      return () => dispatch(getAllPokemons()) 
    }, [dispatch])

    const Filtros = () => {
      dispatch(filterMadeBy(filtrosActivados[2])) // Pregunto si muestro hechos por el usuario, traidos de la api, o todos
      if (filtrosActivados[0] !== 'none') dispatch(order(filtrosActivados[0])) // Reviso si me pide que ordene alfabeticamente
      else if (filtrosActivados[1] !== 'none') dispatch(orderAttack(filtrosActivados[1])) // O si quiere que ordene por ataque
      if (filtrosActivados[3] !== 'none') dispatch(filterTypes(filtrosActivados[3])) //Finalmente filtro por tipos
    }
    

    const handleOrder = (event) => {
        filtrosActivados[0] = event.target.value // Indico que quiero filtrar por orden
        filtrosActivados[1] = 'none'
        Filtros()
        setPage(1)
        setUpdatePage(event.target.value)
      }
    
      const handleAttackOrder = (event) => {
        filtrosActivados[1] = event.target.value // Indico que quiero filtrar por ataque
        filtrosActivados[0] = 'none'
        Filtros()
        setPage(1)
        setUpdatePage(event.target.value)
      } 

      const handleMadeBy = (event) => {
        filtrosActivados[2] = event.target.value //Selecciono si filtro por hechos por el usuario, traidos de la api, o todos
        Filtros()
        setPage(1)
        setUpdatePage(event.target.value)
      } 

      const handleTypes = (event) => {
        filtrosActivados[3] = event.target.value
        Filtros() //Selecciono el tipo por el cual voy a filtrar
        setPage(1)
        setUpdatePage(event.target.value)
      } 


      const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/search/${name}`)
    }

      
    return (
        <>
        <Nav/>
        <div id="background">
        </div>

        <div id="home">
        <Filter id ="filter"
        handleOrder={handleOrder} 
        handleAttackOrder={handleAttackOrder} 
        handleTypes={handleTypes} 
        handleMadeBy={handleMadeBy} 
       />
    <form onSubmit={handleSubmit} id="search">
      <label>Ingresa el nombre del pokemon a buscar:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
        <div className="grid">
        {
          currentPokemons?.map(p => {
            return(
              <div key={p.id} className='pokemonCards'>
                <Link to={`/pokemons/${p.id}`}>
                  <PokemonCard 
                    name={p.name} 
                    image={p.image} 
                    id={p.id}
                    type={p.type}
                    />
                </Link>
              </div>
            )
          })
        }
        </div>
        <Paginate
        numLength={numLength} 
        page={handlePage}
        nextP={handleNext}
        prevP={handlePrev}/>    
  
      </div>
      </>
    )
  }
    
  export default Home;