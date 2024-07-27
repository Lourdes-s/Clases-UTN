import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <h2>Logo</h2>
        <NavLink to={'/contact'}>Contacto</NavLink>
        <NavLink to={'/cart'}>Carrito</NavLink>
    </header>
  )
}

/* el navlink hacce lo mismo que un anchor pero no va a recargar la pagina cuando lo haga, si lo hubiesemos hecho con un anchor se hubiese recargado y ese seria un problema, que nunca se recargue la pagina para que no se vuelva a cargar el objeto document, como es mala practica usar recargas del navegador, para evitar esa recarga, es usar navlink  */
export default Navbar