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
    <div className="detalle">
      <h2>Detalle</h2>
      <p>{producto.Producto}</p>
      <p>Talle: {producto.Talle}</p>
      <p>Precio: {producto.Precio}</p>
      { addedToCart ? <>
              <Link to="/cart"> Ir al Carrito </Link> 
            </>
              : 
                          
              <Contador data={producto} onAdd={setAddedToCart} stock={producto.Stock} initial={1}/>
            

            }
      
    </div>
  )
}

export default ItemDetail