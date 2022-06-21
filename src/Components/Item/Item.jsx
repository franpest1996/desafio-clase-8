import { NavLink, Link } from 'react-router-dom'
import Contador from "../ItemCount/ItemCount"


const Item = ({producto}) =>{
    return(
        <div className="item" >
            <img src="../../../Assets/images/boca.jpg" alt="" />
            <h2>{producto.Producto}</h2>
            <p>Talle: {producto.Talle}</p>
            <p>Precio: {producto.Precio}</p>
            <p>Id: {producto.Id}</p>
            <Link to={`/info/${producto.Id}`}><button className="info">Información del Producto</button></Link>
            
            <Contador className="contador" stock={producto.Stock} initial={1}/>
        </div>
    )
}

export default Item

//{`{/info/${producto.Id}`}