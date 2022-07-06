import { Children, createContext } from "react";
import { useState } from 'react'

export const CartContext = createContext([])

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    // const addToCart = (item) => {
    //     setCart([
    //         ...cart,
    //         item
    //     ])
    // }

    const addToCart = (producto) => {
    
        let carritoprevio = [...cart];
        
        if (carritoprevio.some((item) => item.producto.Id === producto.producto.Id)) 
        {
          carritoprevio.find((item) => item.producto.Id === producto.producto.Id).quantity += producto.quantity;
          setCart(carritoprevio);
        } else {
          setCart([...cart, producto]);
        }
       
    };

    const vaciar = () => {
        setCart([])
    }

    // const totalPrice = () => {
    //     let total = 0;
    
    //     cart.forEach((newProduct) => {
    //       total +=
    //         parseInt(newProduct.producto.Precio) * parseInt(newProduct.quantity);
    //     });
    
    //     return parseInt(total);
    // };
    
    return(
        <CartContext.Provider value={{
            cart,
            setCart,
            addToCart,
            vaciar,
            
            

        }} >
            {children}
        </CartContext.Provider>
    )
}