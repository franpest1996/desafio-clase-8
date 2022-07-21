import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

function NavBar() {
    return (
      <nav className='NavBar'>
        <h1>TodoBoca</h1>  
        <ul>
            <NavLink to='/inicio'><li>Inicio</li></NavLink>
            <NavLink to='/productos'><li>Productos</li></NavLink>
            <NavLink to='/contacto'><li>Contacto</li></NavLink>
            <NavLink to='/cart'><li><CartWidget/></li></NavLink>
        </ul>
      </nav>
    )
  }

export default NavBar