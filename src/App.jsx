import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemDetailContainer from './Components/Containers/ItemDetailsContainers/ItemDetailContainer'
import ItemListContainer from './Components/Containers/ItemListContainer/ItemListContainer'
import Cart from './Components/Cart/Cart'
import { CartContextProvider } from './Context/CartContext'


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
          <NavBar/>
          <Routes>
              <Route index path='/productos' element={<ItemListContainer/>}/>
              <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
              <Route path='/info/:id' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
          </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
