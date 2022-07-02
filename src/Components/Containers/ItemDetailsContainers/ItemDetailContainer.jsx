import { useEffect, useState } from "react"
import { getFetch, getFetchDetails } from "../../../Helpers/getFetch"
import { useParams } from 'react-router-dom'
import ItemDetail from "../../ItemDetail/ItemDetail"
import { collection, doc, getDocs, getDoc, getFirestore } from "firebase/firestore"


const ItemDetailContainer = () => {
  const [bool, setBool] = useState(true)
  const [producto, setProducto] = useState({})
  
  const { id } = useParams()
  console.log(id)

  //Para traer uno
  useEffect(()=>{
  const db = getFirestore();
  const queryItem = doc(db, 'productos', '0vGYDj0WqTDBY9jQn1Oo' )
  getDoc(queryItem)
  .then(resp => setProducto( {id: resp.id, ...resp.data} ))
  }, [bool])


  // useEffect(() => {
  //   getFetch()
  //   .then((resp) => setProducto(resp.find(prod => prod.Id === id)))
  //   .catch(error => console.log(error)) 
  // }, [])
  return <ItemDetail producto={producto}/>
  
}

export default ItemDetailContainer

