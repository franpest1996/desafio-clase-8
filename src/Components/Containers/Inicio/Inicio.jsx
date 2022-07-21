import './Inicio.css'
import { Link, NavLink } from 'react-router-dom'
import remeraBoca from '../../../../Assets/Images/boca.jpg'

const Inicio = () =>{
    return(
        <div className='inicio'>
            <div>
                <ul className='cajas'>
                <div className='cajaSecciones'>
                        <NavLink to='/productos/Remeras'>
                            <li className='columna'><p>Camisetas</p><img src={remeraBoca} alt=""/></li>
                        </NavLink>
                    </div>
                    <div className='cajaSecciones'>
                        <NavLink to='/productos/Remeras'>
                            <li className='columna'><p>Remeras</p><img src={remeraBoca} alt=""/></li>
                        </NavLink>
                    </div>
                    <div className='cajaSecciones'>
                        <NavLink to='/productos/Pantalones'>
                            <li><p>Pantalones</p><img src={remeraBoca} alt=""/></li>
                        </NavLink>
                    </div>
                    <div className='cajaSecciones'>
                        <NavLink to='/productos/Shorts'>
                            <li><p>Shorts</p><img src={remeraBoca} alt=""/></li>
                        </NavLink>
                    </div>
                    <div className='cajaSecciones'>
                        <NavLink to='/productos/Buzos'>
                            <li><p>Buzos</p><img src={remeraBoca} alt=""/></li>
                        </NavLink>
                    </div>
                    <div className='cajaSecciones'>
                        <NavLink to='/productos/Camperas'>
                            <li><p>Camperas</p><img src={remeraBoca} alt=""/></li>
                        </NavLink>
                    </div>
                </ul>
            </div>
        </div>
        
    )
}
   
export default Inicio