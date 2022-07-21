import { useContext } from "react"
import { CartContext } from "../../../Context/CartContext"
import Cart from "../../Cart/cart"
import './CartContainer.css'


function CartContainer() {

    const { cart, vaciar, totalPrice} = useContext(CartContext)

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
    
    // Nombre: {item.product.Producto} Talle: {item.product.Talle} Precio: {item.product.Precio} Cantidad: {item.quantity}
    return(
        <div className="container2">
            
            <table>
                <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Borrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(item => 
                                <Cart item={item} key={item.product.Id} />
                                
                            )
                        }
                    </tbody>
                    <tbody>
                        <tr className="footerTable">
                            <th>Total: $ {totalPrice()}</th>
                            <th><button onClick={vaciar}>Vaciar Carrito</button></th>
                            <th><button >Comprar</button></th>
                        </tr>
                    </tbody>
                </table>
        </div>
    )
        
    
}

export default CartContainer
