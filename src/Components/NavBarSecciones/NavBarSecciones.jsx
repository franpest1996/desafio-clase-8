import { Link, NavLink } from 'react-router-dom'
import './NavBarSecciones.css'

function NavBarSecciones() {
    return (
      <nav className='NavBarSecciones'>  
        <ul>
            <li><NavLink to='/productos/Remeras'>Remeras</NavLink></li>
            <li><NavLink to='/productos/Pantalones'>Pantalones</NavLink></li>
            <li><NavLink to='/productos/Shorts'>Shorts</NavLink></li>
            <li><NavLink to='/productos/Buzos'>Buzos</NavLink></li>
            <li><NavLink to='/productos/Camperas'>Camperas</NavLink></li>
        </ul>
      </nav>
    )
  }

export default NavBarSecciones