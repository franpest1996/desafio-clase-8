import { useEffect, useState } from "react"
import { getFetch } from "../../../Helpers/getFetch"
import { useParams } from 'react-router-dom'
import ItemList from "../../ItemList.jsx/ItemList"
import NavBarSecciones from "../../NavBarSecciones/NavBarSecciones"
import './ItemListContainer.css'

const ItemListContainer = ()=>{
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoria} = useParams()
    console.log(categoria)

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
        <div>
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