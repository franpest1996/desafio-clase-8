import { useContext, useState } from "react"
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import { CartContext } from "../../Context/CartContext"
import Contador from "../ItemCount/ItemCount"
import './ItemDetail.css'

const ItemDetail = ({producto}) => {
  const { cart } = useContext(CartContext)
  const [addedToCart, setAddedToCart ] = useState(false)
  
console.log(cart)

  return(
    <>
      <h2>{producto.Producto}</h2>
      <div className="detalle">
        
        <div>  
          <img className="fotoProducto" src={`${producto.Img}`} alt="" />
        </div>
        <div className="datosProductos">
          <p>Talle: {producto.Talle}</p>
          <p>Precio: {producto.Precio}</p>
          { addedToCart ? 
                <>
                  <div className="botonesCart">
                    <button><Link className='agregar' to="/cart"> Ir al Carrito </Link></button>
                    <button><Link className='agregar' to="/productos"> Seguir Comprando </Link></button>
                  </div>
                </>
                  :     
                  <Contador producto={producto}  onAdd={setAddedToCart} stock={producto.Stock} initial={1}/>
                }
        </div>
      </div>
    </>
  )
}

export default ItemDetail