import { useEffect, useState } from "react"
import { getFetch } from "../../../Helpers/getFetch"
import { useParams } from 'react-router-dom'
import ItemList from "../../ItemList.jsx/ItemList"
import NavBarSecciones from "../../NavBarSecciones/NavBarSecciones"
import './ItemListContainer.css'
import { collection, doc, getDocs, getFirestore } from "firebase/firestore"

const ItemListContainer = ()=>{
    const [bool, setBool] = useState(true)
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoria} = useParams()
    console.log(categoria)

    //Para traer todos 
    // useEffect(()=>{
    //     const db = getFirestore();
    //     const queryCollection = collection(db, 'productos')
    //     getDocs(queryCollection)
    //     .then(resp => setProductos(resp.docs.map(producto => ({ id: producto.id, ...producto.data()}) )))
    //     .catch(error=>console.log(error))
    //     .finally(()=>setLoading(false))
    // }, [])

    // console.log(productos)

    
    
    
     useEffect(()=>{
         if (categoria) {
             getFetch()
             .then((resp)=>setProductos(resp.filter(producto => producto.Categoria === categoria)))
             .catch(error=>console.log(error)) 
             .finally(()=>setLoading(false))
         } else {
             getFetch()
             .then((resp)=>setProductos(resp))
             .catch(error=>console.log(error)) 
             .finally(()=>setLoading(false))
         }               
     }, [categoria])

    return(
        <div className="container">
        <NavBarSecciones/>    
            <div className="itemList">
                {loading ?
                        <p>Cargando...</p>
                :       
                        <ItemList productos={productos}/> 
                    
                }
            </div>
        </div>
    )
}

export default ItemListContainer