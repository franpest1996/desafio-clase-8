import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import Contador from "../ItemCount/ItemCount"
import './ItemDetail.css'

const ItemDetail = ({producto}) => {
  const { cart} = useContext(CartContext)
  
  
console.log(cart)

  return(
    <div className="detalle">
      <h2>Detalle</h2>
      <p>{producto.Producto}</p>
      <p>Talle: {producto.Talle}</p>
      <p>Precio: {producto.Precio}</p>
      <Contador data={producto} stock={producto.Stock} initial={1}/>
    </div>
  )
}

export default ItemDetail