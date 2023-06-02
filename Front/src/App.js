import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import PokemonDetail from './components/PokemonDetail/PokemonDetail'
import CreatePokemon from './components/CreatePokemon/CreatePokemon'
import SearchPokemon from './components/SearchPokemon/SearchPokemon'  
import LandingPage from './components/LandingPage/LandingPage'  

function App() {
  
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<LandingPage/>}/>
      <Route exact path='/home' element={<Home />}/>
      <Route exact path='/pokemons' element={<Home />}/>
        <Route exact path='/pokemons/:id' element={<PokemonDetail />}/>
        <Route exact path='/newPokemon' element={<CreatePokemon />}/>
        <Route exact path='/search/:name' element={<SearchPokemon/>}/>  
      </Routes>


    </div>
  );
}

export default App;
