import { Link, NavLink } from 'react-router-dom'
import './NavBarSecciones.css'

function NavBarSecciones() {
    return (
      <nav className='NavBarSecciones'>  
        <ul>
            <NavLink to='/productos/Remeras'><li>Remeras</li></NavLink>
            <NavLink to='/productos/Pantalones'><li>Pantalones</li></NavLink>
            <NavLink to='/productos/Shorts'><li>Shorts</li></NavLink>
            <NavLink to='/productos/Buzos'><li>Buzos</li></NavLink>
            <NavLink to='/productos/Camperas'><li>Camperas</li></NavLink>
        </ul>
      </nav>
    )
  }

export default NavBarSecciones