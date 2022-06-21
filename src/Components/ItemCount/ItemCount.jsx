import { useState } from 'react'
import './ItemCount.css'

function Contador({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial);
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

    function agregar() {
        alert('Se agregaron ' + count + ' artículos al carrito')
    } 

    //<p>Fecha: {date}</p>

    return (
        <div className='contadorAgregar'>
            <div className='contador'>
                <button className='suma' onClick={suma}>+</button>
                <p>{count}</p>
                <button className='resta' onClick={resta}>-</button>
            </div>
            <button className='agregar' onClick={agregar}>Agregar al carrito</button>
        </div>
    )
}

export default Contador

