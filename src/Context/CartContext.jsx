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

    const addToCart = (objproducto) => {
    
        let carritoprevio = [...cart];
        
        if (carritoprevio.some((item) => item.product.Id === objproducto.product.Id)) 
        {
          carritoprevio.find((item) => item.product.Id === objproducto.product.Id).quantity += objproducto.quantity;
          setCart(carritoprevio);
        } else {
          setCart([...cart, objproducto]);
        }
       
    };

    const vaciar = () => {
        setCart([])
    }

     const totalPrice = () => {
         let total = 0;
    
        cart.forEach((newProduct) => {
           total +=
             parseInt(newProduct.product.Precio) * parseInt(newProduct.quantity);
         });
    
         return parseInt(total);
     };
    
    return(
        <CartContext.Provider value={{
            cart,
            setCart,
            addToCart,
            vaciar,
            totalPrice,
            
            

        }} >
            {children}
        </CartContext.Provider>
    )
}