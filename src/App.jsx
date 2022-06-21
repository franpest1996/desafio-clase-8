import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ListaProductos from './Components/ListaProductos/Lista.Productos'
import ItemDetailContainer from './Components/Containers/ItemDetailsContainers/ItemDetailContainer'
import ItemListContainer from './Components/Containers/ItemListContainer/ItemListContainer'
import CartWidget from './Components/CartWidget/CartWidget'
import Cart from './Components/Cart/Cart'


function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route index path='/productos' element={<ItemListContainer/>}/>
            <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
            <Route path='/info/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
