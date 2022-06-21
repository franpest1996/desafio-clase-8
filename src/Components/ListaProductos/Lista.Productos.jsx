import Card from "../Card/Card"
import ItemListContainer from "../Containers/ItemListContainer/ItemListContainer";
import './ListaProductos.css'

const ListaProductos = ({children}) => {
    return(
        <div>
            <h2>{children}</h2>
            <div className="listaProductos">
                <Card title='Remera' talle='M' precio={300} />
                <Card title='Pantalon' talle='L' precio={900} />
                {/* <Card title='Zapatillas' talle='XL' precio={3000} />
                <Card title='Medias' talle='S' precio={5000} />
                <Card title='Remera' talle='M' precio={300} /> */}
            </div>
            <div className="listaProductos">
                <ItemListContainer/>
            </div>
        </div>
    )
}

export default ListaProductos