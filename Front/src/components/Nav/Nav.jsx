import React from "react";
import './nav.css'
import { Link } from 'react-router-dom'

function Nav() {

  const handleReload = () => {
    if(window.location.href == 'http://localhost:3000/home'){
      window.location.reload()
    }
  }

    return (
      <nav>
      <h1>Federico Herrera</h1>
      <ul class="navigation">
        <li><a href="#about" class="nav-link">Sobre mi</a></li>
        <li><a href="#skills" class="nav-link">Conocimientos</a></li>
        <li><a href="#projects" class="nav-link">Proyectos</a></li>
        <li><a href="#contact" class="nav-link">¡Contactame!</a></li>
      </ul>
      <button class="burger-menu" id="burger-menu">
        <ion-icon class="bars" name="menu-outline"></ion-icon>
      </button>
</nav>
    );
  }
  
  export default Nav;