import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"



const Cart = ({item}) => {
    const { removeProduct } = useContext(CartContext)

    return (
                        <tr>
                            <td><img style={{width: "100px", height:"100px"}} src={item.product.Img}/></td>
                            <td>{item.product.Producto}</td>
                            <td>{item.quantity}</td>
                            <td>${item.product.Precio}</td>
                            <td><button variant="danger" onClick={()=>{removeProduct(item.product.Id)}}>
                                X
                            </button></td>
                        </tr>
  )
}

export default Cart;