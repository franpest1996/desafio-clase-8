import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"


function Cart() {

    const { cart, vaciar } = useContext(CartContext)

    
    return(
        <div>
            <h2>Carrito</h2>
            <ul>
                {
                    cart.map(item => <li key={item.Id}>
                        Nombre: {item.Producto} Talle: {item.Talle} Precio: {item.Precio} Cantidad: {item.cantidad}
                    </li> )
                }
            </ul>
            <p>Total: $</p>
            <div>
                <button onClick={vaciar}>Vaciar Carrito</button>
            </div>
        </div>
    )
        
    
}

export default Cart
