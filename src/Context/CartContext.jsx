import { Children, createContext } from "react";
import { useState } from 'react'

export const CartContext = createContext([])

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart([
            ...cart,
            item
        ])
    }

    const vaciar = () => {
        setCart([])
    }
    
    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            vaciar
        }} >
            {children}
        </CartContext.Provider>
    )
}