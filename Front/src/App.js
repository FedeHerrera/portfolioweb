import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import LandingPage from './components/LandingPage/LandingPage'  

function App() {
  
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<LandingPage/>}/>
      <Route exact path='/home' element={<Home />}/>
      </Routes>


    </div>
  );
}

export default App;
