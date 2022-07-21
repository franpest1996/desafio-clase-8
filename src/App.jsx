import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemDetailContainer from './Components/Containers/ItemDetailsContainers/ItemDetailContainer'
import ItemListContainer from './Components/Containers/ItemListContainer/ItemListContainer'
import Cart from './Components/Containers/CartContainer/CartContainer'
import { CartContextProvider } from './Context/CartContext'
import CartContainer from './Components/Containers/CartContainer/CartContainer'
import Header from './Components/Header/Header'
import Inicio from './Components/Containers/Inicio/Inicio'


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route index path='/inicio' element={<Inicio/>}/>
              <Route path='/productos' element={<ItemListContainer/>}/>
              <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
              <Route path='/info/:id' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<CartContainer/>}/>
          </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
