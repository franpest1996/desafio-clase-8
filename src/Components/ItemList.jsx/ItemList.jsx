import Item from "../Item/Item"


const ItemList = ({productos}) =>{
    return(
        productos.map((producto)=> <Item key={producto.Id} producto={producto} />  ) 
    )
}

export default ItemList