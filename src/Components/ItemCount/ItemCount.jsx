import { useState } from 'react'
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import './ItemCount.css'

function Contador({stock, initial, data, onAdd}) {
    const [count, setCount] = useState(initial);
    const { addToCart } = useContext(CartContext)
    //const [date, setDate] = useState(Date());

    function suma() {
        if( count < stock ) {
            setCount(count + 1);
            //setDate(Date());
        }
    }

    function resta() {
        if( count > initial) {
            setCount(count - 1);
            //setDate(Date());
        }
    }

    // const agregar = () => {
    //     onAdd(count)
    //     // 
    // } 

    function handleSubmit(){
        addToCart({
            quantity: count,
            producto: data
        })
        onAdd(true)
    }

    return (
        <div className='contadorAgregar'>
            <div className='contador'>
                <button className='suma' onClick={suma}>+</button>
                <p>{count}</p>
                <button className='resta' onClick={resta}>-</button>
            </div>
            <button className='agregar' onClick={handleSubmit}>Agregar al carrito</button>
        </div>
    )
}

export default Contador

