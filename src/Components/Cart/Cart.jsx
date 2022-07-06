import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"


function Cart() {

    const { cart, vaciar} = useContext(CartContext)

    // function generarOrden(e){
    //     e.preventDefault()
    //     let orden = {}

    //     orden.buyer = {Nombre:'Francisco', Apellido:'Peterson', Mail:'fp@gmail.com', Cel:'123456789'}
    //     orden.total = precioTotal()

    //     orden.items = cart.map(cartItem => {
    //         const id = cartItem.Id
    //         const nombre = cartItem.Nombre
    //         const precio = cartItem.price + cart.cantidad

    //         return{id, nombre, precio}
    //     })

    // console,log(orden)

    // }
    
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
                <button >Comprar</button>
            </div>
        </div>
    )
        
    
}

export default Cart
